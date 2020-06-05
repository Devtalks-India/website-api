const { compose } = require('compose-middleware');
const responseMiddleWare = require('./responseMiddleware');


module.exports = compose([responseMiddleWare]);
