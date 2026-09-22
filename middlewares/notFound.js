/**
 * Respuesta estándar para rutas que no existen.
 */
function notFound(req, res) {
  res.status(404).json({
    status: "error",
    message: "Ruta no encontrada",
    data: null
  });
}

module.exports = notFound;
