import 'reflect-metadata';

import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import authConfig from '@configs/auth.config';
import AppError from '@shareds/errors/app.error';
import User from '@modules/users/infra/typeorm/entities/user.model';

import IUserRepository from '@modules/users/repositories/user.repository.interface';
import { IHashProvider } from '@modules/users/providers/hash-providers/models/hash-provider.interface';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class CreateAuthAuthenticate {
  constructor(
    @inject('UserRepository')
    private _userRepository: IUserRepository,

    @inject('HashProvider')
    private _hashProvider: IHashProvider
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this._userRepository.findByEmail(email);

    if (!user) throw new AppError('Incorrect email/password combination', 401);

    const passwordMatched = await this._hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched)
      throw new AppError('Incorrect email/password combination');

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    });

    return { user, token };
  }
}
