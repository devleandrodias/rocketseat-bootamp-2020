import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => {
  const { name } = req.body;
  return res.send('Hello Sr.' + name);
});

export default routes;
