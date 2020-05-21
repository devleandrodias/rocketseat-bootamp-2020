import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'temp'),
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(15).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};
