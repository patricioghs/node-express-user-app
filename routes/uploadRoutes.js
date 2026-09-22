const express = require("express");

const upload = require("../config/upload");
const uploadController = require("../controllers/uploadController");
const { requireAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/upload",
  requireAuth,
  upload.single("archivo"),
  uploadController.uploadFile
);

module.exports = router;
