const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 5433),
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false
  }
);

async function connectDatabase() {
  await sequelize.authenticate();
  console.log("Conexión PostgreSQL establecida correctamente");

  require("../models");

  await sequelize.sync();
  console.log("Modelos sincronizados con la base de datos");
}

module.exports = { sequelize, connectDatabase };
