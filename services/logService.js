const fs = require("fs");
const path = require("path");

const accessLogFile = path.join(__dirname, "..", "logs", "log.txt");
const transactionLogFile = path.join(__dirname, "..", "logs", "transactions.log");

function appendAccessLog(method, route) {
  const now = new Date();
  const date = now.toLocaleDateString("es-CL");
  const time = now.toLocaleTimeString("es-CL", { hour12: false });
  const line = `${date} - ${time} - ${method} ${route}\n`;

  fs.appendFile(accessLogFile, line, "utf8", (error) => {
    if (error) {
      console.error("No fue posible registrar el acceso:", error.message);
    }
  });
}

function appendTransactionError(message) {
  const line = `${new Date().toISOString()} - ROLLBACK - ${message}\n`;

  fs.appendFile(transactionLogFile, line, "utf8", (error) => {
    if (error) {
      console.error("No fue posible registrar la transacción:", error.message);
    }
  });
}

module.exports = {
  appendAccessLog,
  appendTransactionError
};
