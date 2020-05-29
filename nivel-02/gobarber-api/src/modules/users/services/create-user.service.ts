import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import AppError from '@shareds/errors/app.error';
import User from '@modules/users/infra/typeorm/entities/user.model';
import IUserRepository from '../repositories/user-repository.interface';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UserRepository')
    private _userRepository: IUserRepository
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this._userRepository.findByEmail(email);

    const hashedPassword = await hash(password, 8);

    if (checkUserExists) throw new AppError('Email address already used', 401);

    return await this._userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}
