const bcrypt = require("bcryptjs");

const { sequelize } = require("../config/database");
const { User, Order } = require("../models");
const { appendTransactionError } = require("./logService");
const { sanitizeUser } = require("./userService");

async function createUserAndOrder({
  nombre,
  email,
  password,
  descripcion,
  total,
  forceError = false
}) {
  const transaction = await sequelize.transaction();

  try {
    if (!nombre || !email || !password || !descripcion || total === undefined) {
      const error = new Error("Faltan datos requeridos para la transacción");
      error.status = 400;
      throw error;
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create(
      { nombre, email, passwordHash },
      { transaction }
    );

    if (forceError === true) {
      throw new Error("Error forzado para demostrar rollback");
    }

    const order = await Order.create(
      { userId: user.id, descripcion, total, estado: "pendiente" },
      { transaction }
    );

    await transaction.commit();
    console.log("Transacción completada: usuario y pedido creados");

    return { usuario: sanitizeUser(user), pedido: order };
  } catch (error) {
    await transaction.rollback();
    console.error("Rollback ejecutado:", error.message);
    appendTransactionError(error.message);
    throw error;
  }
}

module.exports = { createUserAndOrder };
