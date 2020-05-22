import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../infra/typeorm/entities/appointment.model';
import AppointmentsRepository from '../repositories/appointments.repository';
import AppError from '../../../shareds/errors/app.error';

interface RequestDto {
  provider_id: string;
  date: Date;
}

export default class CreateAppointmentService {
  public async execute({
    provider_id,
    date,
  }: RequestDto): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate)
      throw new AppError('This appointment is already booked', 401);

    const appointment = appointmentRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}
