import { getRepository, Repository } from 'typeorm';
import Appointment from '../entities/appointment.model';
import IAppointmentRepository from '@modules/appointments/repositories/appointment-repository.inteface';
import ICreateAppointmentDto from '@modules/appointments/dtos/create-appointment-interface.dto';

class AppointmentsRespository implements IAppointmentRepository {
  private _repository: Repository<Appointment>;

  constructor() {
    this._repository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this._repository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDto): Promise<Appointment> {
    const appointment = this._repository.create({ provider_id, date });

    await this._repository.save(appointment);

    return appointment;
  }
}

export default AppointmentsRespository;
