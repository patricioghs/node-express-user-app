const path = require("path");

function showHome(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
}

function showStatus(req, res) {
  res.status(200).json({
    status: "success",
    message: "API funcionando correctamente",
    data: { timestamp: new Date().toISOString() }
  });
}

module.exports = { showHome, showStatus };
