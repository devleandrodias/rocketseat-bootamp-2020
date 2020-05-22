import { Repository, EntityRepository } from 'typeorm';

import IAppointmentRepository from '@modules/appointments/infra/repositories/appointment-repository.inteface';

import Appointment from '../entities/appointment.model';

@EntityRepository(Appointment)
class AppointmentsRespository extends Repository<Appointment>
  implements IAppointmentRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment;
  }
}

export default AppointmentsRespository;
