const express = require("express");

const homeController = require("../controllers/homeController");
const accessLogger = require("../middlewares/accessLogger");

const authRoutes = require("./authRoutes");
const profileRoutes = require("./profileRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const transactionRoutes = require("./transactionRoutes");
const uploadRoutes = require("./uploadRoutes");

const router = express.Router();

router.get("/", accessLogger, homeController.showHome);
router.get("/status", accessLogger, homeController.showStatus);

router.use(accessLogger);
router.use(authRoutes);
router.use(profileRoutes);
router.use("/usuarios", userRoutes);
router.use("/pedidos", orderRoutes);
router.use("/transacciones", transactionRoutes);
router.use(uploadRoutes);

module.exports = router;
