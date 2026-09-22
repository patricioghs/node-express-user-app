const path = require("path");

/**
 * Envía la página HTML principal.
 * La lógica de respuesta se mantiene fuera del archivo de rutas
 * para conservar una estructura modular.
 */
function showHome(req, res) {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(filePath);
}

/**
 * Devuelve información básica del servidor en formato JSON.
 */
function showStatus(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Servidor funcionando correctamente",
    timestamp: new Date().toISOString()
  });
}

module.exports = {
  showHome,
  showStatus
};
