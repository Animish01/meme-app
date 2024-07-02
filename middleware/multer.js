import multer from 'multer';

const upload = multer({dest: '/tmp'});
export const uploadMiddleware = upload.single('file');