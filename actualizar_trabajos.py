import os, json, shutil

RUTA_BASE = "/mnt/Tierra/0QuicesIA"
RUTA_PUBLIC = os.path.join(RUTA_BASE, "web-estudiantes", "public", "trabajos")

# Agregamos la carpeta Ondas
GRUPOS =["MecIng", "FisQF", "Campos", "Ondas"]
datos_json = {}

# Limpiar carpeta pública anterior para evitar archivos fantasma
if os.path.exists(RUTA_PUBLIC):
    shutil.rmtree(RUTA_PUBLIC)
os.makedirs(RUTA_PUBLIC)

for grupo in GRUPOS:
    ruta_grupo = os.path.join(RUTA_BASE, grupo)
    datos_json[grupo] = {}
    if os.path.exists(ruta_grupo):
        for actividad in os.listdir(ruta_grupo):
            ruta_actividad = os.path.join(ruta_grupo, actividad)
            if os.path.isdir(ruta_actividad):
                datos_json[grupo][actividad] = {"pdf": None, "htmls":[]}
                ruta_destino_act = os.path.join(RUTA_PUBLIC, grupo, actividad)
                os.makedirs(ruta_destino_act, exist_ok=True)
                
                # Buscar y copiar el PDF
                for arch in os.listdir(ruta_actividad):
                    if arch.endswith(".pdf"):
                        datos_json[grupo][actividad]["pdf"] = arch
                        shutil.copy2(os.path.join(ruta_actividad, arch), os.path.join(ruta_destino_act, arch))
                
                # Buscar y copiar los HTMLs dentro de su subcarpeta
                ruta_htmls = os.path.join(ruta_actividad, "htmls")
                if os.path.exists(ruta_htmls):
                    ruta_destino_htmls = os.path.join(ruta_destino_act, "htmls")
                    os.makedirs(ruta_destino_htmls, exist_ok=True)
                    for arch in os.listdir(ruta_htmls):
                        if arch.endswith(".html"):
                            datos_json[grupo][actividad]["htmls"].append(arch)
                            shutil.copy2(os.path.join(ruta_htmls, arch), os.path.join(ruta_destino_htmls, arch))

with open(os.path.join(RUTA_PUBLIC, "data.json"), "w", encoding="utf-8") as f:
    json.dump(datos_json, f, indent=4)

print("¡Estructura de actividades empaquetada exitosamente!")
