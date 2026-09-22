# Reflexión técnica — Parte 2 / Módulo 7

## Elección de PostgreSQL y `pg`

Elegí PostgreSQL porque es una base de datos relacional robusta y muy utilizada en aplicaciones backend. Para demostrar acceso SQL tradicional se utilizó `pg`, que permite ejecutar consultas parametrizadas.

## Protección de información sensible

Las credenciales se almacenan en `.env`, archivo que está excluido mediante `.gitignore`. El repositorio contiene solamente `.env.example`.

Las contraseñas no se almacenan en texto plano. Se guarda un `passwordHash` generado con bcryptjs y ese campo se excluye de las respuestas de usuarios.

## Actualización de datos

Solo se permiten campos definidos explícitamente: nombre, email y password. Esto evita modificar atributos internos no autorizados.

## Validaciones

Se valida la presencia de campos obligatorios, formato de email, emails duplicados, existencia de registros, montos válidos y estados permitidos.

## SQL tradicional versus ORM

`GET /usuarios` usa SQL manual mediante `pg`.

`GET /usuarios/orm` utiliza Sequelize.

SQL manual ofrece control directo. El ORM reduce código repetitivo y facilita modelos, validaciones, relaciones y transacciones.

## Relación

Se implementó una relación 1:N:

Usuario → muchos Pedidos.

`GET /usuarios/:id/pedidos` utiliza `include` para recuperar el usuario junto a sus pedidos.

## Transacción y rollback

`POST /transacciones/usuario-pedido` crea un usuario y su primer pedido dentro de una transacción.

Con `"forceError": true` se provoca un error de prueba y se ejecuta rollback. Así se demuestra que ninguna operación parcial queda almacenada.

## Aprendizaje

Este módulo permitió evolucionar desde un servidor con rutas a un backend con persistencia real, CRUD, ORM, relaciones y control transaccional.
