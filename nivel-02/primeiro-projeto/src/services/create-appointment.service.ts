import Appointment from '../models/appointment.model';
import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/appointments.repository';

interface RequestDto {
  provider: string;
  date: Date;
}

export default class CreateAppointmentService {
  private readonly _appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this._appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDto): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this._appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate)
      throw Error('This appointment is already booked');

    const appointment = this._appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}
