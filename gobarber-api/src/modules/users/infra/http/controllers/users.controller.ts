import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/create-user.service';
import UpdateUserAvatarService from '@modules/users/services/update-avatar.service';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({ name, email, password });

    delete user.password;

    return res.json(user);
  }

  public async updateAvatar(req: Request, res: Response): Promise<Response> {
    const updateUserAvatarService = container.resolve(UpdateUserAvatarService);

    const user_id = req.user.id;

    const avatarFileName = req.file.filename;

    const user = await updateUserAvatarService.execute({
      user_id,
      avatarFileName,
    });

    return res.json(user);
  }
}
