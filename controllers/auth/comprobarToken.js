import { Usuario } from '../../models/index.js'

const comprobarToken = async (req, res) => {
  const { token } = req.params
  try {
    const usuario = await Usuario.findOne({
      where: {
        token,
      },
    })

    if (usuario === null) {
      return res.render('auth/mensaje', {
        pagina: 'Usuario no encontrado',
        mensaje: 'Usuario No encontrado o link caduco.',
      })
    }
  } catch (error) {
    console.log(error)
  }
  res.render('auth/reset-password', {
    pagina: 'Reestablecer Contraseña',
    csrfToken: req.csrfToken(),
    token: req.params.token,
    usuario: {
      password: req.body?.password,
      repetir_password: req.body?.repetir_password,
    },
  })
}

export default comprobarToken
