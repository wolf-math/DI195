const express = require('express');
const app = express();
const products_routes = require('./routes/products.js');

app.listen(5004, () => {
  console.log('server is listening on port 5004');
});

app.use(express.json()); // middleware
app.use('/api/products', products_routes);
