import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import AppError from '@shareds/errors/app.error';
import uploadConfig from '@configs/upload.config';
import User from '@modules/users/infra/typeorm/entities/user.model';
import IUserRepository from '../repositories/user-repository.interface';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  constructor(private _userRepository: IUserRepository) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this._userRepository.findById(user_id);

    if (!user)
      throw new AppError('Only authenticated users can change avatar', 401);

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) await fs.promises.unlink(userAvatarFilePath);
    }

    user.avatar = avatarFileName;

    delete user.password;

    await this._userRepository.update(user);

    return user;
  }
}

export default UpdateUserAvatarService;
