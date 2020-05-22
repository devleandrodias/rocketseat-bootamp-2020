import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import authRouter from '../../../../modules/auth/http/routes/auth.routes';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
