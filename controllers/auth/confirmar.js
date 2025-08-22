import Usuario from '../../models/Usuario'

const confirmar = async (req, res) => {
  const { token } = req.params
  const usuario = await prisma.usuario.findFirst({
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

  await prisma.usuario.update({
    where: { token: token, id: usuario.id },
    data: {
      token: null,
      confirmado: true,
    },
  })

  res.render('auth/confirmar-cuenta', {
    pagina: 'Cuenta Confirmada',
    mensaje: 'La cuenta se confirmo correctamente',
  })
}
