const express = require('express');
const app = express();
const products = require('./data.js');

// app.get('/tutorial/:notion', (req, res) => {
//   console.log('req.params: ', req.params);
//   res.send(`Tutorial about ${req.params.notion}!`);
// });

// all data:
app.get('/api/products', (req, res) => {
  res.json(products);
});

// does not show price
// app.get('/api/products', (req, res) => {
//   const partial_products = products.map((product) => {
//     return { id: product.id, name: product.name };
//   });
//   res.json(partial_products);
// });

app.get('/api/products/:productID', (req, res) => {
  const id = Number(req.params.productID);
  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send('Product not found');
  }

  res.json(product);
});

app.get('/api/query', (req, res) => {
  const name = req.query.name.toLowerCase();
  const products_result = products.filter((product) =>
    product.name.toLowerCase().includes(name)
  );

  if (products_result.length < 1) {
    return res.status(404).send('No products matched your search');
  }
  res.json(products_result);
});

// ============ POST ==================

app.use(express.json()); // parse json body content

app.post('/api/products', (req, res) => {
  console.log(req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
