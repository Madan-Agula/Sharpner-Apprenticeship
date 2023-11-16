const express = require('express');
const app = express();
const port = 3000;

// Set up a simple array to simulate dynamic content
const contentData = {
  home: 'Welcome to the home page!',
  about: 'This is the about page.',
  contact: 'Contact us at contact@example.com',
};

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Define a route for dynamic content
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const content = contentData[page] || 'Page not found';

  res.send(content);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
