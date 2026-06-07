const express = require('express');
const app = express();

app.listen(5001, () => {
  console.log('server is listening on port 5001');
});

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/aboutme', (req, res) => res.send('I love coding!'));
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'));
app.get('/api/products', (req, res) => {
  res.json([
    { name: 'iPhone', price: 800 },
    { name: 'iPad', price: 650 },
    { name: 'iWatch', price: 750 }
  ]);
});
