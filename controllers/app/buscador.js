import { Propiedad, Precio } from '../../models/index.js'
import { Sequelize } from 'sequelize'

const buscador = async (req, res) => {
  const { termino } = req.body

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
      include: [{ model: Precio, as: 'precio' }],
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
