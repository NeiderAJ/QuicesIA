# Proyecto IA en el Aula - Evaluaciones Interactivas

Este repositorio aloja la pagina web (React+Vite) del Prof. Neider Jimenez para exhibir las simulaciones fisicas (HTML) creadas por estudiantes universitarios usando Inteligencia Artificial.

## Estructura Obligatoria de Archivos

Para agregar nuevos trabajos, debes respetar exactamente esta jerarquia en la raiz del proyecto local:

    /QuicesIA_html_19Marzo_26/
    ├── Materia/                <-- Ej: MecIng, Ondas, FisQF, Campos
    │   └── Nombre_Actividad/   <-- Ej: domohierro2026, difraccion
    │       ├── enunciado.pdf   <-- (Opcional) Un unico PDF con el resumen o guia
    │       └── htmls/          <-- Carpeta obligatoria para alojar los trabajos
    │           ├── juan_perez.html
    │           └── ana_gomez.html

Nota: Para agregar una actividad donde solo hay un PDF (ej: PitchElevator), simplemente omite la carpeta htmls/.

## Como Actualizar la Web (Un solo comando)

Cuando finalice una evaluacion y tengas los nuevos archivos:

1. Coloca los .html y el .pdf en la estructura de carpetas mencionada arriba.
2. Abre la terminal en Visual Studio Code en la ruta del proyecto.
3. Ejecuta el script automatizador:

    ./actualizar.sh

El script se encargara de:
- Leer las carpetas con Python y generar el indice (data.json).
- Guardar una copia de seguridad del codigo en la rama main de GitHub.
- Compilar y publicar la pagina web a produccion en GitHub Pages.

## Mantenimiento y Soporte IA

La arquitectura modular y automatizada de este proyecto fue disenada por DevQuicesIA. 
Si en el futuro requieres agregar una nueva materia principal o alterar la estructura subyacente, retoma la conversacion en el chat original llamado: 
"Agente Para crear Quices IA github".
