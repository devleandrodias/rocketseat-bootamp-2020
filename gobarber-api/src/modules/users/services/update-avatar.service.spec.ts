import 'reflect-metadata';

import { FakeUserRepository } from '@modules/users/repositories/fakes/user.repository.fake';
import { FakeDiskStorageProvider } from '@shareds/container/providers/storage-provider/fakes/disk-local-storage-provider.fake';

import UpdateUserAvatarService from '@modules/users/services/update-avatar.service';

describe('AuthenticateUser', () => {
  it('deve criar a autentificação para o usuário', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeDiskLocalProvider = new FakeDiskStorageProvider();

    const updateUserAvatarService = new UpdateUserAvatarService(
      fakeUserRepository,
      fakeDiskLocalProvider
    );

    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      user_id: user.id,
      avatarFileName: 'avatar-fake.jpg',
    });

    expect(user.avatar).toBe('avatar-fake.jpg');
  });
});
