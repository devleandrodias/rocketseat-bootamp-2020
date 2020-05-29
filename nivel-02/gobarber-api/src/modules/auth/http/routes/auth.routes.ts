import { Router } from 'express';
import { container } from 'tsyringe';

import CreateAuthAuthenticateService from '@modules/auth/services/create-auth.service';

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authAuthentication = container.resolve(CreateAuthAuthenticateService);

  const { user, token } = await authAuthentication.execute({
    email,
    password,
  });

  delete user.password;

  res.json({ user, token });
});

export default authRouter;
