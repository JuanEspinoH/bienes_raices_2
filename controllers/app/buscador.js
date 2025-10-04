import { Propiedad, Precio, Categoria } from '../../models/index.js'
import { Sequelize } from 'sequelize'

const buscador = async (req, res) => {
  const { termino } = req.body
  console.log(termino)

  if (!termino.trim()) {
    const backURL = req.header('Referer') || '/'
    return res.redirect(backURL)
  }

  try {
    const propiedades = await Propiedad.findAll({
      where: {
        titulo: {
          [Sequelize.Op.iLike]: `%${termino}%`,
        },
      },
      include: [
        { model: Precio, as: 'precio' },
        { model: Categoria, as: 'categoria' },
      ],
    })

    return res.render('busqueda', {
      pagina: 'Resultado de busqueda',
      csrfToken: req.csrfToken(),
      propiedades,
    })
  } catch (error) {
    console.log(error)
  }
}

export default buscador
