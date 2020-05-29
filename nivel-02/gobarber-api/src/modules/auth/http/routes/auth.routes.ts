import { Router } from 'express';

import UserRepository from '@modules/users/infra/typeorm/repositories/users.repository';
import CreateAuthAuthenticate from '../../services/create-auth.service';

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const userRepository = new UserRepository();

  const { email, password } = req.body;

  const authAuthentication = new CreateAuthAuthenticate(userRepository);

  const { user, token } = await authAuthentication.execute({
    email,
    password,
  });

  delete user.password;

  res.json({ user, token });
});

export default authRouter;
