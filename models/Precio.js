import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const Precio = db.define('precios', {
  nombre: {
    type: DataTypes.STRING,
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

export default Precio
