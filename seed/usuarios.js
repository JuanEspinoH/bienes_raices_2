import Usuario from '../models/Usuario.js'

const usuarios = [
  {
    email: 'test1@gmail.com',
    nombre: 'Fredy',
    confirmado: true,
    password: '123456',
  },
  {
    email: 'test2@gmail.com',
    nombre: 'Juan',
    confirmado: true,
    password: '123456',
  },
  {
    email: 'test3@gmail.com',
    nombre: 'Alfredo',
    confirmado: true,
    password: '123456',
  },
]

const usuarioSeeder = async () => {
  try {
    usuarios.forEach(async (item) => {
      const { email, nombre, confirmado, password } = item
      await Usuario.findOrCreate({
        where: {
          email,
        },
        defaults: {
          email,
          nombre,
          confirmado,
          password,
        },
      })
    })
  } catch (error) {
    console.log('error en seeder usuario', error)
  }
}

export default usuarioSeeder
