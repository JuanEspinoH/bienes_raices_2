import { Propiedad } from '../../models/index.js'

const almacenarImagen = async (req, res, next) => {
  const { id } = req.params
  let propiedad

  try {
    propiedad = await Propiedad.findByPk(id)

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

export default almacenarImagen
