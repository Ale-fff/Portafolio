# Mi Portafolio

Portafolio personal creado con Next.js y Tailwind CSS, optimizado para despliegue en Vercel.

## 🚀 Inicio rápido

### Desarrollo local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en navegador:**
   - Local: http://localhost:3000
   - Network: http://192.168.1.162:3000 (desde otros dispositivos en la red)

El servidor se recarga automáticamente cuando guardas cambios en los archivos.

## 🛠️ Scripts disponibles

- `npm run dev` - Servidor de desarrollo con hot reload
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar linter de código

## 📦 Despliegue

### En Vercel

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente la configuración de Next.js
3. El despliegue se realizará automáticamente

### En GitHub Pages

```bash
# Construir la aplicación
npm run build

# Exportar para páginas estáticas (opcional)
npm run export
```

## 📁 Estructura del proyecto

```
portafolio/
├── pages/
│   ├── _app.js          # Configuración global de la app
│   └── index.js         # Página principal
├── styles/
│   └── globals.css      # Estilos globales con Tailwind
├── public/              # Archivos estáticos
├── package.json         # Dependencias y scripts
├── next.config.js       # Configuración de Next.js
├── tailwind.config.js   # Configuración de Tailwind CSS
└── postcss.config.js    # Configuración de PostCSS
```

## 🎨 Personalización

1. **Información personal**: Edita el archivo `pages/index.js` para actualizar:
   - Tu nombre en la sección hero
   - La descripción sobre ti
   - Información de contacto

2. **Proyectos**: Modifica la sección de proyectos para incluir:
   - Tus trabajos reales
   - Enlaces a repositorios o demos
   - Tecnologías utilizadas

3. **Estilos**: Personaliza los colores y diseño editando:
   - `tailwind.config.js` para colores del tema
   - `styles/globals.css` para estilos adicionales

## 📄 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🌐 Despliegue en producción

Este portafolio está optimizado para Vercel, pero también puede desplegarse en:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Railway**
- **Heroku**

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
