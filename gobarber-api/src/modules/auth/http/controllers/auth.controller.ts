import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAuthAuthenticateService from '@modules/auth/services/create-auth.service';

export default class AuthController {
  public async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const authAuthenticationService = container.resolve(
      CreateAuthAuthenticateService
    );

    const { user, token } = await authAuthenticationService.execute({
      email,
      password,
    });

    delete user.password;

    res.json({ user, token });
  }
}
