import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload.config';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateUserService from '../services/users/create-user.service';
import UpdateUserAvatarService from '../services/users/update-avatar.service';

const appointmentsRouter = Router();
const upload = multer(uploadConfig);

appointmentsRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    delete user.password;

    return res.json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

appointmentsRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();
      const user_id = req.user.id;
      const avatarFileName = req.file.filename;

      const user = await updateUserAvatar.execute({ user_id, avatarFileName });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
);

export default appointmentsRouter;
