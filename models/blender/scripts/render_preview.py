import bpy
import math

# Charger le fichier blend
bpy.ops.wm.open_mainfile(filepath="models/blender/audi80_b3_carrosserie.blend")

# Ajouter une caméra en vue 3/4 avant surélevée
cam_data = bpy.data.cameras.new("Cam_Preview")
cam_obj = bpy.data.objects.new("Cam_Preview", cam_data)
bpy.context.scene.collection.objects.link(cam_obj)

cam_obj.location = (4.8, 4.5, 2.6)
cam_obj.rotation_euler = (math.radians(65), 0, math.radians(135))
bpy.context.scene.camera = cam_obj

# Ajouter une lumière Soleil
sun_data = bpy.data.lights.new(name="Sun_Light", type='SUN')
sun_data.energy = 3.5
sun_obj = bpy.data.objects.new(name="Sun_Light", object_data=sun_data)
bpy.context.scene.collection.objects.link(sun_obj)
sun_obj.rotation_euler = (math.radians(45), math.radians(30), math.radians(45))

# Configurer le moteur de rendu EEVEE ou Workbench rapide
bpy.context.scene.render.engine = 'BLENDER_EEVEE'
bpy.context.scene.render.resolution_x = 960
bpy.context.scene.render.resolution_y = 540
bpy.context.scene.render.filepath = "models/blender/preview_carrosserie_step1.png"

# Rendu de l'image
bpy.ops.render.render(write_still=True)
print("Rendu aperçu généré dans models/blender/preview_carrosserie_step1.png")
