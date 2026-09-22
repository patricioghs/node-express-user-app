const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

async function login(email, password) {
  if (!email || !password) {
    const error = new Error("email y password son obligatorios");
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
  );

  return {
    token,
    tokenType: "Bearer",
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    user: { id: user.id, nombre: user.nombre, email: user.email }
  };
}

module.exports = { login };
