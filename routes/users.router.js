const express = require('express');
const router = express.Router();
const UserService = require('./../services/user.service');

const service = new UserService();

//GET
router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

//POST
router.post('/', (req, res) => {
  const body = req.body;
  const NewUser = service.create(body);
  res.status(201).json(NewUser);
});

//PATCH
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
