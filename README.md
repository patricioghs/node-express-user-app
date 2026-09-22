# Node & Express Web App — Módulo 6

**Autor:** Jonathan Patricio García-Huidobro Sandoval  
**Curso:** Desarrollo de Aplicaciones Full Stack JavaScript Trainee  
**Proyecto integrador:** Módulos 6, 7 y 8

## 1. Descripción

Esta aplicación corresponde a la primera etapa del proyecto integrador backend.  
El objetivo del Módulo 6 es construir una base sólida utilizando **Node.js y Express**, dejando el proyecto preparado para incorporar base de datos, ORM, autenticación JWT y una API RESTful en los módulos siguientes.

En esta etapa se implementaron:

- Servidor Node.js con Express.
- Arquitectura modular.
- Ruta HTML `GET /`.
- Ruta JSON `GET /status`.
- Archivos estáticos mediante `express.static()`.
- Registro de accesos en un archivo plano utilizando `fs.appendFile()`.
- Variables de entorno mediante `dotenv`.
- Scripts `npm start` y `npm run dev`.
- Middlewares para registro, 404 y manejo de errores.
- Router externo conectado mediante `app.use()`.

---

## 2. ¿Qué es Node.js?

Node.js es un entorno de ejecución que permite utilizar JavaScript fuera del navegador.  
Es especialmente útil en aplicaciones backend porque trabaja con un modelo de entrada/salida no bloqueante y cuenta con el ecosistema de paquetes de npm.

En este proyecto Node.js se utiliza para ejecutar el servidor y acceder a funcionalidades del sistema, como el módulo `fs` para trabajar con archivos.

## 3. ¿Qué aporta Express?

Aunque Node.js permite crear un servidor HTTP sin frameworks, Express simplifica tareas frecuentes del desarrollo backend, como:

- Definición de rutas.
- Uso de middlewares.
- Manejo de solicitudes y respuestas HTTP.
- Publicación de archivos estáticos.
- Separación de responsabilidades mediante routers y controladores.

Por esta razón se utilizó Express para mantener el proyecto simple, modular y preparado para crecer.

---

## 4. Flujo servidor–cliente

```text
Cliente / Navegador
        |
        |  GET /
        v
Servidor Express
        |
        v
Router
        |
        +----> Middleware accessLogger
        |           |
        |           +----> fs.appendFile()
        |                     |
        |                     v
        |                logs/log.txt
        |
        v
Controlador
        |
        v
Respuesta HTML o JSON
        |
        v
Cliente / Navegador
```

---

## 5. Stack técnico

| Elemento | Tecnología |
|---|---|
| Entorno | Node.js 18+ |
| Framework | Express.js |
| Variables de entorno | dotenv |
| Desarrollo | nodemon |
| Archivos planos | módulo nativo `fs` |
| Frontend básico | HTML + CSS |
| Versionamiento | Git / GitHub |

---

## 6. Estructura del proyecto

```text
node-express-user-app/
│
├── controllers/
│   └── homeController.js
│
├── routes/
│   └── router.js
│
├── middlewares/
│   ├── accessLogger.js
│   ├── errorHandler.js
│   └── notFound.js
│
├── services/
│   └── logService.js
│
├── public/
│   ├── index.html
│   └── styles.css
│
├── logs/
│   └── log.txt
│
├── docs/
│   ├── REFLEXION_TECNICA.md
│   └── GUIA_EVIDENCIAS.md
│
├── .env.example
├── .gitignore
├── app.js
├── package.json
└── README.md
```

La consigna solicita al menos cinco carpetas bien nombradas. En este proyecto se utilizaron `routes`, `controllers`, `middlewares`, `services`, `public`, `logs` y `docs`.

---

## 7. ¿Por qué se eligió `app.js`?

Se eligió `app.js` porque representa claramente el punto de entrada de la aplicación Express.  
Además, permite mantener una convención simple para futuras etapas del proyecto, cuando se agreguen modelos, base de datos, autenticación y nuevas rutas.

---

## 8. Instalación

### Requisitos

- Node.js versión 18 o superior.
- npm.
- Git, si se desea clonar el repositorio.

