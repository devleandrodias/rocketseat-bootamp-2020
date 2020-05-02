import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => res.json({ ok: 'Hello Node DevOps...' }));

export default routes;
