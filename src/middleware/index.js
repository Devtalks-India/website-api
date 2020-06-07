const { compose } = require('compose-middleware');
const cors = require('cors');
const responseMiddleWare = require('./responseMiddleware');


module.exports = compose([cors(), responseMiddleWare]);
