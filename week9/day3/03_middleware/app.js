const express = require('express');
const app = express();

app.use('/home', (req, res, next) => {
  console.log(
    'Hello Middleware - Middleware only called when the client request the endpoint /home'
  );
  next();
});

app.get('/home', (req, res) => {
  console.log('-----In the Home Page-----');
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  console.log('-----In the About Page-----');
  res.send('About Page');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
