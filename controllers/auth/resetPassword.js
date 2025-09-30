import { generarToken } from '../../utils/generarToken.js'
import { passwordValidations } from '../../utils/validations.js'
import { Usuario } from '../../models/index.js'
import { enviarEmailPassword } from '../../utils/emailSender.js'

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

    await enviarEmailPassword({
      nombre: usuario.nombre,
      email: usuario.email,
      token: token,
    })

    return res.render('auth/mensaje', {
      pagina: 'Correo para reestablecer la contraseña enviado',
      mensaje:
        'Hemos enviado un Email , presiona el enlace en el correo para reestablecer y continuar.',
    })
  } catch (error) {
    console.log(error)
  }
}

export default resetPassword
