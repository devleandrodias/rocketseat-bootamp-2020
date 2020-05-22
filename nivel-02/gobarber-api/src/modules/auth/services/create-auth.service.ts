import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../../users/entities/user.model';
import authConfig from '../../../config/auth.config';
import AppError from '../../../shared/errors/app.error';

interface RequestDto {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class CreateAuthAuthenticate {
  public async execute({ email, password }: RequestDto): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

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
