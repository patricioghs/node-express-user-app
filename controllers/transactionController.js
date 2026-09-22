const transactionService = require("../services/transactionService");

async function createUserAndOrder(req, res, next) {
  try {
    const result = await transactionService.createUserAndOrder(req.body);
    res.status(201).json({
      status: "success",
      message: "Transacción completada correctamente",
      data: result
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createUserAndOrder };
