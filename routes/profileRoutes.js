const express = require("express");
const userController = require("../controllers/userController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/perfil", requireAuth, userController.showProfile);

module.exports = router;
