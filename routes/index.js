const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

/*
app.use()
Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
*/

function routerApi(app) {
  //Alternative routing to group v1 endpoints
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
