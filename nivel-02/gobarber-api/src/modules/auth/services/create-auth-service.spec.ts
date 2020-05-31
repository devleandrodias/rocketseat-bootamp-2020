import 'reflect-metadata';

import { FakeUserRepository } from '@modules/users/repositories/fakes/user.repository.fake';
import { FakeHashProvider } from '@modules/users/providers/hash-providers/fakes/fake-hash-provider';

import CreateUserService from '@modules/users/services/create-user.service';
import AuthenticateService from './create-auth.service';

describe('AuthenticateUser', () => {
  it('deve criar a autentificação para o usuário', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUserService = new CreateUserService(
      fakeUserRepository,
      fakeHashProvider
    );

    const createAuthenticateService = new AuthenticateService(
      fakeUserRepository,
      fakeHashProvider
    );

    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const auth = await createAuthenticateService.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(auth).toHaveProperty('token');
    expect(auth.user).toEqual(user);
  });
});
