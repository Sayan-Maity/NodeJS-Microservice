const BookModel = require("../models/BookModel");

// GET
module.exports.getBooks = async (req, res) => {
  const books = await BookModel.find();
  res.status(201).send(books);
};

// POST
module.exports.saveBook = (req, res) => {
  const { title, desc, cover } = req.body;

  const newBook = new BookModel({
    title,
    desc,
    cover,
  });

  newBook
    .save()
    .then(() => {
      res.status(201).send({ msg: "Book saved successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// PUT
module.exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, desc, cover } = req.body;

  BookModel.findByIdAndUpdate(id, {
    title,
    desc,
    cover,
  })
    .then(() => {
      res.status(201).send({ msg: "Book updated successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// DELETE
module.exports.deleteBook = (req, res) => {
  const { id } = req.params;

  BookModel.findByIdAndDelete(id)
    .then(() => {
      res.status(201).send({ msg: "Book deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};
