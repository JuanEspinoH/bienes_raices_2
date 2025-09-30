;(function () {
  const cambiarEstadoBotons = document.querySelectorAll('.cambiar-estado')
  const token = document
    .querySelector('meta[name=csrf-token]')
    .getAttribute('content')

  const cambiarEstadoPropiedad = async (e) => {
    e.preventDefault()
    const { propiedadId } = e.target.dataset

    try {
      const respuesta = await fetch(`/propiedad/${propiedadId}`, {
        method: 'PUT',
        headers: {
          'X-CSRF-TOKEN': token,
        },
      })

      if (!respuesta.ok) {
        console.log('error en el cambio')
      }

      const data = await respuesta.json()

      if (data.resultado) {
        if (e.target.classList.contains('bg-yellow-600')) {
          e.target.innerText = 'Publicado'
          e.target.classList.add('bg-green-800')
          e.target.classList.remove('bg-yellow-600')
        } else {
          e.target.innerText = 'No publicado'
          e.target.classList.add('bg-yellow-600')
          e.target.classList.remove('bg-green-800')
        }
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  cambiarEstadoBotons.forEach((boton) => {
    boton.addEventListener('click', cambiarEstadoPropiedad)
  })
})()
