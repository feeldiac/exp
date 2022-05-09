const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my first server.')
})

// C A T E G O R I E S
app.get('/categories', (req, res) => {
  res.json([{
    name: 'Home',
    size: 100,
  },
  {
    name: 'Women',
    size: 120,
  },
  {
    name: 'Garden',
    size: 50,
  }]);
});

app.get('/categories/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'category',
    size: 0,
  })
})

// P R O D U C T S
app.get('/products', (req, res) => {
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

// Endpoints específicos deben estar antes que endpoints dinámicos
app.get('/products/filter', (req, res) => {
  res.send('Filter')
})

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Product ',
    price: 200
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// P E O  P L E
app.get('/people', (req, res) => {
  res.json([{
    name: 'name 1',
    age: 25,
    role: 'role 1',
  },
  {
    name: 'name 2',
    age: 25,
    role: 'role 2',
  }]);
});

app.get('/people/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'name',
    age: 25,
    role: 'role'
  })
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query; //capture query param
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('Theres no parameters');
  }
})

app.listen(port, () => {
  console.log(`My port: ${port}`);
})
