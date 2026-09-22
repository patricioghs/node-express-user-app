const express = require("express");

const homeController = require("../controllers/homeController");
const accessLogger = require("../middlewares/accessLogger");

const router = express.Router();

// Ruta pública principal.
// El middleware accessLogger registra la visita antes de ejecutar el controlador.
router.get("/", accessLogger, homeController.showHome);

// Ruta pública que informa el estado de la aplicación en formato JSON.
router.get("/status", accessLogger, homeController.showStatus);

module.exports = router;
