/**
 * Middleware centralizado de errores.
 * Queda preparado para crecer cuando el proyecto incorpore
 * base de datos y API REST en los módulos siguientes.
 */
function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    status: "error",
    message: "Ocurrió un error interno en el servidor",
    data: null
  });
}

module.exports = errorHandler;
