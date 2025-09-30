import { Propiedad, Categoria, Precio, Mensaje } from '../../models/index.js'
import propertiessIterableFuncion from '../../utils/propertiesIterableFuncion.js'

const admin = async (req, res) => {
  const { pagina: paginaActual } = req.query

  const expresion = /^[1-9]$/

  if (!expresion.test(paginaActual)) {
    return res.redirect('/mis-propiedades?pagina=1')
  }

  try {
    const { id } = req.usuario

    const limit = 8
    /* prettier-ignore */
    const offset=((paginaActual * limit) - limit)

    const [propiedades, total] = await Promise.all([
      Propiedad.findAll({
        limit: limit,
        offset: offset,
        where: {
          usuarioId: id,
        },
        include: [
          {
            model: Categoria,
            as: 'categoria',
          },
          {
            model: Precio,
            as: 'precio',
          },
          {
            model: Mensaje,
            as: 'mensajes',
          },
        ],
      }),
      Propiedad.count({
        where: {
          usuarioId: id,
        },
      }),
    ])
    const checkProp = propertiessIterableFuncion(propiedades)

    return res.render('propiedades/admin', {
      pagina: 'Mis propiedades',
      barra: true,
      propiedades: checkProp,
      csrfToken: req.csrfToken(),
      paginas: Math.ceil(total / limit),
      paginaActual: Number(paginaActual),
      total,
      offset,
      limit,
      usuario: req.usuario,
    })
  } catch (error) {
    console.log(error)
  }
}

export default admin
