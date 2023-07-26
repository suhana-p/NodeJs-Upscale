// controllers/bookController.js
const { Book, books } = require('../models/bookModel');

// Get all books
const getAllBooks = (req, res) => {
  res.json(books);
};

// Create a new book
const createBook = (req, res) => {
  const { id, title, author } = req.body;
  const newBook = new Book(id, title, author);
  books.push(newBook);
  res.status(201).json(newBook);
};

// Update a book
const updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, author } = req.body;
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  book.title = title;
  book.author = author;
  res.json(book);
};

// Delete a book
const deleteBook = (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook[0]);
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
