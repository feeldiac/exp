const express = require('express');
const router = express.Router();
const CategoryService = require('./../services/category.service');

const service = new CategoryService();

//GET
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

//POST
router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.create(body);
  res.status(201).json(newCategory);
});

//PATCH
router.patch('/:id', (req, res) => {
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
