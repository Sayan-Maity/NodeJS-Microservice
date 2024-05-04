const express = require("express");
const router = express.Router();
const {
  getUsers,
  saveUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

router.get("/getUsers", getUsers);
router.post("/saveUser", saveUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;