import { DataTypes } from 'sequelize'
import db from '../database/db.js'
import argon2 from 'argon2'

const Usuario = db.define(
  'usuarios',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
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
    confirmado: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdat: DataTypes.DATE,
    createdAt: {
      field: 'createdat',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updatedat',
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async function (usuario) {
        const hashedPassword = await argon2.hash(usuario.password)
        usuario.password = hashedPassword
      },
    },
    scopes: {
      eliminarPassword: {
        attributes: {
          exclude: [
            'password',
            'token',
            'confimrado',
            'createdat',
            'updatedat',
          ],
        },
      },
    },
  }
)

export default Usuario
