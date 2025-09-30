import { Precio, Categoria, Propiedad, Usuario } from '../../models/index.js'
import jwt from 'jsonwebtoken'
import propertiessIterableFuncion from '../../utils/propertiesIterableFuncion.js'

const inicio = async (req, res) => {
  // const { _token } = req.cookies

  const [
    categorias,
    precios,
    bodegas,
    departamentos,
    casas,
    terrenos,
    cabañas,
  ] = await Promise.all([
    Categoria.findAll({
      raw: true,
    }),
    Precio.findAll({
      raw: true,
    }),
    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: 1,
      },
      include: [{ model: Precio, as: 'precio' }],
      order: [['createdAt', 'DESC']],
    }),
    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: 2,
      },
      include: [{ model: Precio, as: 'precio' }],
      order: [['createdAt', 'DESC']],
    }),
    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: 3,
      },
      include: [{ model: Precio, as: 'precio' }],
      order: [['createdAt', 'DESC']],
    }),
    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: 4,
      },
      include: [{ model: Precio, as: 'precio' }],
      order: [['createdAt', 'DESC']],
    }),
    Propiedad.findAll({
      limit: 3,
      where: {
        categoriaId: 5,
      },
      include: [{ model: Precio, as: 'precio' }],
      order: [['createdAt', 'DESC']],
    }),
  ])

  res.render('inicio', {
    usuario: req.usuario,
    pagina: 'Inicio',
    categorias,
    precios: propertiessIterableFuncion(categorias),
    bodegas: propertiessIterableFuncion(bodegas),
    departamentos: propertiessIterableFuncion(departamentos),
    casas: propertiessIterableFuncion(casas),
    terrenos: propertiessIterableFuncion(terrenos),
    cabañas: propertiessIterableFuncion(cabañas),
    csrfToken: req.csrfToken(),
  })
}

export default inicio
