import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const Categoria = db.define('categorias', {
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

export default Categoria
