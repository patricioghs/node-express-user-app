# Node & Express Web App — Módulo 7

**Autor:** Jonathan Patricio García-Huidobro Sandoval  
**Curso:** Desarrollo de Aplicaciones Full Stack JavaScript Trainee

Este proyecto continúa la aplicación iniciada en el Módulo 6.

## Funcionalidades agregadas en el Módulo 7

- PostgreSQL como base de datos relacional.
- Cliente SQL `pg`.
- Sequelize ORM.
- Modelos `User` y `Order`.
- Relación 1:N Usuario → Pedidos.
- CRUD de usuarios.
- CRUD de pedidos.
- Consulta SQL manual y consulta ORM.
- Filtro por nombre y paginación.
- Transacciones con rollback.
- Validaciones y manejo de errores.
- Credenciales almacenadas en `.env`.
- Contraseñas almacenadas como hash.

## Instalación rápida

```bash
npm install
```

Crea `.env` a partir de `.env.example`.

Crea en PostgreSQL:

```sql
CREATE DATABASE node_express_app;
```

Ejecuta:

```bash
npm run dev
```

Luego, en otra terminal:

```bash
npm run seed
```

## Rutas principales

### SQL manual

```http
GET /usuarios
GET /usuarios?nombre=Juan
GET /usuarios?page=1&limit=10
```

### Sequelize ORM

```http
GET /usuarios/orm
```

### CRUD usuarios

```http
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id
```

Ejemplo POST:

```json
{
  "nombre": "Ana Torres",
  "email": "ana.torres@example.com",
  "password": "Clave1234"
}
```

### CRUD pedidos

```http
GET    /pedidos
POST   /pedidos
PUT    /pedidos/:id
DELETE /pedidos/:id
```

Ejemplo POST:

```json
{
  "userId": 1,
  "descripcion": "Nuevo pedido",
  "total": 15000,
  "estado": "pendiente"
}
```

### Relación

```http
GET /usuarios/1/pedidos
```

Esta ruta usa `include` de Sequelize.

### Transacción

```http
POST /transacciones/usuario-pedido
```

Ejemplo exitoso:

```json
{
  "nombre": "Usuario Transaccion",
  "email": "transaccion.ok@example.com",
  "password": "Clave1234",
  "descripcion": "Primer pedido",
  "total": 19990,
  "forceError": false
}
```

Para demostrar rollback usa otro email y:

```json
{
  "nombre": "Usuario Rollback",
  "email": "rollback@example.com",
  "password": "Clave1234",
  "descripcion": "Pedido no persistido",
  "total": 9990,
  "forceError": true
}
```

## SQL manual vs ORM

`GET /usuarios` utiliza SQL parametrizado con `pg`.

`GET /usuarios/orm` utiliza Sequelize.

El primer enfoque permite ver directamente la consulta SQL. El ORM permite trabajar con modelos, validaciones, asociaciones y transacciones con menos código repetitivo.

## Seguridad

`.env` está incluido en `.gitignore`, por lo que las credenciales de PostgreSQL no deben subirse a GitHub.

Las contraseñas se transforman en hash con bcryptjs y `passwordHash` se excluye de las respuestas.

## Documentación

Consulta:

- `docs/PASOS_INSTALACION_WINDOWS.md`
- `docs/GUIA_EVIDENCIAS_MODULO7.md`
- `docs/REFLEXION_TECNICA_MODULO7.md`
- `docs/Modulo7.postman_collection.json`
