import { Request, Response } from 'express';
import { Next } from 'compose-middleware';

const response = (_: Request, res: Response, next: Next) => {
  res.api = function ($res) {
    return res.json({
      status: 'success',
      data: $res
    });
  }

  res.error = function ($res) {
    return res.json({
      status: 'error',
      data: $res
    });
  }
  next();
};

export default response;
