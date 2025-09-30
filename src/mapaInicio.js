;(function () {
  //   const lat = document.querySelector('#lat').value || 34.040967
  //   const lng = document.querySelector('#lng').value || -118.1618621

  const lat = 19.4326018
  const lng = -99.1332049

  const mapa = L.map('mapa').setView([lat, lng], 14)

  let markers = new L.FeatureGroup().addTo(mapa)

  const categoriaSelect = document.querySelector('#categorias')
  const precioSelect = document.querySelector('#precios')

  let propiedades = []

  const filtros = {
    categoria: '',
    precio: '',
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa)

  categoriaSelect.addEventListener('change', async (e) => {
    filtros.categoria = +e.target.value
    filtrarPropiedades()
  })
  precioSelect.addEventListener('change', async (e) => {
    filtros.precio = +e.target.value
    filtrarPropiedades()
  })

  const obtenerPropiedades = async () => {
    try {
      const url = '/api/propiedades'
      const response = await fetch(url)
      if (!response.ok) {
        console.log('error')
      }
      const { propiedades: propiedadesInfo } = await response.json()

      propiedades = propiedadesInfo

      mostrarPropiedades(propiedades)
    } catch (error) {
      console.log(error)
    }
  }

  const mostrarPropiedades = (propiedades) => {
    markers.clearLayers()

    propiedades.forEach((propiedad) => {
      const marker = new L.marker([propiedad?.lat, propiedad?.lng], {
        autoPan: true,
      }).addTo(mapa).bindPopup(`
          <p class="text-indigo-600 font-bold ">
            ${propiedad.categoria.nombre}
          </p>
          <h1 class="text-xl font-extrabold uppercase my-2">
            ${propiedad?.titulo}
          </h1>
          <img src="${propiedad.imagen}" alt=Imagen de propiedad ${
        propiedad.titulo
      }/>
          <p class="text-gray-600 font-bold ">
            ${propiedad.precio.nombre}
          </p>
          <a  href="${`http://localhost:3000/propiedad/${propiedad.id}`}" class="bg-indigo-600 block p-2 text-center font-bold uppercase text-white ">
          Ver propiedad
          </a>
     
        `)

      markers.addLayer(marker)
    })
  }

  const filtrarPropiedades = () => {
    const resultado = propiedades.filter(filtrarCategoria).filter(filtrarPrecio)
    mostrarPropiedades(resultado)
  }

  const filtrarCategoria = (propiedad) => {
    return filtros.categoria
      ? propiedad.categoriaId === filtros.categoria
      : propiedad
  }

  const filtrarPrecio = (propiedad) => {
    return filtros.precio ? propiedad.precioId === filtros.precio : propiedad
  }

  obtenerPropiedades()
})()
