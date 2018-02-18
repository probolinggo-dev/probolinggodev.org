const routes = module.exports = require('next-routes')();
routes
  .add('index', '/', 'index')
  .add('about', '/about', 'about');
