import 'reflect-metadata';

import express, { Request, Response, NextFunction, response } from 'express';
import 'express-async-errors';

import routes from './shared/routes';
import uploadConfig from './config/upload.config';
import AppError from './shared/errors/app.error';

import './shared/database';

const app = express();

const port = 3333;

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  } else {
    console.error(err);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});

app.listen(port, () => {
  console.info(`[INFO] 🚀 [Started] - API started on port ${port}`);
});
