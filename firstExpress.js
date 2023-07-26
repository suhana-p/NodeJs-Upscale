// Import required modules
const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

const port = process.env.PORT;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// note-
// run in terminal : node firstExpress.js
// access the server by visiting http://localhost:4000