const authService = require("../services/authService");

async function login(req, res, next) {
  try {
    const result = await authService.login(req.body.email, req.body.password);
    res.status(200).json({
      status: "success",
      message: "Autenticación correcta",
      data: result
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
