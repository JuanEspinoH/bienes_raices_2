const formularioLogin = async (req, res) => {
  res.render('auth/login', {
    pagina: 'Iniciar Sesion',
    csrfToken: req.csrfToken(),
    usuario: {
      password: req.body?.password,
      email: req.body?.email,
    },
  })
}

export default formularioLogin
