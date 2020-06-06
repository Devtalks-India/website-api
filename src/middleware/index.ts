import { compose } from 'compose-middleware';
import responseMiddleWare from './responseMiddleware';


export default compose([responseMiddleWare]);
