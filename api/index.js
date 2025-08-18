import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import authRoutes from '../routes/auth/index.js'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Esto me debe de especificar mi ruta para views por que tengo problemas con vercel
const __dirname = dirname(fileURLToPath(import.meta.url))
const base = dirname(__dirname)

const app = express()
app.set('x-powered-by', false)
app.set('trust proxy', true)
app.set('view engine', 'pug')
app.set('views', path.join(base, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(base, 'public')))
app.use(cookieParser())
app.use(csrf({ cookie: { httpOnly: true } }))

// AQUI EMPIEZAN LAS RUTAS

app.use('/api/auth', authRoutes)

app.listen(3000, () => {
  console.log(`SE INICIO EL SERVIDOR ${process.env.PORT} `)
})
