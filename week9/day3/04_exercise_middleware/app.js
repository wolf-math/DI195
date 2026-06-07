const express = require('express');
const app = express();

// before every route
// app.use((req, res, next) => {
// before /home only
app.use('/home', (req, res, next) => {
  const now = new Date();
  const nowString = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  console.log(nowString);
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
