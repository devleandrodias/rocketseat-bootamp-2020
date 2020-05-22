import Appointment from '@modules/appointments/infra/typeorm/entities/appointment.model';

export default interface IAppointmentRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
