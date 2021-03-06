const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middleware/error.handler')


const app = express();
const port = 3000;

//This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

/*
Some definitions:

- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

- app.METHOD(path, callback [, callback ...])
Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, and so on, in lowercase. Thus, the actual methods are app.get(), app.post(), app.put(), and so on.

- express.Router class
Create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
*/


app.get('/', (req, res) => {
  res.send('Hello from my first server.');
});

routerApi(app);

//Mount the error middlewares for every request
app.use(logErrors);
// app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`My port: ${port}`);
});
