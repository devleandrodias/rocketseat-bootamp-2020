import { Router } from 'express';

import authAuthenticated from '@shareds/infra/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/appointments.controller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(authAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
