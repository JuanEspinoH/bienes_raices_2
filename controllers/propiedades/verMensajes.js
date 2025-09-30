import {
  Mensaje,
  Propiedad,
  Categoria,
  Precio,
  Usuario,
} from '../../models/index.js'
import { formatearFecha } from '../../utils/formatearFecha.js'

const verMensajes = async (req, res) => {
  const { id } = req.params
  try {
    const propiedad = await Propiedad.findByPk(id, {
      include: [
        {
          model: Mensaje,
          as: 'mensajes',
          include: [
            { model: Usuario.scope('eliminarPassword'), as: 'usuario' },
          ],
        },
      ],
    })

    if (!propiedad) {
      return res.redirect('/mis-propiedades')
    }

    if (propiedad.usuarioId !== req.usuario.id) {
      return res.redirect('/mis-propiedades')
    }

    res.render('propiedades/mensajes', {
      pagina: 'Mensajes',
      mensajes: propiedad.mensajes,
      formatearFecha,
    })
  } catch (error) {
    console.log(error)
  }
}

export default verMensajes
