import { Propiedad } from '../../models/index.js'
import imagenDelete from '../../utils/imagenDelete.js'

const editarImagen = async (req, res) => {
  const { id } = req.params
  let propiedad

  try {
    propiedad = await Propiedad.findByPk(id)

    await imagenDelete(propiedad.dataValues.imagen)

    await Propiedad.update(
      {
        imagen: await req.file.path,
      },
      {
        where: { id },
      }
    )

    return res.redirect('/mis-propiedades')
  } catch (error) {
    console.log(error)
  }
}

export default editarImagen
