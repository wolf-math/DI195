const fs = require('fs');

const message = 'Hello from nodejs';

fs.writeFile('output.txt', message, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully.');
});
