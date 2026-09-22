# Pasos de instalación — Windows

## 1. Programas que necesitas

Ya deberías tener:
- Node.js 18 o superior
- VS Code
- Git

Para este módulo instala además:

### PostgreSQL
Descarga e instala PostgreSQL para Windows.

Durante la instalación:
- deja seleccionado PostgreSQL Server;
- deja seleccionado pgAdmin 4;
- usa el puerto 5432;
- crea una contraseña para el usuario `postgres`;
- guarda esa contraseña porque la necesitarás en `.env`.

### Postman
Instala Postman para probar GET, POST, PUT y DELETE.

## 2. Copiar archivos

Usa estos archivos para actualizar tu carpeta local del mismo repositorio:

`node-express-user-app`

No crees un repositorio nuevo.

## 3. Crear la base de datos

Abre pgAdmin 4.

Conecta al servidor PostgreSQL y abre:

Databases → postgres → Query Tool

Ejecuta:

```sql
CREATE DATABASE node_express_app;
```

## 4. Crear `.env`

En VS Code crea un archivo llamado exactamente:

`.env`

Contenido:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=node_express_app
DB_USER=postgres
DB_PASSWORD=TU_PASSWORD
DB_DIALECT=postgres
```

Reemplaza `TU_PASSWORD` por la contraseña que elegiste al instalar PostgreSQL.

## 5. Instalar dependencias

Dentro de la carpeta del proyecto:

```powershell
npm install
```

## 6. Ejecutar

```powershell
npm run dev
```

Debes ver:

```text
Conexión PostgreSQL establecida correctamente
Modelos sincronizados con la base de datos
Servidor iniciado
```

## 7. Datos de prueba

Abre otra terminal y ejecuta:

```powershell
npm run seed
```

Debe indicar:

```text
Seed completado: 3 usuarios y 3 pedidos creados.
```

## 8. Importar colección de Postman

En Postman:
- Import
- selecciona `docs/Modulo7.postman_collection.json`

Las solicitudes quedarán preparadas.

## 9. Subir cambios a GitHub

Desde la misma carpeta:

```powershell
git add .
git commit -m "Add PostgreSQL database and Sequelize models"
git push
```

Después de probar CRUD y transacciones puedes hacer otro commit:

```powershell
git add .
git commit -m "Add CRUD relationships and transaction handling"
git push
```
