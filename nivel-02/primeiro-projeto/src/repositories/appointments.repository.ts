import Appointment from '../models/appointment.model';
import { isEqual } from 'date-fns';

class AppointmentsRespository {
  constructor() {
    this.appointments = [];
  }

  private appointments: Appointment[];

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRespository;
