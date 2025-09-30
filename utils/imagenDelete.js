import cloudinary from '../utils/cloudinaryUploader.js'

const imagenDelete = async (pathImagen) => {
  try {
    if (typeof pathImagen !== 'string') {
      throw new Error('Invalid input')
    }

    const baseImgURL = pathImagen.split('/')

    // const nombreCarpeta = baseImgURL[baseImgURL.length - 2]
    const nombreArchivo = baseImgURL[baseImgURL.length - 1].split('.')[0]
    await cloudinary.uploader.destroy(`${nombreArchivo}`)
  } catch (error) {
    console.log(error.message)
  }
}

export default imagenDelete
