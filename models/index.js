const User = require("./User");
const Order = require("./Order");

User.hasMany(Order, {
  foreignKey: { name: "userId", allowNull: false },
  as: "pedidos",
  onDelete: "CASCADE"
});

Order.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  as: "usuario"
});

module.exports = { User, Order };
