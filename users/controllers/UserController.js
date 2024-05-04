const UserModel = require("../models/UserModel");

// GET
module.exports.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(201).send(users);
};

// POST
module.exports.saveUser = (req, res) => {
  const { id, name, email } = req.body;

  const newUser = new UserModel({
    id,
    name,
    email,
  });

  newUser
    .save()
    .then(() => {
      res.status(201).send({ msg: "User saved successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// PUT
module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  UserModel.findByIdAndUpdate(id, {
    name,
    email,
  })
    .then(() => {
      res.status(201).send({ msg: "User updated successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// DELETE
module.exports.deleteUser = (req, res) => {
  const { id } = req.params;

  UserModel.findByIdAndDelete(id)
    .then(() => {
      res.status(201).send({ msg: "User deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};
