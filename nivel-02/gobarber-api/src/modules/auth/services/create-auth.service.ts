import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '@configs/auth.config';
import AppError from '@shareds/errors/app.error';
import User from '@modules/users/infra/typeorm/entities/user.model';
import IUserRepository from '@modules/users/repositories/user-repository.interface';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateAuthAuthenticate {
  constructor(private _userRepository: IUserRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this._userRepository.findByEmail(email);

    if (!user) throw new AppError('Incorrect email/password combination', 401);

    const passwordMatched = await compare(password, user.password);

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

export default CreateAuthAuthenticate;
