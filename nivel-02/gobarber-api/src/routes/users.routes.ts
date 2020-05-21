import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload.config';
import CreateUserService from '../services/users/create-user.service';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

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
    console.log(req.file);
    return res.json({ ok: true });
  }
);

export default appointmentsRouter;
