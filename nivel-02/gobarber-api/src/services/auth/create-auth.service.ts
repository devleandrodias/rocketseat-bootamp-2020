import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../../models/user.model';

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

    if (!user) throw new Error('Incorrect email/password combination');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new Error('Incorrect email/password combination');

    const token = sign({}, 'c]^9D@s4!ZP%z2WjZQE7`fuNcPQyR8', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default CreateAuthAuthenticate;
