const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "..", "logs", "log.txt");

/**
 * Agrega una línea al archivo log.txt usando fs.appendFile(),
 * tal como solicita la consigna del Módulo 6.
 */
function appendAccessLog(method, route) {
  const now = new Date();

  const date = now.toLocaleDateString("es-CL");
  const time = now.toLocaleTimeString("es-CL", { hour12: false });

  const line = `${date} - ${time} - ${method} ${route}\n`;

  fs.appendFile(logFile, line, "utf8", (error) => {
    if (error) {
      console.error("No fue posible registrar el acceso:", error.message);
    }
  });
}

module.exports = {
  appendAccessLog
};
