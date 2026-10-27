import bpy
import os

models = [
    ("Modèle 1 (BeamNG DAE)", r"models\modeles telecharges\audi-80-b3-1986-1991\source\unzipped\vehicles\Audi 80\pessima.dae", "dae"),
    ("Modèle 2 (Audi 80 II GLB)", r"models\modeles telecharges\audi-80-ii\source\Audi 80 II.glb", "glb"),
    ("Modèle 3 (Audi 80 LowPoly FBX)", r"models\modeles telecharges\audi-80-lowpoly\source\Audi_80.fbx", "fbx")
]

for name, path, fmt in models:
    print("=" * 60)
    print(f"ANALYSE : {name}")
    print(f"Fichier : {path}")
    if not os.path.exists(path):
        print("FICHIER INTROUVABLE")
        continue

    # Réinitialiser la scène
    bpy.ops.wm.read_factory_settings(use_empty=True)

    try:
        if fmt == "dae":
            bpy.ops.wm.collada_import(filepath=path)
        elif fmt == "glb":
            bpy.ops.import_scene.gltf(filepath=path)
        elif fmt == "fbx":
            bpy.ops.import_scene.fbx(filepath=path)

        mesh_objs = [o for o in bpy.data.objects if o.type == 'MESH']
        total_verts = sum(len(o.data.vertices) for o in mesh_objs)
        total_polys = sum(len(o.data.polygons) for o in mesh_objs)

        print(f"Nombre d'objets Mesh : {len(mesh_objs)}")
        print(f"Total sommets : {total_verts:,}")
        print(f"Total polygones : {total_polys:,}")
        
        # Dimensions hors tout
        if mesh_objs:
            min_x = min(o.bound_box[0][0] * o.scale.x + o.location.x for o in mesh_objs)
            max_x = max(o.bound_box[6][0] * o.scale.x + o.location.x for o in mesh_objs)
            min_y = min(o.bound_box[0][1] * o.scale.y + o.location.y for o in mesh_objs)
            max_y = max(o.bound_box[6][1] * o.scale.y + o.location.y for o in mesh_objs)
            min_z = min(o.bound_box[0][2] * o.scale.z + o.location.z for o in mesh_objs)
            max_z = max(o.bound_box[6][2] * o.scale.z + o.location.z for o in mesh_objs)
            print(f"Dimensions : X={max_x-min_x:.3f}m, Y={max_y-min_y:.3f}m, Z={max_z-min_z:.3f}m")

        print("Noms des premiers objets :")
        for o in mesh_objs[:15]:
            print(f" - {o.name} ({len(o.data.polygons)} polys)")
        if len(mesh_objs) > 15:
            print(f" ... et {len(mesh_objs) - 15} autres objets.")

    except Exception as e:
        print(f"Erreur d'import : {e}")

print("=" * 60)
