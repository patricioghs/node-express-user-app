require("dotenv").config();

const bcrypt = require("bcryptjs");
const { sequelize } = require("../config/database");
const { User, Order } = require("../models");

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });

    const count = await User.count();

    if (count > 0) {
      console.log("La base de datos ya contiene usuarios. Seed cancelado.");
      console.log("Si conservaste el seed original, usa juan@example.com / Demo1234");
      return;
    }

    const passwordHash = await bcrypt.hash("Demo1234", 10);

    const users = await User.bulkCreate([
      { nombre: "Juan Pérez", email: "juan@example.com", passwordHash },
      { nombre: "María Soto", email: "maria@example.com", passwordHash },
      { nombre: "Carlos Díaz", email: "carlos@example.com", passwordHash }
    ]);

    await Order.bulkCreate([
      { userId: users[0].id, descripcion: "Pedido de prueba A", total: 15990, estado: "pagado" },
      { userId: users[0].id, descripcion: "Pedido de prueba B", total: 8500, estado: "pendiente" },
      { userId: users[1].id, descripcion: "Pedido de prueba C", total: 24990, estado: "pendiente" }
    ]);

    console.log("Seed completado: 3 usuarios y 3 pedidos creados.");
    console.log("Login de prueba: juan@example.com / Demo1234");
  } catch (error) {
    console.error("Error ejecutando seed:", error.message);
  } finally {
    await sequelize.close();
  }
}

seed();
