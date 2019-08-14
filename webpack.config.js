const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./config/webpack.dev.config.js');
} else {
    console.log('Production Env.')
    module.exports = require('./config/webpack.prod.config.js');
}