const express = require("express");
const userController = require("../controllers/userController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", userController.listUsersSql);
router.get("/orm", userController.listUsersOrm);
router.get("/:id/pedidos", userController.showUserWithOrders);
router.post("/", userController.createUser);

router.put("/:id", requireAuth, userController.updateUser);
router.delete("/:id", requireAuth, userController.deleteUser);

module.exports = router;
