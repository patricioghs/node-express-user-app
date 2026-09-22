const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.listUsersSql);
router.get("/orm", userController.listUsersOrm);
router.get("/:id/pedidos", userController.showUserWithOrders);

router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
