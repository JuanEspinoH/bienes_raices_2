const formularioOlvidarContraseña = async (req, res) => {
  res.render('auth/olvide-password', {
    csrfToken: req.csrfToken(),
    pagina: 'Recuperar tu acceso a Bienes Raices',
  })
}

export default formularioOlvidarContraseña
