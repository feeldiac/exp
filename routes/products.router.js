/*
Routes related to products
*/

const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

/*
router.METHOD(path, [callback, ...] callback)
The router.METHOD() methods provide the routing functionality in Express, where METHOD is one of the HTTP methods, such as GET, PUT, POST, and so on, in lowercase.
*/

//GET
router.get('/', (req, res) => {
  //Omit the /products cause is passed as an argument at index
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.product(),
      price: parseFloat(faker.commerce.price()),
      imgUrl: faker.image.business(),
    });
  }
  res.json(products);
});

// router.get('/filter', (req, res) => {
//   // Specific endpoints before dynamic endpoints
//   res.send('Filter');
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product ',
    price: 200,
  });
});

//POST
router.post('/', (req, res) => {
  //Return the body of the message as response
  const body = req.body;
  res.json({
    message: 'Created',
    data: body,
  });
});

//PATCH
router.patch('/:id', (req, res) => {
  //Partial update. Use patch over put
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id,
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
