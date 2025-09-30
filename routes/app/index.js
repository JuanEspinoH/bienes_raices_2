import { Router } from 'express'
import {
  inicio,
  categoria,
  noEncontrado,
  buscador,
} from '../../controllers/app/index.js'
import identificarUsuario from '../../middleware/identificarUsuario.js'
const router = Router()

router.get('/', identificarUsuario, inicio)
router.get('/categorias/:id', identificarUsuario, categoria)
router.get('/404', identificarUsuario, noEncontrado)
router.post('/buscador', identificarUsuario, buscador)

export default router
