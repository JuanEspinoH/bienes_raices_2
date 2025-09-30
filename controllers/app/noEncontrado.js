const noEncontrado = async (req, res) => {
  return res.render('404', {
    pagina: 'No Encontrado',
    csrfToken: req.csrfToken(),
  })
}

export default noEncontrado
