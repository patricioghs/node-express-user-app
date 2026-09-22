# Node & Express Web App — Proyecto integrador final

**Autor:** Jonathan Patricio García-Huidobro Sandoval  
**Curso:** Desarrollo de Aplicaciones Full Stack JavaScript Trainee  
**Etapa:** Módulo 8 — API RESTful segura

## Resumen

Este repositorio integra el trabajo realizado en los módulos 6, 7 y 8.

### Módulo 6
- Node.js y Express.
- Rutas y controladores.
- Archivos estáticos.
- Persistencia básica en logs.

### Módulo 7
- PostgreSQL.
- SQL con `pg`.
- Sequelize ORM.
- CRUD.
- Relaciones.
- Transacciones y rollback.

### Módulo 8
- API RESTful.
- Login con JWT.
- Middleware de autenticación.
- Rutas protegidas.
- Subida de archivos con multer.
- Validación de tipo y tamaño.
- Respuestas API consistentes.

## Stack

- Node.js 18+
- Express.js
- PostgreSQL
- Sequelize
- pg
- bcryptjs
- jsonwebtoken
- multer
- dotenv
- nodemon

## Instalación

```bash
npm install
```

Crea `.env` basándote en `.env.example`.

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5433
DB_NAME=node_express_app
DB_USER=postgres
DB_PASSWORD=TU_PASSWORD
DB_DIALECT=postgres

JWT_SECRET=UNA_CLAVE_LARGA_Y_PRIVADA
JWT_EXPIRES_IN=1h
```

Ejecuta:

```bash
npm run dev
```

## Autenticación

### POST /login

```json
{
  "email": "juan@example.com",
  "password": "Demo1234"
}
```

Luego envía el token en rutas protegidas:

```text
Authorization: Bearer TOKEN
```

## Endpoints principales

| Método | Ruta | JWT |
|---|---|---|
| GET | `/status` | No |
| POST | `/login` | No |
| GET | `/perfil` | Sí |
| GET | `/usuarios` | No |
| GET | `/usuarios/orm` | No |
| POST | `/usuarios` | No |
| PUT | `/usuarios/:id` | Sí |
| DELETE | `/usuarios/:id` | Sí |
| GET | `/usuarios/:id/pedidos` | No |
| GET | `/pedidos` | No |
| POST | `/pedidos` | Sí |
| PUT | `/pedidos/:id` | Sí |
| DELETE | `/pedidos/:id` | Sí |
| POST | `/transacciones/usuario-pedido` | Sí |
| POST | `/upload` | Sí |

## Subida de archivos

Endpoint:

```text
POST /upload
```

En Postman:

1. Authorization → Bearer Token.
2. Body → form-data.
3. Key: `archivo`.
4. Tipo: File.
5. Selecciona JPG, PNG o WEBP.

Tamaño máximo: **2 MB**.

## Seguridad

- `.env` no se versiona.
- Las contraseñas usan hash bcrypt.
- Las rutas sensibles usan JWT.
- Tokens inválidos o expirados devuelven HTTP 401.
- Los uploads validan MIME type y tamaño.

## Formato de respuestas

Éxito:

```json
{
  "status": "success",
  "message": "Operación realizada",
  "data": {}
}
```

Error:

```json
{
  "status": "error",
  "message": "Descripción del problema",
  "data": null
}
```

## Documentación adicional

- `docs/API_ENDPOINTS.md`
- `docs/PASOS_INSTALACION_MODULO8.md`
- `docs/GUIA_EVIDENCIAS_MODULO8.md`
- `docs/REFLEXION_TECNICA_MODULO8.md`
- `docs/openapi.json`
- `docs/Modulo8.postman_collection.json`

## Evolución

El proyecto evolucionó desde un servidor Express básico a un backend conectado a PostgreSQL y finalmente a una API RESTful con autenticación y manejo de archivos.
