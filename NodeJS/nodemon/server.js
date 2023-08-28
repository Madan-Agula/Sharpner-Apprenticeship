const express = require('express');
const app = express();

// Define routes
app.get('/home', (req, res) => {
  res.send('Welcome home');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
  res.send('Welcome to my Node Js project');
});

// Start the server --->npm run dev
const port = 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
