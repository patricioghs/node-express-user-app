# Pasos de instalación y ejecución — Módulo 8

## 1. Continúa usando el mismo proyecto

No reinstales PostgreSQL ni crees otra base.

Continúa con:

- Base: `node_express_app`
- PostgreSQL: puerto 5433
- Repositorio: `node-express-user-app`

## 2. Copia los archivos

Copia el contenido del ZIP sobre la misma carpeta local del Módulo 7.

Conserva:
- `.git/`
- tu archivo `.env`

## 3. Actualiza `.env`

Agrega:

```env
JWT_SECRET=una_clave_larga_y_privada
JWT_EXPIRES_IN=1h
```

Ejemplo completo:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5433
DB_NAME=node_express_app
DB_USER=postgres
DB_PASSWORD=TU_PASSWORD
DB_DIALECT=postgres

JWT_SECRET=TU_CLAVE_SECRETA
JWT_EXPIRES_IN=1h
```

## 4. Instala dependencias

```powershell
npm install
```

Esto agrega `jsonwebtoken` y `multer`.

## 5. Ejecuta

```powershell
npm run dev
```

## 6. Login de prueba

Si conservas los usuarios del seed del Módulo 7:

```json
{
  "email": "juan@example.com",
  "password": "Demo1234"
}
```

Si ese usuario fue modificado o eliminado, crea otro con `POST /usuarios` y usa esas credenciales.

## 7. Bearer Token

En Postman:

Authorization → Auth Type → Bearer Token

Pega el token entregado por `/login`.

## 8. Upload

POST:

`http://localhost:3000/upload`

Body → form-data

Campo:
- Key: `archivo`
- Tipo: File
- JPG, PNG o WEBP
- Menor a 2 MB

## 9. GitHub

```powershell
git add .
git commit -m "Add JWT authentication and protected routes"
git push
```

Después de completar uploads y documentación:

```powershell
git add .
git commit -m "Add file uploads and finalize REST API"
git push
```
