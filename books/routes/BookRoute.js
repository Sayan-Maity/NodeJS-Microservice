const express = require("express");
const router = express.Router();
const {
  getBooks,
  saveBook,
  deleteBook,
  updateBook,
} = require("../controllers/BookController");

router.get("/getBooks", getBooks);
router.post("/saveBook", saveBook);
router.delete("/deleteBook/:id", deleteBook);
router.put("/updateBook/:id", updateBook);

module.exports = router;