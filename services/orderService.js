const { Order, User } = require("../models");

async function getOrders() {
  return Order.findAll({
    include: [
      {
        model: User,
        as: "usuario",
        attributes: ["id", "nombre", "email"]
      }
    ],
    order: [["id", "ASC"]]
  });
}

async function createOrder({ userId, descripcion, total, estado }) {
  if (!userId || !descripcion || total === undefined) {
    const error = new Error("userId, descripcion y total son obligatorios");
    error.status = 400;
    throw error;
  }

  const user = await User.findByPk(userId);
  if (!user) {
    const error = new Error("El usuario indicado no existe");
    error.status = 404;
    throw error;
  }

  return Order.create({
    userId,
    descripcion,
    total,
    estado: estado || "pendiente"
  });
}

async function updateOrder(id, data) {
  const order = await Order.findByPk(id);

  if (!order) {
    const error = new Error("Pedido no encontrado");
    error.status = 404;
    throw error;
  }

  const allowed = ["descripcion", "total", "estado"];

  for (const field of allowed) {
    if (data[field] !== undefined) {
      order[field] = data[field];
    }
  }

  await order.save();
  return order;
}

async function deleteOrder(id) {
  const order = await Order.findByPk(id);

  if (!order) {
    const error = new Error("Pedido no encontrado");
    error.status = 404;
    throw error;
  }

  await order.destroy();
}

module.exports = {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
};
