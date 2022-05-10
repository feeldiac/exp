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
  res.json({
    message: 'Created',
    data: body,
  });
});

//PATCH
router.patch('/:id', (req, res) => {
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
