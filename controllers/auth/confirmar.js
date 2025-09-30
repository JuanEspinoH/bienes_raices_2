import { Usuario } from '../../models/index.js'

const confirmar = async (req, res) => {
  const { token } = req.params
  const usuario = await Usuario.findOne({
    where: {
      token,
    },
  })

  if (!usuario) {
    return res.render('auth/confirmar-cuenta', {
      pagina: 'Error al confirmar tu cuenta',
      mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo',
      error: true,
    })
  }

  await usuario.update({
    confirmado: true,
    token: null,
  })

  res.render('auth/confirmar-cuenta', {
    pagina: 'Cuenta Confirmada',
    mensaje: 'La cuenta se confirmo correctamente',
  })
}

export default confirmar
