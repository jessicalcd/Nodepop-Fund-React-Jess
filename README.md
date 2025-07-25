# Práctica React: Frontend para Nodepop

## Descripción

Aplicación frontend tipo dashboard desarrollada con React para interactuar con una API de anuncios (Nodepop). Permite gestionar usuarios y anuncios. Proyecto realizado como práctica de fundamentos de React.

## Backend

Esta aplicación frontend se conecta a un backend tipo Nodepop que debe estar corriendo localmente, usualmente en `http://localhost:3001`.


## Funcionalidades Principales

  * Autenticación de usuarios: Login, Registro, Logout.
  * Persistencia de sesión con "Recordar contraseña".
  * Visualización de datos del usuario logueado.
  * CRUD de Anuncios:
      * Listado de anuncios.
      * Filtros por nombre, tipo (compra/venta) y tags.
      * Creación de nuevos anuncios (con subida de foto opcional).
      * Vista de detalle de anuncios.
      * Borrado de anuncios con confirmación.
  * Enrutado protegido y página 404.

## Cómo Ejecutar el Frontend

1.  **Clona/Descarga el proyecto.**
2.  **Asegúrate de que el backend esté corriendo** en `http://localhost:3001`.
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).
