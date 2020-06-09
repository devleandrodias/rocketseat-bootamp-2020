import IUserRepository from '../user.repository.interface';

export class FakeUserRepository implements IUserRepository {
  findById(
    id: string
  ): Promise<
    import('../../infra/typeorm/entities/user.model').default | undefined
  > {
    throw new Error('Method not implemented.');
  }
  findByEmail(
    email: string
  ): Promise<
    import('../../infra/typeorm/entities/user.model').default | undefined
  > {
    throw new Error('Method not implemented.');
  }
  create(
    data: import('../../dtos/create-user-interface.dto').default
  ): Promise<import('../../infra/typeorm/entities/user.model').default> {
    throw new Error('Method not implemented.');
  }
  update(
    user: import('../../infra/typeorm/entities/user.model').default
  ): Promise<import('../../infra/typeorm/entities/user.model').default> {
    throw new Error('Method not implemented.');
  }
}
