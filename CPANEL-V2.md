# Autos Magusa — cPanel V2

Esta fase convierte la landing inicial en un catálogo administrable compatible con el hosting cPanel actual, sin Node.js en producción.

## Arquitectura de producción

- Frontend público: HTML + CSS + JavaScript.
- Backend: PHP 8 + PDO.
- Base de datos: MySQL de cPanel.
- Inventario: API `/api/vehicles.php`.
- Ficha de vehículo: `/vehiculo.html?id=...`.
- Administración: `/admin/`.
- Fotografías: `/uploads/vehicles/`.
- WhatsApp comercial: `+58 422-6233830`.
- Instagram: `@autosmagusa`.

## Funciones V2 preparadas

- Búsqueda por marca, modelo, año, tipo, transmisión y características.
- Segmentación automática por tipo de vehículo y marca a partir del inventario.
- Tarjetas de inventario con estado, precio, kilometraje y transmisión.
- Ficha individual con galería, descripción, características y observaciones.
- Panel administrador para crear, editar y eliminar vehículos.
- Campos: marca, modelo, versión, año, tipo, condición, precio, moneda, kilómetros, transmisión, combustible, color, motor, tracción, puertas, descripción, características, observaciones, estado y destacado.
- Carga múltiple de fotografías JPG/PNG/WEBP.
- Estados `Disponible`, `Reservado`, `Vendido` y `Oculto`.
- Instalador `/admin/setup.php` para conectar la base MySQL y crear el acceso administrador.
- Contraseña con `password_hash`, CSRF y consultas preparadas con PDO.
- Configuración MySQL guardada fuera de `public_html` cuando se utiliza la estructura detectada del hosting.

## Inventario de referencia

Antes de configurar MySQL, la V2 puede mostrar modelos Chery únicamente como referencias visuales para probar buscador, filtros y fichas. No deben interpretarse como stock confirmado de Autos Magusa. En cuanto el administrador carga vehículos reales, el catálogo utiliza exclusivamente la base de datos.

## Despliegue

El paquete de despliegue incluye además imágenes de marca, asesores y local suministradas durante el desarrollo. Debe extraerse directamente en `public_html`, reemplazando `index.html` y `.htaccess`, manteniendo el respaldo existente de WordPress hasta validar la nueva versión.
