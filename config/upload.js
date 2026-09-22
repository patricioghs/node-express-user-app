const path = require("path");
const multer = require("multer");

const uploadsDirectory = path.join(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDirectory),
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const safeName = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9_-]/g, "-")
      .slice(0, 50);

    cb(null, `${Date.now()}-${safeName || "archivo"}${extension}`);
  }
});

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

function fileFilter(req, file, cb) {
  if (!allowedMimeTypes.has(file.mimetype)) {
    const error = new Error("Tipo de archivo no permitido. Usa JPG, PNG o WEBP.");
    error.status = 400;
    return cb(error);
  }
  cb(null, true);
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }
});

module.exports = upload;
