import { Categoria, Precio, Propiedad } from '../../models/index.js'
import { propiedadesValidations } from '../../utils/validations.js'

const guardarCambios = async (req, res) => {
  const { id } = req.params

  const checkPropiedades = await propiedadesValidations(req)

  if (checkPropiedades.errors.length !== 0) {
    const [categorias, precios] = await Promise.all([
      Categoria.findAll(),
      Precio.findAll(),
    ])

    return res.render('propiedades/crear', {
      pagina: `Editar Propiedades ${req.body?.titulo}`,
      csrfToken: req.csrfToken(),
      barra: true,
      errores: checkPropiedades.errors,
      categorias,
      precios,
      data: {
        id,
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

  try {
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

    if (propiedad.usuarioId.toString() !== req.usuario.id.toString()) {
      return res.redirect('/mis-propiedades')
    }

    const {
      titulo,
      descripcion,
      habitaciones,
      estacionamiento,
      wc,
      calle,
      lat,
      lng,
    } = req.body

    const [{ id: categoriaId }, { id: precioId }] = await Promise.all([
      Categoria.findOne({
        where: {
          nombre: req.body.categoria,
        },
      }),
      Precio.findOne({
        where: {
          nombre: req.body.precio,
        },
      }),
    ])

    propiedad.set({
      titulo,
      descripcion,
      habitaciones,
      estacionamiento,
      wc,
      calle,
      lat,
      lng,
      categoriaId,
      precioId,
    })

    await propiedad.save()

    return res.redirect(`/propiedades/editar-imagen/${propiedad.id}`)

    // await Propiedad.update(
    //   {
    //     titulo: req.body?.titulo,
    //     descripcion: req.body?.descripcion,
    //     wc: req.body?.wc,
    //     estacionamiento: req.body?.estacionamiento,
    //     habitaciones: req.body?.habitaciones,
    //     categoria: req.body?.categoria,
    //     precio: req.body?.precio,
    //     calle: req.body?.calle,
    //     lat: req.body?.lat,
    //     lng: req.body?.lng,
    //   },
    //   {
    //     where: {
    //       id,
    //     },
    //   }
    // )

    // Trate de buscar como actualizar las relaciones en sequelize pero no encontre nada
    // esto es lo mejor que se me ocurre , primero buscar los id de las cat y precios , luego actualizarlos

    // const [{ id: categoriaId }, { id: precioId }] = await Promise.all([
    //   Categoria.findOne({
    //     where: {
    //       nombre: req.body.categoria,
    //     },
    //   }),
    //   Precio.findOne({
    //     where: {
    //       nombre: req.body.precio,
    //     },
    //   }),
    // ])

    // await Promise.all([
    //   propiedad.update({
    //     categoriaId,
    //   }),
    //   propiedad.update({
    //     precioId,
    //   }),
    // ])
  } catch (error) {
    console.log(error)
  }
}

export default guardarCambios
