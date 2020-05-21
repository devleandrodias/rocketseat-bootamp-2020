import { Router } from 'express';

import CreateAuthAuthenticate from '../services/auth/create-auth.service';

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const authAuthentication = new CreateAuthAuthenticate();

    const { user } = await authAuthentication.execute({ email, password });

    delete user.password;

    res.json({ user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default authRouter;
