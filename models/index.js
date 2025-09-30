import Usuario from '../models/Usuario.js'
import Propiedad from '../models/Propiedad.js'
import Precio from '../models/Precio.js'
import Categoria from './Categoria.js'
import Mensaje from './Mensaje.js'

Propiedad.belongsTo(Precio, {
  foreignKey: 'precioId',
})
Propiedad.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
})
Propiedad.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
})
Propiedad.hasMany(Mensaje, {
  foreignKey: 'propiedadId',
})

Mensaje.belongsTo(Propiedad, { foreignKey: 'propiedadId' })
Mensaje.belongsTo(Usuario, { foreignKey: 'usuarioId' })

export { Usuario, Categoria, Precio, Propiedad, Mensaje }
