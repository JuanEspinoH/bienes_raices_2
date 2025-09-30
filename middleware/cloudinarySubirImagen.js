import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import cloudinary from '../utils/cloudinaryUploader.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const parentDir = dirname(__dirname)
const imsPath = parentDir + '/public/img/uploads/'

function cloudinarySubirImagen() {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
      const folderPath = imsPath
      const fileExtension = path.extname(file.originalname).substring(1)
      const publicId = `${file.fieldname}-${Date.now()}`

      let result = {
        // folder: 'propiedades',
        public_id: publicId,
        format: fileExtension,
      }

      return result
    },
  })

  return multer({
    storage: storage,
  })
}

export default cloudinarySubirImagen
