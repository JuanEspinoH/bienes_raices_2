import { propiedadesUsuario } from './propiedadInfo.js'
import { Propiedad, Usuario, Categoria, Precio } from '../models/index.js'

const propiedadSeeder = async () => {
  try {
    propiedadesUsuario.forEach(async (item) => {
      const usuarioInfo = await Usuario.findOne({
        where: { email: item.email },
      })

      if (!usuarioInfo) {
        console.log('No se encontro usuario')
        return
      }

      await Propiedad.create({
        titulo: item.titulo,
        descripcion: item.descripcion,
        habitaciones: item.habitaciones,
        estacionamiento: item.estacionamiento,
        wc: item.wc,
        calle: item.calle,
        lat: item.lat,
        lng: item.lng,
        imagen: item.imagen,
        categoriaId: (
          await Categoria.findOne({
            where: { nombre: item.categoria },
          })
        ).id,
        precioId: (
          await Precio.findOne({
            where: { nombre: item.precio },
          })
        ).id,
        usuarioId: usuarioInfo.id,
      })
    })
  } catch (error) {
    console.log('error en seeder propiedades', error)
  }
}

export default propiedadSeeder
