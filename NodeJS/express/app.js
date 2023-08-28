const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();

// Use body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for displaying the add-product form
app.get('/add-product', (req, res) => {
  res.send(`
    <form method="post" action="/add-product">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required><br>
      <label for="productSize">Product Size:</label>
      <input type="text" id="productSize" name="productSize" required><br>
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Define a route for handling the form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}`);
  console.log(`Product Size: ${productSize}`);
  res.send('Product added successfully!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
