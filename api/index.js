import express from 'express'
import dotenv from 'dotenv'
import csrf from 'csurf'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.get('/', async (req, res) => {
  return res.json({ msg: 'test' })
})

app.listen(3000, () => {
  console.log('se inicio el servidor')
})
