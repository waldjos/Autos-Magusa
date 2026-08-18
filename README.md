# Autos Magusa

Primera versión del sitio web de Autos Magusa basada en el diseño comercial suministrado en PDF.

## Stack

- React
- TypeScript
- Vite
- CSS responsive
- Lucide Icons

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilar para cPanel

```bash
npm run build
```

Vite genera la carpeta `dist/`. Para publicar manualmente en cPanel, sube **el contenido de `dist/`** al directorio público asociado a `autosmagusa.com` (normalmente `public_html/`, según la configuración del dominio).

## Estado de esta V1

Incluye:

- Navegación responsive
- Hero con buscador
- Indicadores comerciales
- Vehículos destacados con filtro
- Historia / quiénes somos
- Asesores
- Reseñas
- Bloque de Instagram
- Agenda de cita (demo frontend)
- Horarios
- Ubicación con mapa embebido
- Promoción de la app
- Footer

## Pendientes para producción

- Reemplazar logo temporal por el arte oficial de Autos Magusa.
- Sustituir fotografías de referencia por fotografías oficiales.
- Configurar URL real de Instagram y WhatsApp.
- Conectar formulario de citas a API PHP + MySQL/correo.
- Crear panel `/admin` para inventario, estados y citas.
