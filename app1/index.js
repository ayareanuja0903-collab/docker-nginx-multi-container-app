const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js App (App1)');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App1 running on port 3000');
});