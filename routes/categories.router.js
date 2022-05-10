const { default: faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

//GET
router.get('/', (req, res) => {
  const { size } = req.query; //capture query param
  const categories = [];
  const limit = size || 50;

  for (let i = 0; i < limit; i++) {
    categories.push({
      name: faker.commerce.department(),
      size: Math.round(Math.random() * 1000),
    });
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'category',
    size: 0,
  });
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
