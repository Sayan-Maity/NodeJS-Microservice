const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
