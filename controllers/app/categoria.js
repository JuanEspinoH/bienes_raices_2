import { Categoria, Propiedad, Precio } from '../../models/index.js'

const categoria = async (req, res) => {
  const { id } = req.params

  const categoria = await Categoria.findByPk(id)

  if (!categoria) {
    return res.redirect('/404')
  }

  const propiedades = await Propiedad.findAll({
    where: {
      categoriaId: id,
    },
    include: [
      {
        model: Precio,
        as: Precio,
      },
    ],
  })

  return res.render('categoria', {
    pagina: `${categoria.nombre}s en Venta`,
    propiedades,
    csrfToken: req.csrfToken(),
  })
}

export default categoria
