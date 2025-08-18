import { DataTypes } from 'sequelize'
import db from '../database/db'
import argon2 from 'argon2'

const Usuario = db.define(
  'usuarios',
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
  },
  {
    hooks: {
      beforeCreate: async function (usuario) {
        usuario.password = await argon2.hash(password)
      },
    },
  }
)

export default Usuario
