const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
