// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve the static index.html file
app.get('/easylist', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000/easylist`);
});
