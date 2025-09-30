import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const Mensaje = db.define('mensajes', {
  mensaje: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  createdAt: {
    field: 'createdat',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updatedat',
    type: DataTypes.DATE,
    allowNull: true,
  },
})

export default Mensaje
