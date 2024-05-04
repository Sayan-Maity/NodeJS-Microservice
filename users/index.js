const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes/UserRoute");

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

//routes
app.get("/", (req, res) => {
  res.send({ message: "This is Users Service" });
});

// Database connection
const MONGODB_URI = "mongodb+srv://sayan:sayan@cluster0.hn2uu1a.mongodb.net/";
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Users Service running on port ${PORT}`);
});
