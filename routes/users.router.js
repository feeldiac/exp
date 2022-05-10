const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

//GET
router.get('/', (req, res) => {
  const { size } = req.query; //capture query param
  const users = [];
  const limit = size || 50;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.findName(),
      age: Math.round(Math.random() * 70),
    });
  }
  res.json(users);
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
