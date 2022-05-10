const express = require('express');
const router = express.Router();
const {faker} = require('@faker-js/faker');

router.get('/', (req, res) => {
  const { size } = req.query; //capture query param
  const users = [];
  const limit = size || 50;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.findName(),
      age: Math.round((Math.random() * 70)),
    })
  }
  res.json(users);

})

module.exports = router;
