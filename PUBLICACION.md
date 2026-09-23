# Reemplazar el sitio existente de GitHub Pages

Destino: `https://github.com/jdmarinj1/sistemas-distribucion`.

1. Trabajar sobre un clon actualizado del repositorio y guardar su revisión actual mediante una etiqueta o rama de respaldo. No eliminar el historial.
2. Crear una rama de actualización. Copiar **el contenido** del paquete `curso-distribucion-reemplazo-github.zip` en la raíz del repositorio, incluyendo `.github` y `.nojekyll`. No copiar la carpeta contenedora como un subdirectorio.
3. Conservar archivos propios del repositorio que no pertenezcan al curso y no sobrescribir una configuración de publicación distinta sin revisarla. El paquete no incluye `.git`, credenciales ni los PDFs privados suministrados.
4. Ejecutar `node --test tests/*.test.cjs`. Servir localmente con `python3 -m http.server 8765 --bind 127.0.0.1` y revisar las páginas de entrada.
5. Revisar y fusionar la actualización. Si Pages usa despliegue por rama, mantener `main` y `/(root)` como origen. Si ya usa un workflow propio, conservarlo; `checks.yml` solo ejecuta pruebas, no publica.
6. Tras el despliegue verificar `index.html#cap1`, `material-interactivo.html#cap1`, `material-interactivo.html#factores`, `simulador.html`, `diseno.html` y `ejemplos.html` bajo `/sistemas-distribucion/`. Probar ES/EN, ejercicios, calculadoras, escenas y descargas.
7. Para revertir, revertir el commit de actualización o restaurar los archivos desde el respaldo y volver a desplegar. No es necesario cambiar la URL del curso.

No se requiere npm, compilación, API ni servidor de aplicaciones. Three.js r128 y Ancízar Sans se sirven localmente. El material histórico de `archivo/` mantiene sus dependencias externas.
