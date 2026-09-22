# Evidencias para entregar — Módulo 8

Toma capturas en Postman de:

1. `POST /login` exitoso: debe verse el token JWT.
2. `POST /login` con contraseña incorrecta: debe responder 401.
3. `GET /perfil` SIN token: debe responder 401.
4. `GET /perfil` CON token: debe responder 200.
5. `PUT /usuarios/:id` sin token: debe responder 401.
6. `PUT /usuarios/:id` con Bearer Token: debe funcionar.
7. `DELETE /usuarios/:id` con un usuario de prueba y token.
8. CRUD REST: GET, POST, PUT y DELETE.
9. `POST /upload` con token e imagen válida.
10. `POST /upload` con archivo no permitido: debe devolver error controlado.
11. VS Code mostrando un archivo dentro de `uploads/`.
12. Terminal mostrando PostgreSQL conectado y servidor iniciado.
13. GitHub actualizado con authController, authMiddleware, uploadRoutes y documentación.

No muestres `.env`, contraseña de PostgreSQL ni `JWT_SECRET` en las capturas.
