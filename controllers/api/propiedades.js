import { Categoria, Precio, Propiedad } from '../../models/index.js'

const propiedades = async (req, res) => {
  try {
    const propiedades = await Propiedad.findAll({
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

    return res.json({
      propiedades,
    })
  } catch (error) {
    console.log(error)
  }
}

export default propiedades
