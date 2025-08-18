import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

const db = new Sequelize(process.env.DATABASE_CONNECTION_URL, {
  dialect: 'postgres',
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
