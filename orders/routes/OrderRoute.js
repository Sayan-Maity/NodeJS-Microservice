const express = require("express");
const router = express.Router();
const {
  getOrders,
  saveOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/OrderController");

router.get("/getOrders", getOrders);
router.post("/saveOrder", saveOrder);
router.delete("/deleteOrder/:id", deleteOrder);
router.put("/updateOrder/:id", updateOrder);

module.exports = router;