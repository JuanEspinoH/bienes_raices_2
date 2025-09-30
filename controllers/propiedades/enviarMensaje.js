import { Propiedad, Categoria, Precio, Mensaje } from '../../models/index.js'
import { mensajeValidations } from '../../utils/validations.js'
import { esVendedor } from '../../utils/index.js'

const enviarMensaje = async (req, res) => {
  const { id } = req.params

  let propiedad
  try {
    propiedad = await Propiedad.findByPk(id, {
      include: [
        { model: Categoria, as: 'categoria' },
        { model: Precio, as: 'precio' },
      ],
    })

    if (propiedad === null) {
      return res.redirect('/404')
    }
  } catch (error) {
    console.log(error)
    return res.redirect('/404')
  }

  let resultado = await mensajeValidations(req)

  if (resultado.errors.length) {
    return res.render('propiedades/mostrar', {
      propiedad,
      errores: resultado.errors,
      pagina: propiedad.titulo,
      csrfToken: req.csrfToken(),
      usuario: req.usuario,
      esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioId),
    })
  }

  try {
    const { mensaje } = req.body
    const { id: propiedadId } = req.params
    const { id: usuarioId } = req.usuario

    const nuevoMnesaje = await Mensaje.create({
      mensaje,
      propiedadId,
      usuarioId,
    })
  } catch (error) {
    console.log(error)
  }

  return res.render('propiedades/mostrar', {
    propiedad,
    errores: resultado.errors,
    pagina: propiedad.titulo,
    csrfToken: req.csrfToken(),
    usuario: req.usuario,
    esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioId),
    enviado: true,
  })
}

export default enviarMensaje
