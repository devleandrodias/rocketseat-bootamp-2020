import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/upload.config';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateUserService from '../../modules/users/services/create-user.service';
import UpdateUserAvatarService from '../../modules/users/services/update-avatar.service';

const appointmentsRouter = Router();
const upload = multer(uploadConfig);

appointmentsRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return res.json(user);
});

appointmentsRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user_id = req.user.id;

    const avatarFileName = req.file.filename;

    const user = await updateUserAvatar.execute({ user_id, avatarFileName });

    return res.json(user);
  }
);

export default appointmentsRouter;
