const orderService = require("../services/orderService");

async function listOrders(req, res, next) {
  try {
    const orders = await orderService.getOrders();

    res.status(200).json({
      status: "success",
      message: "Pedidos obtenidos correctamente",
      data: orders
    });
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  try {
    const order = await orderService.createOrder(req.body);

    res.status(201).json({
      status: "success",
      message: "Pedido creado correctamente",
      data: order
    });
  } catch (error) {
    next(error);
  }
}

async function updateOrder(req, res, next) {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      message: "Pedido actualizado correctamente",
      data: order
    });
  } catch (error) {
    next(error);
  }
}

async function deleteOrder(req, res, next) {
  try {
    await orderService.deleteOrder(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Pedido eliminado correctamente",
      data: null
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listOrders,
  createOrder,
  updateOrder,
  deleteOrder
};
