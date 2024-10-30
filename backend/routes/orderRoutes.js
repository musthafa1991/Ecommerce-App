const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder); 
router.get("/", authMiddleware, getOrders); 
router.get("/:id", authMiddleware, getOrderById);
router.put("/:id", authMiddleware, updateOrder); 
router.delete("/:id", authMiddleware, deleteOrder);

module.exports = router;
