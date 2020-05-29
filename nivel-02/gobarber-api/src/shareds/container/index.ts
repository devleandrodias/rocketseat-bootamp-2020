import { container } from 'tsyringe';

import IAppointmentRepository from '@modules/appointments/repositories/appointment-repository.inteface';
import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/appointments.repository';

import IUserRepository from '@modules/users/repositories/user-repository.interface';
import UserRepository from '@modules/users/infra/typeorm/repositories/users.repository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository
);
