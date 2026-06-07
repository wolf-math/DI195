const express = require('express');
const app = express();

const productRoutes = require('./routes/products');

const userRoutes = require('./routes/users');

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
