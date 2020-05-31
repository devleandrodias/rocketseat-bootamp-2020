import User from '../infra/typeorm/entities/user.model';
import ICreateUserDto from '../dtos/create-user-interface.dto';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDto): Promise<User>;
  update(user: User): Promise<User>;
}
