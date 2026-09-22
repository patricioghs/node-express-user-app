require("dotenv").config();

const express = require("express");
const path = require("path");

const router = require("./routes/router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const { connectDatabase } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conserva el contenido estático implementado en el Módulo 6.
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", router);

app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log("Servidor iniciado");
      console.log(`Inicio: http://localhost:${PORT}`);
      console.log(`Estado: http://localhost:${PORT}/status`);
      console.log(`Usuarios SQL: http://localhost:${PORT}/usuarios`);
      console.log(`Usuarios ORM: http://localhost:${PORT}/usuarios/orm`);
    });
  } catch (error) {
    console.error("No fue posible iniciar el servidor:", error.message);
    process.exit(1);
  }
}

startServer();
