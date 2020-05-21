import { Repository, EntityRepository } from 'typeorm';

import Appointment from '../models/appointment.model';

@EntityRepository(Appointment)
class AppointmentsRespository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default AppointmentsRespository;
