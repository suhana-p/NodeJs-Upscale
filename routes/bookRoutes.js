// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define a default route for the root URL ("/")
router.get('/', (req, res) => {
  res.send('Welcome to the Book API!');
});

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
