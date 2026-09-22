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
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/", router);
app.use(notFound);
app.use(errorHandler);

async function startServer() {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("Falta JWT_SECRET en el archivo .env");
    }

    await connectDatabase();

    app.listen(PORT, () => {
      console.log("Servidor iniciado");
      console.log(`Inicio: http://localhost:${PORT}`);
      console.log(`Estado: http://localhost:${PORT}/status`);
      console.log(`Login: POST http://localhost:${PORT}/login`);
      console.log(`Perfil protegido: http://localhost:${PORT}/perfil`);
      console.log(`Upload protegido: POST http://localhost:${PORT}/upload`);
    });
  } catch (error) {
    console.error("No fue posible iniciar el servidor:", error.message);
    process.exit(1);
  }
}

startServer();
