const express = require("express");
const router = express.Router()

//Book Model
const Book = require("../../models/Book")

// GET api/books - get all books
router.get("/saved", (req, res) => {
  Book.find()
    .then(books => res.json(books))
})

// POST api/books - create a saved book - DEFINES the POST route
router.post("/save", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });

  newBook.save().then(book => res.json(book));
})

// DELETE api/books - delete a saved book
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
  .then(book => book.remove())
  .then(() => console.log("Book successfully removed"))
  .catch(err => console.log(err))
})


module.exports = router;

