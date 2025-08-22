import { generarToken } from '../../utils/generarToken.js'
import { passwordValidations } from '../../utils/validations.js'
import Usuario from '../../models/Usuario.js'

const resetPassword = async (req, res) => {
  const { email } = req.body
  const checkPasswordData = await passwordValidations(req)

  if (checkPasswordData.errors.length !== 0) {
    return res.render('auth/olvide-password', {
      pagina: 'Reestablecer Contraseña',
      errores: checkPasswordData.errors,
      csrfToken: req.csrfToken(),
      usuario: {
        email: req.body.email,
      },
    })
  }

  try {
    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    })
    if (usuario === null) {
      return res.render('auth/olvide-password', {
        pagina: 'Reestablecer Contraseña',
        errores: [{ msg: 'Email NO esta registrado' }],
        csrfToken: req.csrfToken(),
        usuario: {
          email: req.body.email,
        },
      })
    }
    const token = generarToken()
    usuario.token = token
    await usuario.save()
  } catch (error) {
    console.log(error)
  }

  return res.json(req.body)
}

export default resetPassword
