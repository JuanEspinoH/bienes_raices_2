const cerrarSesion = async (req, res) => {
  return res.clearCookie('_token').status(200).redirect('/auth/login')
}

export default cerrarSesion
