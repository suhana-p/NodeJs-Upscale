// models/bookModel.js
const books = [
{ id: 1, title: 'Book 1', author: 'Author 1' },
{ id: 2, title: 'Book 2', author: 'Author 2' }
];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

module.exports = {
  Book,
  books,
};
