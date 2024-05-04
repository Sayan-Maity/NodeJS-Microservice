const OrderModel = require("../models/OrderModel");
const axios = require("axios");

//routes
// app.get("/getOrder", async (req, res) => {
//   const userData = await axios.get("http://localhost:3001/getUser");
//   res.send({ "This is Get Orders Service ": userData.data });
// });

// GET
module.exports.getOrders = async (req, res) => {
  const orders = await OrderModel.find();
  res.status(201).send(orders);
};

// POST
module.exports.saveOrder = (req, res) => {
  const { orderId, orderName } = req.body;

  const newOrder = new OrderModel({
    orderId,
    orderName,
  });

  newOrder
    .save()
    .then(() => {
      res.status(201).send({ msg: "Order saved successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// PUT
module.exports.updateOrder = (req, res) => {
  const { id } = req.params;
  const { orderName } = req.body;

  OrderModel.findByIdAndUpdate(id, {
    orderName,
  })
    .then(() => {
      res.status(201).send({ msg: "Order updated successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};

// DELETE
module.exports.deleteOrder = (req, res) => {
  const { id } = req.params;

  OrderModel.findByIdAndDelete(id)
    .then(() => {
      res.status(201).send({ msg: "Order deleted successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: err, msg: "Something went wrong" });
    });
};
