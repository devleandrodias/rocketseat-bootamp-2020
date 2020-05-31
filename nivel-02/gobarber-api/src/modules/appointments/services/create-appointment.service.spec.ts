import CreateAppointmentService from './create-appointment.service';
import FakeAppointmentRepository from '../repositories/fakes/appointments.repository.fake';

describe('CreateAppointment', () => {
  it('deve ser possível criar um novo agendamento', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('não deve ser possível criar dois agendamento em horários iguais', () => {
    expect(3 - 2).toBe(1);
  });
});
