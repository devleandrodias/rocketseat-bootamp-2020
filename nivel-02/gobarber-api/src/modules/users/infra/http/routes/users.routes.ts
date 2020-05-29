import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@configs/upload.config';
import CreateUserService from '@modules/users/services/create-user.service';
import ensureAuthenticated from '@shareds/infra/middlewares/ensureAuthenticated';
import UpdateUserAvatarService from '@modules/users/services/update-avatar.service';
import UserRepository from '@modules/users/infra/typeorm/repositories/users.repository';

const appointmentsRouter = Router();
const upload = multer(uploadConfig);

appointmentsRouter.post('/', async (req, res) => {
  const userRepository = new UserRepository();

  const { name, email, password } = req.body;

  const createUser = new CreateUserService(userRepository);

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return res.json(user);
});

appointmentsRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const userRepository = new UserRepository();

    const updateUserAvatar = new UpdateUserAvatarService(userRepository);

    const user_id = req.user.id;

    const avatarFileName = req.file.filename;

    const user = await updateUserAvatar.execute({ user_id, avatarFileName });

    return res.json(user);
  }
);

export default appointmentsRouter;
