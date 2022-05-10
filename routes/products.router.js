/*
Routes related to products
*/

const express = require('express');
const ProductService = require('./../services/product.service');
const router = express.Router();

const service = new ProductService();

/*
router.METHOD(path, [callback, ...] callback)
The router.METHOD() methods provide the routing functionality in Express, where METHOD is one of the HTTP methods, such as GET, PUT, POST, and so on, in lowercase.
*/

//GET
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

//POST
router.post('/', (req, res) => {
  //Return the body of the message as response
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

//PATCH
router.patch('/:id', (req, res) => {
  //Partial update. Use patch over put
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
