import jwt from 'jsonwebtoken'

const jwtGenerator = (datos) => {
  return jwt.sign(datos, process.env.AUTH_SECRET_JWT, {
    expiresIn: '30d',
  })
}

export default jwtGenerator
