import {
  formularioSignUp,
  registro,
  formularioLogin,
  autenticar,
  formularioOlvidarContraseña,
  resetPassword,
  confirmar,
  comprobarToken,
  nuevoPassword,
  cerrarSesion,
} from '../../controllers/auth/index.js'
import { Router } from 'express'

const router = Router()
// RUTAS LOGIN
router.get('/login', formularioLogin)
router.post('/login', autenticar)
// RUTAS CREAR CUENTA
router.get('/sign-up', formularioSignUp)
router.post('/sign-up', registro)

router.get('/olvide-password', formularioOlvidarContraseña)
router.post('/olvide-password', resetPassword)

router.get('/confirmar/:token', confirmar)

router.get('/resetear-password/:token', comprobarToken)
router.post('/resetear-password/:token', nuevoPassword)

router.post('/cerrar-sesion', cerrarSesion)

export default router
