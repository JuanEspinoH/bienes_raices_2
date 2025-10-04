const formularioSignUp = async (req, res) => {
  res.render('auth/sign-up', {
    autenticado: true,
    pagina: 'Crea tu cuenta',
    csrfToken: req.csrfToken(),
  })
}

export default formularioSignUp
