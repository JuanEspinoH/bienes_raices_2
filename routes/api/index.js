import { Router } from 'express'
import { propiedades } from '../../controllers/api/index.js'

const router = Router()

router.get('/propiedades', propiedades)

export default router
