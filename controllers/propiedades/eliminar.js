import { Propiedad } from '../../models/index.js'
import cloudinary from '../../utils/cloudinaryUploader.js'
import imagenDelete from '../../utils/imagenDelete.js'

const eliminar = async (req, res) => {
  const { id } = req.params

  try {
    const propiedad = await Propiedad.findByPk(id)

    if (propiedad === null) {
      return res.redirect('/mis-propiedades')
    }

    if (propiedad.usuarioId.toString() !== req.usuario.id.toString()) {
      return res.redirect('/mis-propiedades')
    }

    try {
      await imagenDelete(propiedad.dataValues.imagen)
      await propiedad.destroy()
    } catch (error) {
      console.log('ELIMINAR.JS', error)
    }

    res.redirect('/mis-propiedades')
  } catch (error) {
    console.log(error)
  }
}

export default eliminar
