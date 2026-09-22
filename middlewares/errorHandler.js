const multer = require("multer");

function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        status: "error",
        message: "El archivo supera el límite de 2 MB",
        data: null
      });
    }

    return res.status(400).json({
      status: "error",
      message: `Error de subida: ${err.message}`,
      data: null
    });
  }

  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      status: "error",
      message: "Datos no válidos",
      data: err.errors.map((item) => item.message)
    });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(409).json({
      status: "error",
      message: "Ya existe un registro con ese valor único",
      data: null
    });
  }

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Ocurrió un error interno en el servidor",
    data: null
  });
}

module.exports = errorHandler;
