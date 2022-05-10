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

//Omit the /products cause is passed as an argument at index
router.get('/', (req, res) => {
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

// Specific endpoints before dynamic endpoints
router.get('/filter', (req, res) => {
  res.send('Filter')
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Product ',
    price: 200
  });
});

module.exports = router;
