import multer from 'multer';
import { Router } from 'express';

import uploadConfig from '@configs/upload.config';
import ensureAuthenticated from '@shareds/infra/middlewares/ensureAuthenticated';
import UsersController from '../controllers/users.controller';

const appointmentsRouter = Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();

appointmentsRouter.post('/', usersController.create);

appointmentsRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersController.updateAvatar
);

export default appointmentsRouter;
