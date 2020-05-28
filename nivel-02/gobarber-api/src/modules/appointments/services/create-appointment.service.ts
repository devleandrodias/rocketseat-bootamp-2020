import { startOfHour } from 'date-fns';
import AppError from '@shareds/errors/app.error';
import Appointment from '../infra/typeorm/entities/appointment.model';
import IAppointmentRepository from '../repositories/appointment-repository.inteface';

interface IRequest {
  provider_id: string;
  date: Date;
}

export default class CreateAppointmentService {
  constructor(private _appointmentRepository: IAppointmentRepository) {}

  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    if (await this._appointmentRepository.findByDate(appointmentDate))
      throw new AppError('This appointment is already booked', 401);

    return await this._appointmentRepository.create({
      provider_id,
      date: appointmentDate,
    });
  }
}
