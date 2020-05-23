import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import 'express-async-errors';

import routes from '@shareds/infra/http/routes';
import AppError from '@shareds/errors/app.error';
import uploadConfig from '@configs/upload.config';

import '../typeorm';

const app = express();

const port = 3333;

app.use(cors());

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
