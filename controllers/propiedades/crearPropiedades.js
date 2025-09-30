import { Precio, Categoria } from '../../models/index.js'

const crearPropiedades = async (req, res) => {
  const [categorias, precios] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ])

  return res.render('propiedades/crear', {
    pagina: 'Crear Propiedades',
    usuario: req.usuario,
    csrfToken: req.csrfToken(),
    barra: true,
    categorias,
    precios,
    data: {
      titulo: req.body?.titulo,
      descripcion: req.body?.descripcion,
      wc: req.body?.wc,
      estacionamiento: req.body?.estacionamiento,
      habitaciones: req.body?.habitaciones,
      categoria: req.body?.categoria,
      precio: req.body?.precio,
      calle: req.body?.calle,
      lat: req.body?.lat,
      lng: req.body?.lng,
    },
  })
}

export default crearPropiedades
