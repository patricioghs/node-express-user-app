# Endpoints de la API

| Método | Endpoint | JWT | Descripción |
|---|---|---|---|
| GET | `/status` | No | Estado del servidor |
| POST | `/login` | No | Obtener JWT |
| GET | `/perfil` | Sí | Perfil autenticado |
| GET | `/usuarios` | No | Listar usuarios con SQL manual |
| GET | `/usuarios/orm` | No | Listar usuarios con Sequelize |
| POST | `/usuarios` | No | Registrar usuario |
| PUT | `/usuarios/:id` | Sí | Actualizar usuario |
| DELETE | `/usuarios/:id` | Sí | Eliminar usuario |
| GET | `/usuarios/:id/pedidos` | No | Usuario con pedidos |
| GET | `/pedidos` | No | Listar pedidos |
| POST | `/pedidos` | Sí | Crear pedido |
| PUT | `/pedidos/:id` | Sí | Actualizar pedido |
| DELETE | `/pedidos/:id` | Sí | Eliminar pedido |
| POST | `/transacciones/usuario-pedido` | Sí | Transacción usuario + pedido |
| POST | `/upload` | Sí | Subir imagen |
