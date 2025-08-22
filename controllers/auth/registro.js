import Usuario from '../../models/Usuario.js'
import { userValidations } from '../../utils/validations.js'
import { enviarEmail } from '../../utils/emailSender.js'
import { generarToken } from '../../utils/generarToken.js'

const registro = async (req, res) => {
  const { nombre, email, password, repetir_password } = req.body

  const checkUserData = await userValidations(req)

  if (checkUserData.errors.length !== 0) {
    return res.render('auth/sign-up', {
      pagina: 'Crear Cuenta',
      errores: checkUserData.errors,
      csrfToken: req.csrfToken(),
      usuario: {
        nombre: req.body.nombre,
        password: req.body.password,
        email: req.body.email,
        repetir_password: req.body.repetir_password,
      },
    })
  }
  try {
    const checkExistingUser = await Usuario.findOne({ where: { email } })
    if (checkExistingUser !== null) {
      return res.render('auth/sign-up', {
        pagina: 'Crear Cuenta',
        errores: [{ msg: 'Email ya esta registrado ' }],
        csrfToken: req.csrfToken(),
        usuario: {
          nombre: req.body.nombre,
          password: req.body.password,
          email: req.body.email,
          repetir_password: req.body.repetir_password,
        },
      })
    }

    const token = generarToken()

    await Usuario.create({ nombre, email, password, token })

    await enviarEmail({ nombre, email, token })
  } catch (error) {
    console.log(error)
  }

  res.render('auth/mensaje', {
    pagina: 'Cuenta Creada Correctamente',
    mensaje:
      'Hemos enviado un Email de confirmacion, presiona el enlace en el correo para confirmar y continuar.',
  })
}

export default registro
