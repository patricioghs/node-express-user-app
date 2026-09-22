# Evidencias que debes subir a la plataforma

Toma capturas de:

1. Terminal con `npm run dev` mostrando:
   - Conexión PostgreSQL establecida correctamente
   - Modelos sincronizados con la base de datos
   - Servidor iniciado

2. Terminal con `npm run seed` mostrando:
   - Seed completado: 3 usuarios y 3 pedidos creados.

3. Postman:
   - GET `http://localhost:3000/usuarios`
   - GET `http://localhost:3000/usuarios?nombre=Juan`
   - GET `http://localhost:3000/usuarios/orm`
   - POST `http://localhost:3000/usuarios`
   - PUT `http://localhost:3000/usuarios/1`
   - DELETE de un usuario de prueba
   - GET `http://localhost:3000/usuarios/1/pedidos`
   - GET `http://localhost:3000/pedidos`

4. Transacción exitosa:
   POST `http://localhost:3000/transacciones/usuario-pedido`

5. Rollback:
   mismo endpoint con `"forceError": true`.
   Captura también la terminal con `Rollback ejecutado`.

6. VS Code mostrando:
   - models/
   - config/
   - services/
   - routes/
   - controllers/

7. GitHub con el repositorio actualizado.
