import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/appointments.repository';
import createAppointmentService from '@modules/appointments/services/create-appointment.service';
import ensureAuthenticated from '@shareds/infra/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentRepository = new AppointmentsRepository();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (_, res) => {
//   const appointments = await appointmentRepository.find();
//   return res.json(appointments);
// });

appointmentsRouter.post('/', async (req, res) => {
  const { provider_id, date } = req.body;

  const parsedDate = parseISO(date);

  const createAppointment = new createAppointmentService(appointmentRepository);

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });

  return res.json(appointment);
});

export default appointmentsRouter;
