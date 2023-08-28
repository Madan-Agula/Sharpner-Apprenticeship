const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <label for="message">Enter a message:</label>
      <input type="text" id="message" name="message" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const message = req.body.message;
  // Write the message to a file
  fs.appendFileSync('data.txt', message + '\n');

  // Redirect with a 302 response
  res.redirect(302, '/');
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
