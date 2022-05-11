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
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    //Execute the error middlewares
    next(error);
  }
});

//POST
router.post('/', async (req, res) => {
  //Return the body of the message as response
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

//PATCH
router.patch('/:id', async (req, res) => {
  //Partial update. Use patch over put
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
});

module.exports = router;
