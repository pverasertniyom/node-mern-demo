const multer = require('multer');
const { v4: uuid } = require('uuid');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg'
}

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/images')
    },
    filename: (req, file, callback) => {
      const ext = MIME_TYPE_MAP[file.mimetype]
      callback(null, uuid() + '.' + ext)
    }
  }),
  fileFilter: (req, file, callback) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error('Invalid mime type')
    callback(error, isValid)
  }
});

module.exports = fileUpload;
