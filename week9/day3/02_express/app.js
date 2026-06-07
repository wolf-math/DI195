const express = require('express');
const app = express();

// Import the router module
const musicRouter = require('./routes/music.js');

// Mount the router at a specific path
app.use('/music', musicRouter);

app.listen(5004, () => {
  console.log('server is listening on port 5004');
});
