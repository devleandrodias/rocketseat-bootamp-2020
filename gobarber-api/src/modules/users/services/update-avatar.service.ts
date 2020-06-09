import path from 'path';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import AppError from '@shareds/errors/app.error';
import uploadConfig from '@configs/upload.config';
import User from '@modules/users/infra/typeorm/entities/user.model';
import IUserRepository from '../repositories/user.repository.interface';
import { IStorageProvider } from '@shareds/container/providers/storage-provider/models/storage-provider.interface';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UserRepository')
    private _userRepository: IUserRepository,

    @inject('StorageProvider')
    private _storageProvider: IStorageProvider
  ) {}

  public async execute({ user_id, avatarFileName }: IRequest): Promise<User> {
    const user = await this._userRepository.findById(user_id);

    if (!user)
      throw new AppError('Only authenticated users can change avatar', 401);

    if (user.avatar) await this._storageProvider.deleteFile(user.avatar);

    user.avatar = await this._storageProvider.saveFile(avatarFileName);

    delete user.password;

    await this._userRepository.update(user);

    return user;
  }
}

export default UpdateUserAvatarService;
