const moment = require('moment');

const logger = (req, res, next) => {

    // req.protocol returns 'http', req.get('host) gets us the 'localhost:5000', req.originalUrl gets us the '/api/members/ 
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};


module.exports = logger;