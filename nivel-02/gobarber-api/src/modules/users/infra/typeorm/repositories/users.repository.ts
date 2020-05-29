import { getRepository, Repository } from 'typeorm';
import User from '../entities/user.model';
import IUserRepository from '@modules/users/repositories/user-repository.interface';
import ICreateUserDto from '@modules/users/dtos/create-user-interface.dto';

class UsersRepository implements IUserRepository {
  private _repository: Repository<User>;

  constructor() {
    this._repository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined> {
    return await this._repository.findOne({ where: id });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this._repository.findOne({ where: email });
  }

  async create(data: ICreateUserDto): Promise<User> {
    return await this._repository.save(this._repository.create(data));
  }

  async update(user: User): Promise<User> {
    return this._repository.save(user);
  }
}

export default UsersRepository;
