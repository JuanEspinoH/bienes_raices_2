;(function () {
  let actualLng = -99.1676463
  let actualLat = 19.4269903
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        actualLat = position.coords.latitude
        actualLng = position.coords.longitude
      },
      function (error) {
        if (error.code === 1) {
          document
            .querySelector('#geoErrorContainer')
            .classList.remove('hidden')
          document.querySelector('#geoErrorContainer').classList.add('block')
        }
      }
    )
  }

  const lat =
    document.querySelector('#lat').value.length == 0
      ? actualLat
      : document.querySelector('#lat').value
  const lng =
    document.querySelector('#lng').value.length == 0
      ? actualLng
      : document.querySelector('#lng').value

  const mapa = L.map('mapa').setView([lat, lng], 16)

  let marker

  const geocodeServide = L.esri.Geocoding.geocodeService()

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa)

  marker = new L.marker([lat, lng], {
    draggable: true,
    autoPan: true,
  }).addTo(mapa)

  marker.on('moveend', function (e) {
    marker = e.target
    const position = marker.getLatLng()

    mapa.panTo(new L.LatLng(position.lat, position.lng))
    geocodeServide
      .reverse()
      .latlng(position, 13)
      .run((error, resultado) => {
        marker.bindPopup(resultado.address.LongLabel)

        document.querySelector('.calle').textContent =
          resultado?.address?.Address ?? ''

        document.querySelector('#calle').value =
          resultado?.address?.Address ?? ''
        document.querySelector('#lat').value = resultado?.latlng?.lat ?? ''
        document.querySelector('#lng').value = resultado?.latlng?.lng ?? ''
      })
  })
})()
