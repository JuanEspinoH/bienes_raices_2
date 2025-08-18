import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import authRoutes from '../routes/auth/index.js'

const app = express()
app.set('x-powered-by', false)
app.set('trust proxy', true)
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())
app.use(csrf({ cookie: { httpOnly: true } }))

// AQUI EMPIEZAN LAS RUTAS

app.use('/auth', authRoutes)

app.listen(3000, () => {
  console.log(`SE INICIO EL SERVIDOR ${process.env.PORT} `)
})
