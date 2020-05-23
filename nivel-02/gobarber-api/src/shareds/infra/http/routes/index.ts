import { Router } from 'express';

import authRouter from '@modules/auth/http/routes/auth.routes';
import usersRouter from '@modules/users/http/routes/users.routes';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
