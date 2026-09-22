// Carga las variables definidas en el archivo .env, si existe.
require("dotenv").config();

const express = require("express");
const path = require("path");

const router = require("./routes/router");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Se usa el puerto definido por variable de entorno.
// Si PORT no existe, la aplicación utiliza 3000 como valor por defecto.
const PORT = process.env.PORT || 3000;

// Middlewares integrados de Express para interpretar JSON y formularios.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Publica los archivos de /public bajo la URL /static.
// Ejemplo: public/styles.css -> http://localhost:3000/static/styles.css
app.use("/static", express.static(path.join(__dirname, "public")));

// Conecta las rutas de la aplicación mediante un router externo.
// Esta estructura facilita agregar nuevas rutas en los módulos 7 y 8.
app.use("/", router);

// Middleware para rutas inexistentes.
app.use(notFound);

// Middleware centralizado para errores inesperados.
app.use(errorHandler);

// Levanta el servidor HTTP.
app.listen(PORT, () => {
  console.log(`Servidor iniciado`);
  console.log(`Aplicación disponible en http://localhost:${PORT}`);
  console.log(`Estado del servidor: http://localhost:${PORT}/status`);
});
