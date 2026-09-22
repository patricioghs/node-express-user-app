const express = require("express");
const orderController = require("../controllers/orderController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", orderController.listOrders);
router.post("/", requireAuth, orderController.createOrder);
router.put("/:id", requireAuth, orderController.updateOrder);
router.delete("/:id", requireAuth, orderController.deleteOrder);

module.exports = router;
