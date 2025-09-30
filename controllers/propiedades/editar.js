import { Categoria, Precio, Propiedad } from '../../models/index.js'

const editar = async (req, res) => {
  const { id } = req.params
  const [categorias, precios] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ])

  const propiedad = await Propiedad.findByPk(id, {
    include: [
      {
        model: Categoria,
        as: 'categoria',
      },
      {
        model: Precio,
        as: 'precio',
      },
    ],
  })

  if (propiedad === null) {
    return res.redirect('/mis-propiedades')
  }

  if (propiedad.usuarioId.toString() !== req.usuario.id.toString()) {
    return res.redirect('/mis-propiedades')
  }

  res.render('propiedades/editar', {
    pagina: `Editar Propiedades ${propiedad.titulo}`,
    csrfToken: req.csrfToken(),
    categorias,
    precios,
    data: {
      id: propiedad?.id,
      titulo: propiedad?.titulo,
      descripcion: propiedad?.descripcion,
      wc: propiedad?.wc,
      estacionamiento: propiedad?.estacionamiento,
      habitaciones: propiedad?.habitaciones,
      categoria: propiedad.categoria.dataValues.nombre,
      precio: propiedad.precio.dataValues.nombre,
      calle: propiedad?.calle,
      lat: propiedad?.lat,
      lng: propiedad?.lng,
    },
  })
}

export default editar
