const productsRouter = require('./products.router')
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

/*
app.use()
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
*/

function routerApi(app) {
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);
}

module.exports = routerApi;
