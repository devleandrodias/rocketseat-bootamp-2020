import { Router } from 'express';

import CreateAuthAuthenticate from '../services/auth/create-auth.service';

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authAuthentication = new CreateAuthAuthenticate();

    const { user, token } = await authAuthentication.execute({
      email,
      password,
    });

    delete user.password;

    res.json({ user, token });
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
});

export default authRouter;
