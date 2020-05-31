import { uuid } from 'uuidv4';
import IAppointmentRepository from '@modules/appointments/repositories/appointment-repository.inteface';
import ICreateAppointmentDto from '@modules/appointments/dtos/create-appointment-interface.dto';
import Appointment from '@modules/appointments/infra/typeorm/entities/appointment.model';

class AppointmentsRespository implements IAppointmentRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    return this.appointments.find(appointment => appointment.date === date);
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDto): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRespository;
