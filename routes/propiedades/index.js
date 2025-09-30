import { Router } from 'express'
import {
  admin,
  crearPropiedades,
  crearPropiedadesFormulario,
  agregarImagen,
  almacenarImagen,
  editar,
  guardarCambios,
  eliminar,
  editarImagen,
  editarImagenFormulario,
  mostrarPropiedad,
  enviarMensaje,
  verMensajes,
  cambiarEstado,
} from '../../controllers/propiedades/index.js'
import protegerRuta from '../../middleware/protegerRuta.js'
import cloudinarySubirImagen from '../../middleware/cloudinarySubirImagen.js'
import identificarUsuario from '../../middleware/identificarUsuario.js'

const uploadCM = cloudinarySubirImagen()

const router = Router()

router.get('/mis-propiedades', protegerRuta, admin)
router.get('/propiedades/crear', protegerRuta, crearPropiedades)
router.post('/propiedades/crear', protegerRuta, crearPropiedadesFormulario)
router.get('/propiedades/agregar-imagen/:id', protegerRuta, agregarImagen)

router.post(
  '/propiedades/agregar-imagen/:id',
  protegerRuta,
  uploadCM.single('imagen'),
  almacenarImagen
)

router.get('/propiedades/editar/:id', protegerRuta, editar)
router.post('/propiedades/editar/:id', protegerRuta, guardarCambios)
router.get(
  '/propiedades/editar-imagen/:id',
  protegerRuta,
  editarImagenFormulario
)

router.post(
  '/propiedades/editar-imagen/:id',
  protegerRuta,
  uploadCM.single('imagen'),
  editarImagen
)
// Hay una razon por la que es post , metodo delete no lo soporta el navegador , para eso se necesiat la libreria y configuracion "method-override"
router.post('/propiedades/eliminar/:id', protegerRuta, eliminar)

router.get('/propiedad/:id', identificarUsuario, mostrarPropiedad)
router.post('/propiedad/:id', identificarUsuario, enviarMensaje)
router.put('/propiedad/:id', identificarUsuario, cambiarEstado)

router.get('/mensajes/:id', identificarUsuario, verMensajes)

export default router
