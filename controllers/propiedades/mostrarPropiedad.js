import { Propiedad, Categoria, Precio } from '../../models/index.js'
import { esVendedor } from '../../utils/index.js'

const mostrarPropiedad = async (req, res) => {
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

    if (!propiedad.publicado && propiedad.usuarioId !== req.usuario.id) {
      return res.redirect('/404')
    }
    if (!propiedad.publicado && propiedad.usuarioId === req.usuario.id) {
      return res.render('propiedades/mostrar', {
        propiedad,
        pagina: propiedad.titulo,
        csrfToken: req.csrfToken(),
        usuario: req.usuario,
        esAutor: true,
        esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioId),
      })
    }
  } catch (error) {
    console.log(error)
    return res.redirect('/404')
  }

  res.render('propiedades/mostrar', {
    propiedad,
    pagina: propiedad.titulo,
    csrfToken: req.csrfToken(),
    usuario: req.usuario,
    esVendedor: esVendedor(req.usuario?.id, propiedad.usuarioId),
  })
}

export default mostrarPropiedad
