const express = require("express");

const homeController = require("../controllers/homeController");
const accessLogger = require("../middlewares/accessLogger");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const transactionRoutes = require("./transactionRoutes");

const router = express.Router();

router.get("/", accessLogger, homeController.showHome);
router.get("/status", accessLogger, homeController.showStatus);

router.use("/usuarios", accessLogger, userRoutes);
router.use("/pedidos", accessLogger, orderRoutes);
router.use("/transacciones", accessLogger, transactionRoutes);

module.exports = router;
