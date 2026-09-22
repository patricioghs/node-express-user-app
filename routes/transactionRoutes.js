const express = require("express");
const transactionController = require("../controllers/transactionController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/usuario-pedido", requireAuth, transactionController.createUserAndOrder);

module.exports = router;
