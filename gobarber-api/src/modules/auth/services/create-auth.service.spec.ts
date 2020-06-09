import 'reflect-metadata';

import { FakeUserRepository } from '@modules/users/repositories/fakes/user.repository.fake';
import { FakeHashProvider } from '@modules/users/providers/hash-providers/fakes/fake-hash-provider';

import CreateUserService from '@modules/users/services/create-user.service';
import AuthenticateService from './create-auth.service';
import AppError from '@shareds/errors/app.error';

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

  it('não deve permitir criar uma autentificação para um usuário que não existe', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createAuthenticateService = new AuthenticateService(
      fakeUserRepository,
      fakeHashProvider
    );

    expect(
      createAuthenticateService.execute({
        email: 'johndoe@example.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
