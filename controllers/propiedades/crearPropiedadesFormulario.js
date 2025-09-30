import { Precio, Categoria, Propiedad } from '../../models/index.js'
import { propiedadesValidations } from '../../utils/validations.js'

const crearPropiedadesFormulario = async (req, res) => {
  const [categorias, precios] = await Promise.all([
    Categoria.findAll(),
    Precio.findAll(),
  ])

  const validacionesCheck = await propiedadesValidations(req)

  if (validacionesCheck.errors.length !== 0) {
    return res.render('propiedades/crear', {
      pagina: 'Crear Propiedades',
      csrfToken: req.csrfToken(),
      barra: true,
      categorias,
      errores: validacionesCheck.errors,
      precios,
      data: {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        wc: req.body.wc,
        estacionamiento: req.body.estacionamiento,
        habitaciones: req.body.habitaciones,
        categoria: req.body.categoria,
        precio: req.body.precio,
        calle: req.body.calle,
        lat: req.body.lat,
        lng: req.body.lng,
      },
    })
  }
  try {
    const newPropiedad = await Propiedad.create({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      habitaciones: Number(req.body.habitaciones),
      estacionamiento: Number(req.body.estacionamiento),
      wc: Number(req.body.wc),
      calle: req.body.calle,
      lat: req.body.lat,
      lng: req.body.lng,
      imagen: '',
      categoriaId: (
        await Categoria.findOne({
          where: { nombre: req.body.categoria },
        })
      ).id,
      precioId: (
        await Precio.findOne({
          where: { nombre: req.body.precio },
        })
      ).id,
      usuarioId: req.usuario.id,
    })

    const { id } = newPropiedad.dataValues

    return res.redirect(`/propiedades/agregar-imagen/${id}`)
  } catch (error) {
    return res.render('propiedades/crear', {
      pagina: 'Crear Propiedades',
      csrfToken: req.csrfToken(),
      barra: true,
      categorias,
      errores: [{ msg: 'Un error ocurrio' }],
      precios,
      data: {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        wc: req.body.wc,
        estacionamiento: req.body.estacionamiento,
        habitaciones: req.body.habitaciones,
        categoria: req.body.categoria,
        precio: req.body.precio,
        calle: req.body.calle,
        lat: req.body.lat,
        lng: req.body.lng,
      },
    })
  }
}

export default crearPropiedadesFormulario
