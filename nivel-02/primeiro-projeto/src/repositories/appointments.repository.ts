import Appointment from '../models/appointment.model';
import { isEqual } from 'date-fns';

interface CreateAppointmentDto {
  provider: string;
  date: Date;
}

class AppointmentsRespository {
  constructor() {
    this.appointments = [];
  }

  private appointments: Appointment[];

  public find(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date)
    );

    return findAppointment || null;
  }

  public create({ date, provider }: CreateAppointmentDto): Appointment {
    const appointment = new Appointment({ date, provider });
    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRespository;
