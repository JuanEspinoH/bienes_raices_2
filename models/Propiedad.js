import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const Propiedad = db.define('propiedades', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },

  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  habitaciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estacionamiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  calle: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  lat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lng: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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

export default Propiedad
