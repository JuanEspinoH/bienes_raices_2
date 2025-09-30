import Categoria from '../models/Categoria.js'

const categorias = [
  {
    nombre: 'Casa',
  },
  {
    nombre: 'Departamento',
  },
  {
    nombre: 'Bodega',
  },
  {
    nombre: 'Terreno',
  },
  {
    nombre: 'Cabaña',
  },
]

const categoriaSeeder = async () => {
  try {
    categorias.forEach(async (item) => {
      const { nombre } = item
      await Categoria.findOrCreate({
        where: {
          nombre,
        },
        defaults: {
          nombre,
        },
      })
    })
  } catch (error) {
    console.log('error en seeder categoria', error)
  }
}

export default categoriaSeeder
