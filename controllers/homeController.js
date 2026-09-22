const path = require("path");

function showHome(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
}

function showStatus(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Servidor y aplicación en funcionamiento",
    timestamp: new Date().toISOString()
  });
}

module.exports = {
  showHome,
  showStatus
};
