import usuarioSeeder from './usuarios.js'
import categoriaSeeder from './categorias.js'
import preciosSeeder from './precios.js'
import propiedadSeeder from './propiedad.js'
import db from '../database/db.js'

const seeder = async () => {
  try {
    await db.authenticate()

    await db.sync()

    await Promise.all([
      usuarioSeeder(),
      categoriaSeeder(),
      preciosSeeder(),
      propiedadSeeder(),
    ])

    console.log('DONE')
    return
  } catch (error) {
    console.log(error)
  }
}

seeder()
