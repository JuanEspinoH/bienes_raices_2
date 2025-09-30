import path from 'path'

export default {
  mode: 'development',
  entry: {
    mapa: './src/mapas.js',
    agregarImagen: './src/agregarImagen.js',
    mostrarMapa: './src/mostrarMapa.js',
    mapaInicio: './src/mapaInicio.js',
    cambiarEstado: './src/cambiarEstado.js',
    scrollAnimation: './src/scrollAnimation.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('public/js'),
  },
}
