import bodyParser from 'body-parser';
import { compose } from 'compose-middleware';
import cors from 'cors';
import responseMiddleWare from './responseMiddleware';

const middleware = [
  cors() as any,
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  responseMiddleWare
];

export default compose(middleware);
