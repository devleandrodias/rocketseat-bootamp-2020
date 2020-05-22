import { Router } from 'express';

import CreateAuthAuthenticate from '../../modules/auth/services/create-auth.service';

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authAuthentication = new CreateAuthAuthenticate();

  const { user, token } = await authAuthentication.execute({
    email,
    password,
  });

  delete user.password;

  res.json({ user, token });
});

export default authRouter;
