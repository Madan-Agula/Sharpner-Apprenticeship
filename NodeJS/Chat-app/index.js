const express = require('express');
const fs = require('fs-extra');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

// Middleware to check if the user is logged in
app.use((req, res, next) => {
  if (!req.cookies.username) {
    return res.redirect('/login');
  }
  next();
});

// Define routes

// Login route
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Process login form and store username in cookies
app.post('/login', (req, res) => {
  const { username } = req.body;
  res.cookie('username', username);
  res.redirect('/');
});

// Home route with the chat form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Process and store messages in a file
app.post('/sendMessage', async (req, res) => {
  const { message } = req.body;
  const username = req.cookies.username;
  const chatMessage = `${username}: ${message}\n`;

  try {
    await fs.appendFile('chat.log', chatMessage);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Read and display chat messages
app.get('/chat', async (req, res) => {
  try {
    const chatLog = await fs.readFile('chat.log', 'utf8');
    res.send(chatLog);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
