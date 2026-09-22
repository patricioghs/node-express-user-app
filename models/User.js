const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: { notEmpty: true, len: [2, 100] }
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  },
  {
    tableName: "usuarios",
    timestamps: true
  }
);

module.exports = User;
