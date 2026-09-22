# Reflexión técnica — Parte 3 / Módulo 8

## Diseño REST

La API utiliza recursos expresados mediante sustantivos, como `/usuarios` y `/pedidos`, y aplica los métodos HTTP según la acción:

- GET para consultar.
- POST para crear.
- PUT para modificar.
- DELETE para eliminar.

Los controladores gestionan solicitudes y respuestas, mientras los servicios concentran lógica de negocio y acceso a datos.

## Validaciones

Antes de crear o modificar datos se validan campos obligatorios, formato de email, existencia de registros, duplicados, valores de pedidos y estados permitidos.

Las respuestas mantienen la estructura:

```json
{
  "status": "success",
  "message": "...",
  "data": {}
}
```

## JWT

`POST /login` compara la contraseña utilizando bcrypt y, si es correcta, genera un JSON Web Token.

El token se envía luego mediante:

`Authorization: Bearer TOKEN`

Se protegen las operaciones que modifican o eliminan información, el perfil autenticado, las transacciones sensibles y la subida de archivos.

El token no se almacena en la base de datos en este ejercicio; el cliente lo mantiene durante su sesión.

## Rutas protegidas

Entre las rutas protegidas se encuentran:

- GET `/perfil`
- PUT `/usuarios/:id`
- DELETE `/usuarios/:id`
- POST `/pedidos`
- POST `/upload`

Sin token responden HTTP 401.

## Subida de archivos

Se utilizó multer con almacenamiento en disco.

Se aceptan JPG/JPEG, PNG y WEBP, con máximo de 2 MB.

Los archivos se almacenan en `/uploads`.

## Evolución del proyecto

El Módulo 6 creó el servidor y la arquitectura modular.

El Módulo 7 incorporó PostgreSQL, Sequelize, CRUD, relaciones y transacciones.

El Módulo 8 consolidó estas funcionalidades en una API RESTful con autenticación JWT, seguridad de rutas y manejo controlado de archivos.

## Aprendizaje final

El proyecto demuestra el ciclo completo de un backend: servidor, rutas, persistencia, modelos, relaciones, validaciones, transacciones, autenticación y exposición de recursos mediante una API.
