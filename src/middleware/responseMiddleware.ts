import { Request, Response, NextFunction } from 'express';

const response = (req: Request, res: Response, next: NextFunction) => {
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
