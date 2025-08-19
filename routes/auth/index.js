import { formularioSignUp, registro } from '../../controllers/auth/index.js'
import { Router } from 'express'

const router = Router()

// router.get('/login', formularioLogin)
// router.post('/login', autenticar)

router.get('/sign-up', formularioSignUp)
router.post('/sign-up', registro)

// router.get('/olvide-password', formularioOlvidarContraseña)
// router.post('/olvide-password', resetPassword)

// router.get('/mensaje', confirmar)
router.get('/confirmar/:token', async (req, res) => {
  const { token } = req.params

  return res.json({ token })
})

// router.get('/resetear-password/:token', comprobarToken)
// router.post('/resetear-password/:token', nuevoPassword)

export default router
