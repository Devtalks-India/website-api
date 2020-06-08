import { compose } from 'compose-middleware';
import cors from 'cors';
import responseMiddleWare from './responseMiddleware';

const middleware = [
  cors() as any,
  responseMiddleWare
];

export default compose(middleware);
