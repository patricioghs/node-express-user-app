const { appendAccessLog } = require("../services/logService");

function accessLogger(req, res, next) {
  appendAccessLog(req.method, req.originalUrl);
  next();
}

module.exports = accessLogger;
