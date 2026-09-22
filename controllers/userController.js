const userService = require("../services/userService");

async function listUsersSql(req, res, next) {
  try {
    const result = await userService.getUsersWithSql(req.query);

    res.status(200).json({
      status: "success",
      message: "Usuarios obtenidos mediante SQL manual",
      data: result
    });
  } catch (error) {
    next(error);
  }
}

async function listUsersOrm(req, res, next) {
  try {
    const users = await userService.getUsersWithOrm(req.query.nombre);

    res.status(200).json({
      status: "success",
      message: "Usuarios obtenidos mediante Sequelize ORM",
      data: users
    });
  } catch (error) {
    next(error);
  }
}

async function showUserWithOrders(req, res, next) {
  try {
    const user = await userService.getUserWithOrders(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
        data: null
      });
    }

    res.status(200).json({
      status: "success",
      message: "Usuario y pedidos obtenidos correctamente",
      data: user
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      status: "success",
      message: "Usuario creado correctamente",
      data: user
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      message: "Usuario actualizado correctamente",
      data: user
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    await userService.deleteUser(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Usuario eliminado correctamente",
      data: null
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listUsersSql,
  listUsersOrm,
  showUserWithOrders,
  createUser,
  updateUser,
  deleteUser
};
