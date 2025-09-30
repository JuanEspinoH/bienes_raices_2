import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'
import pg from 'pg'

const db = new Sequelize(process.env.DATABASE_CONNECTION_URL, {
  logging: false,
  dialect: 'postgres',
  dialectModule: pg,
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

export default db