### Pasos

1. Clonar o descargar el repositorio.

2. Entrar a la carpeta:

```bash
cd node-express-user-app
```

3. Instalar dependencias:

```bash
npm install
```

4. Opcionalmente, crear un archivo `.env` copiando `.env.example`:

```env
PORT=3000
```

5. Ejecutar en modo desarrollo:

```bash
npm run dev
```

o ejecutar normalmente:

```bash
npm start
```

---

## 9. Scripts

### `npm start`

Ejecuta:

```bash
node app.js
```

Se utiliza para iniciar la aplicación de manera normal.

### `npm run dev`

Ejecuta:

```bash
nodemon app.js
```

Se utiliza durante el desarrollo porque nodemon reinicia automáticamente el servidor cuando detecta cambios en los archivos.

---

## 10. Rutas disponibles

### `GET /`

Devuelve una página HTML.

Abrir:

```text
http://localhost:3000/
```

### `GET /status`

Devuelve una respuesta JSON:

```json
{
  "status": "ok",
  "message": "Servidor funcionando correctamente",
  "timestamp": "..."
}
```

Abrir:

```text
http://localhost:3000/status
```

---

## 11. Contenido estático

La carpeta `public` contiene recursos que pueden ser servidos por Express.

En `app.js` se configuró:

```javascript
app.use("/static", express.static(path.join(__dirname, "public")));
```

De esta forma, por ejemplo:

```text
public/styles.css
```

queda disponible en:

```text
http://localhost:3000/static/styles.css
```

---

## 12. Persistencia en archivos planos

Cada acceso a `/` o `/status` pasa por el middleware `accessLogger`.

El servicio de logs utiliza:

```javascript
fs.appendFile()
```

para agregar una línea a:

```text
logs/log.txt
```

Ejemplo:

```text
21-09-2026 - 21:35:10 - GET /
21-09-2026 - 21:35:14 - GET /status
21-09-2026 - 21:35:19 - GET /
```

Para cumplir la evidencia de la evaluación, basta visitar las rutas al menos tres veces y luego abrir `logs/log.txt`.

---

## 13. Variables de entorno

Se incorporó `dotenv` para preparar el proyecto para configuraciones que no deberían quedar escritas directamente en el código.

Ejemplo:

```env
PORT=3000
```

Si no existe un archivo `.env`, el servidor utiliza el puerto `3000` por defecto.

El archivo `.env` está incluido en `.gitignore` para evitar publicar configuraciones privadas.

---

## 14. Decisiones técnicas

### Arquitectura modular

Se separaron rutas, controladores, middlewares y servicios para evitar concentrar toda la lógica en `app.js`.

Esto mejora:

- legibilidad;
- mantenimiento;
- escalabilidad;
- reutilización;
- preparación para los módulos 7 y 8.

### Router externo

Se implementó `routes/router.js` y se conecta con:

```javascript
app.use("/", router);
```

Esta decisión corresponde además a una de las tareas PLUS sugeridas por la consigna.

---

## 15. Proyección para los módulos 7 y 8

La estructura actual permitirá agregar posteriormente:

### Módulo 7
- PostgreSQL o MongoDB.
- Sequelize o Mongoose.
- Modelos.
- Relaciones entre entidades.
- Operaciones CRUD.
- Filtros y búsquedas.

### Módulo 8
- API RESTful.
- Registro y login.
- JSON Web Tokens.
- Rutas públicas y privadas.
- Subida y validación de archivos.
- Respuestas API consistentes.

---

## 16. Reflexión

Esta primera etapa permitió comprender cómo construir y organizar un servidor backend utilizando Node.js y Express.

Uno de los aprendizajes principales fue entender que el funcionamiento del servidor es solo una parte del desarrollo: la estructura de carpetas, separación de responsabilidades, documentación y manejo de configuración son elementos importantes para que una aplicación pueda mantenerse y crecer.

La utilización de un router, controladores, middlewares y servicios deja una base preparada para integrar persistencia real y mecanismos de seguridad en las siguientes etapas del proyecto.
