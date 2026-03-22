#!/bin/bash
echo "1. Empaquetando nuevos trabajos y PDFs con Python..."
python3 actualizar_trabajos.py

echo "2. Guardando el código fuente en GitHub..."
git add .
git commit -m "Actualización de trabajos: $(date +'%Y-%m-%d')"
git push origin main

echo "3. Desplegando la página web en producción..."
cd web-estudiantes
npm run deploy

echo "¡Sitio web actualizado exitosamente!"
