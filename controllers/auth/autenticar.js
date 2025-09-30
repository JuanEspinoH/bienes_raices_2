import { Usuario } from '../../models/index.js'
import { loginValidations } from '../../utils/validations.js'
import argon2 from 'argon2'
import jwtGenerator from '../../utils/jwtGenerator.js'

const autenticar = async (req, res) => {
  const { password, email } = req.body

  const loginCheck = await loginValidations(req)

  if (loginCheck.errors.length) {
    return res.render('auth/login', {
      autenticado: true,
      pagina: 'Iniciar Sesion',
      errores: loginCheck.errors,
      csrfToken: req.csrfToken(),
      usuario: {
        password: req.body.password,
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
    if (usuario.dataValues === null) {
      return res.render('auth/login', {
        autenticado: true,
        pagina: 'Iniciar Sesion',
        errores: [{ msg: 'Usuario no registrado' }],
        csrfToken: req.csrfToken(),
        usuario: {
          password: req.body.password,
          email: req.body.email,
        },
      })
    }
    if (usuario.confirmado !== true) {
      return res.render('auth/login', {
        autenticado: true,
        pagina: 'Iniciar Sesion',
        errores: [{ msg: 'Cuanta no ha sido confirmada' }],
        csrfToken: req.csrfToken(),
        usuario: {
          password: req.body.password,
          email: req.body.email,
        },
      })
    }
    const verify = await argon2.verify(usuario.dataValues.password, password)
    if (verify === false) {
      return res.render('auth/login', {
        autenticado: true,
        pagina: 'Iniciar Sesion',
        errores: [{ msg: 'Password Incorrecta' }],
        csrfToken: req.csrfToken(),
        usuario: {
          password: req.body.password,
          email: req.body.email,
        },
      })
    }

    const token = jwtGenerator({
      id: usuario.dataValues.id,
    })

    return res
      .cookie('_token', token, {
        httpOnly: true,
      })
      .redirect('/mis-propiedades')
  } catch (error) {
    console.log(error)
  }

  return res.render('auth/login', {
    autenticado: true,
    pagina: 'Iniciar Sesion',
    errores: loginCheck.errors,
    csrfToken: req.csrfToken(),
    usuario: {
      password: req.body.password,
      email: req.body.email,
    },
  })
}

export default autenticar
