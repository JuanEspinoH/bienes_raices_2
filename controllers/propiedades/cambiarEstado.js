import { Propiedad } from '../../models/index.js'

const cambiarEstado = async (req, res) => {
  const { id } = req.params
  try {
    const propiedad = await Propiedad.findByPk(id)

    if (propiedad === null) {
      return res.redirect('/mis-propiedades')
    }

    if (propiedad.usuarioId.toString() !== req.usuario.id.toString()) {
      return res.redirect('/mis-propiedades')
    }

    propiedad.publicado = !propiedad.publicado
    await propiedad.save()

    res.json({
      resultado: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export default cambiarEstado
