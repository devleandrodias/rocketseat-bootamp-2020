import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shareds/errors/app.error';
import User from '@modules/users/infra/typeorm/entities/user.model';

interface Request {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { email },
    });

    const hashedPassword = await hash(password, 8);

    if (checkUserExists) throw new AppError('Email address already used', 401);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}
