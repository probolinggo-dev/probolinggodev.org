const routes = module.exports = require('next-routes')();
routes
  .add('index', '/', 'index')
  .add('login', '/login', 'login')
  .add('about', '/about', 'about');
