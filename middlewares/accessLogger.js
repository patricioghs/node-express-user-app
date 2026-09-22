const { appendAccessLog } = require("../services/logService");

/**
 * Middleware de registro de accesos.
 * Guarda fecha, hora, método HTTP y ruta visitada.
 */
function accessLogger(req, res, next) {
  appendAccessLog(req.method, req.originalUrl);
  next();
}

module.exports = accessLogger;
