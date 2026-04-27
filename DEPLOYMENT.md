# 🚀 Guía de Despliegue - GitHub + Vercel

## Paso 1: Subir a GitHub

1. Crea un nuevo repositorio en GitHub (github.com/new)
2. Copia la URL del repositorio
3. Ejecuta estos comandos:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir el código
git push -u origin master
```

## Paso 2: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) y regístrate/inicia sesión
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configura el dominio (opcional) y haz clic en "Deploy"

## Paso 3: Personalizar tu portafolio

Edita estos archivos para personalizar tu portafolio:

- **`pages/index.js`**: Contenido principal, proyectos, información personal
- **`styles/globals.css`**: Estilos adicionales
- **`tailwind.config.js`**: Tema y colores

## ✅ Tu portafolio estará listo en minutos

Después del despliegue, Vercel te dará una URL como:
`https://tu-portafolio.vercel.app`

¡Comparte tu portafolio con el mundo! 🎉