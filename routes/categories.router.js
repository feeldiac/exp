const { default: faker } = require('@faker-js/faker');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query; //capture query param
  const categories = [];
  const limit = size || 50;

  for (let i = 0; i < limit; i++) {
    categories.push({
      name: faker.commerce.department(),
      size: Math.round((Math.random() * 1000)),
    })
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'category',
    size: 0,
  })
})

module.exports = router;

