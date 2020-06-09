import Appointment from '@modules/appointments/infra/typeorm/entities/appointment.model';
import ICreateAppointmentDto from '../dtos/create-appointment-interface.dto';

export default interface IAppointmentRepository {
  create(data: ICreateAppointmentDto): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
