const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

const pool = require("../config/pgPool");
const { User, Order } = require("../models");

async function getUsersWithSql({ nombre, page = 1, limit = 10 }) {
  const safePage = Math.max(Number(page) || 1, 1);
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);
  const offset = (safePage - 1) * safeLimit;

  const values = [];
  let where = "";

  if (nombre) {
    values.push(`%${nombre}%`);
    where = `WHERE nombre ILIKE $${values.length}`;
  }

  values.push(safeLimit);
  const limitPosition = values.length;
  values.push(offset);
  const offsetPosition = values.length;

  const query = `
    SELECT id, nombre, email, "createdAt", "updatedAt"
    FROM usuarios
    ${where}
    ORDER BY id ASC
    LIMIT $${limitPosition}
    OFFSET $${offsetPosition}
  `;

  const result = await pool.query(query, values);

  return { page: safePage, limit: safeLimit, data: result.rows };
}

async function getUsersWithOrm(nombre) {
  const where = nombre
    ? { nombre: { [Op.iLike]: `%${nombre}%` } }
    : {};

  return User.findAll({
    where,
    attributes: { exclude: ["passwordHash"] },
    order: [["id", "ASC"]]
  });
}

async function getUserById(id) {
  return User.findByPk(id, {
    attributes: { exclude: ["passwordHash"] }
  });
}

async function getUserWithOrders(id) {
  return User.findByPk(id, {
    attributes: { exclude: ["passwordHash"] },
    include: [{ model: Order, as: "pedidos" }]
  });
}

async function createUser({ nombre, email, password }) {
  if (!nombre || !email || !password) {
    const error = new Error("nombre, email y password son obligatorios");
    error.status = 400;
    throw error;
  }

  const existing = await User.findOne({ where: { email } });
  if (existing) {
    const error = new Error("El email ya está registrado");
    error.status = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ nombre, email, passwordHash });
  return sanitizeUser(user);
}

async function updateUser(id, data) {
  const user = await User.findByPk(id);
  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }

  if (data.nombre !== undefined) user.nombre = data.nombre;
  if (data.email !== undefined) user.email = data.email;
  if (data.password !== undefined) {
    user.passwordHash = await bcrypt.hash(data.password, 10);
  }

  await user.save();
  return sanitizeUser(user);
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }
  await user.destroy();
}

function sanitizeUser(user) {
  const clean = user.toJSON();
  delete clean.passwordHash;
  return clean;
}

module.exports = {
  getUsersWithSql,
  getUsersWithOrm,
  getUserById,
  getUserWithOrders,
  createUser,
  updateUser,
  deleteUser,
  sanitizeUser
};
