const formularioSignUp = async (req, res) => {
  res.render('auth/sign-up', {
    autenticado: true,
    pagina: 'Iniciar Sesion',
    csrfToken: req.csrfToken(),
  })
}

export default formularioSignUp
