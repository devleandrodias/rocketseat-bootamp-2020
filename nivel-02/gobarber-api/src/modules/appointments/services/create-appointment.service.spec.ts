import CreateAppointmentService from './create-appointment.service';
import FakeAppointmentRepository from '../repositories/fakes/appointments.repository.fake';
import AppError from '@shareds/errors/app.error';

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

  it('não deve ser possível criar dois agendamento em horários iguais', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentRepository
    );

    const appointmentDate = new Date(2020, 4, 15);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
