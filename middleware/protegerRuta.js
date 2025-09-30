import jwt from 'jsonwebtoken'
import { Usuario } from '../models/index.js'

const protegerRuta = async (req, res, next) => {
  const { _token } = req.cookies
  if (!_token) {
    return res.redirect('/auth/login')
  }

  try {
    const decode = jwt.verify(_token, process.env.AUTH_SECRET_JWT)
    const usuario = await Usuario.scope('eliminarPassword').findByPk(decode.id)

    if (usuario) {
      req.usuario = usuario.dataValues
    } else {
      return res.redirect('/auth/login')
    }
    return next()
  } catch (error) {
    return res.clearCookie('_token').redirect('/auth/login')
  }
  next()
}

export default protegerRuta
