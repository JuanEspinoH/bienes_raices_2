import { Usuario } from '../../models/index.js'
import { resetValidations } from '../../utils/validations.js'
import argon2 from 'argon2'

const nuevoPassword = async (req, res) => {
  const { password, repetir_password } = req.body
  const { token } = req.params

  const checkPassword = await resetValidations(req)

  if (checkPassword.errors.length) {
    return res.render('auth/reset-password', {
      pagina: 'Reestablecer Contraseña',
      errores: checkPassword.errors,
      csrfToken: req.csrfToken(),
      token: req.params.token,
      usuario: {
        password: req.body.password,
        repetir_password: req.body.repetir_password,
      },
    })
  }

  try {
    const passwordHasheada = await argon2.hash(password)
    const usuario = await Usuario.findOne({
      where: {
        token,
      },
    })
    if (usuario === null) {
      return res.render('auth/reset-password', {
        pagina: 'Reestablecer Contraseña',
        errores: [{ msg: 'Usuario NO encantrado o link caducado' }],
        csrfToken: req.csrfToken(),
        token: req.params.token,
        usuario: {
          password: req.body.password,
          repetir_password: req.body.repetir_password,
        },
      })
    }

    await usuario.update({
      password: passwordHasheada,
    })

    return res.redirect('/auth/login')
  } catch (error) {
    console.log(error)
  }
}

export default nuevoPassword
