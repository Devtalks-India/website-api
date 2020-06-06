import { Request, Response, NextFunction } from 'express';

export {};

declare global {
  namespace Express {
    interface Response {
      api(body: Record<string, any> | Array<Record<string, any>>): void;
      error(body: Record<string, any> | Array<Record<string, any>>): void;
    }
  }
}
