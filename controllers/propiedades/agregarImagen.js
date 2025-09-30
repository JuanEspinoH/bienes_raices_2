import { Propiedad } from '../../models/index.js'

export const agregarImagen = async (req, res) => {
  const { id } = req.params

  try {
    const propiedad = await Propiedad.findByPk(id)
    if (!propiedad) {
      return res.redirect('/mis-propiedades')
    }
    // if (!propiedad.publicado) {
    //   return res.redirect('/mis-propiedades')
    // }

    if (propiedad.usuarioId.toString() !== req.usuario.id.toString()) {
      return res.redirect('/mis-propiedades')
    }

    return res.render(`propiedades/agregar-imagen`, {
      barra: true,
      usuario: req.usuario,
      pagina: `Agregar Imangen ${propiedad.titulo} `,
      csrfToken: req.csrfToken(),
      propiedad: propiedad,
    })
  } catch (error) {
    console.log(error)
  }
}

export default agregarImagen
