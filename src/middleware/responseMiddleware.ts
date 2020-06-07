import { Request, Response } from 'express';
import { Next } from 'compose-middleware';

const responseMiddleware = (_: Request, res: Response, next: Next) => {
  res.api = function ($res: any) {
    return res.json({
      status: 'success',
      data: $res
    });
  }

  res.error = function ($res: any) {
    return res.json({
      status: 'error',
      data: $res
    });
  }
  next();
};

export default responseMiddleware;
