const express = require('express');
const app = express();
const port = 3000;

// Set up a simple array to simulate dynamic content
let contentData = {
  home: 'Welcome to the home page!',
  about: 'This is the about page.',
  contact: 'Contact us at contact@example.com',
};

// Middleware to parse JSON request body
app.use(express.json());

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// GET route for dynamic content
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const content = contentData[page] || 'Page not found';

  res.send(content);
});

// DELETE route to remove a page
app.delete('/:page', (req, res) => {
  const page = req.params.page;
  if (contentData[page]) {
    delete contentData[page];
    res.send(`Page '${page}' deleted successfully.`);
  } else {
    res.status(404).send(`Page '${page}' not found.`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
