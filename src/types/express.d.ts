import { Request, Response, NextFunction } from 'express';

export {};

declare global {
  namespace Express {
    interface Response {
      api(req: Request, res: Response, next: NextFunction): void;
      error(req: Request, res: Response, next: NextFunction): void;
    }
  }
}
