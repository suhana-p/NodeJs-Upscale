// bookServer.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use('/', bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// note- 
// in terminal run- node bookServer.js
// to see default reponse,run http://localhost:3000 in your browser
// to see the response of get, run http://localhost:3000/books in your browser
