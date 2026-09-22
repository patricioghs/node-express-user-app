const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({
      status: "error",
      message: "Token de autenticación requerido",
      data: null
    });
  }

  const token = authorization.slice(7).trim();

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Token de autenticación requerido",
      data: null
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.sub,
      email: decoded.email
    };

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "error",
        message: "Token expirado",
        data: null
      });
    }

    return res.status(401).json({
      status: "error",
      message: "Token inválido",
      data: null
    });
  }
}

module.exports = { requireAuth };
