"""
Traitement et Optimisation du Modèle Audi 80 B3 pour Blender et le Web (Three.js)
- Isole strictement les panneaux de carrosserie extérieure
- Aligne les axes : Longueur = X (+AV / -AR), Hauteur = Y (+Haut), Largeur = Z (+Gauche / -Droite)
- Ajuste aux dimensions d'usine officielles : L=4.393m, l=1.695m, H=1.397m
- Exporte en .glb et génère le fichier JS base64 pour une compatibilité 100% file://
"""

import bpy
import math
import os
import json
import base64

def process_model():
    print("=" * 60)
    print("Chargement et traitement du modèle Audi 80 B3...")
    
    # 1. Scène vierge
    bpy.ops.wm.read_factory_settings(use_empty=True)

    # 2. Importer le modèle complet GLB
    glb_in = os.path.abspath(r"models\modeles telecharges\audi_80_b3_full_parts.glb")
    bpy.ops.import_scene.gltf(filepath=glb_in)

    mesh_objs = [o for o in bpy.data.objects if o.type == 'MESH']
    print(f"Total objets importés : {len(mesh_objs)}")

    # 3. Filtrer pour garder UNIQUEMENT les pièces extérieures de carrosserie
    # On élimine les intérieurs, sièges, doublures lourdes de collision et dummies
    keep_keywords = [
        'bonnet', 'hood',       # Capot
        'boot', 'trunk',        # Coffre / Malle
        'door_lf', 'door_rf',   # Portes AV G/D
        'door_lr', 'door_rr',   # Portes AR G/D
        'bump_front', 'bump_rear', 'bamper', # Boucliers
        'fari', 'light',        # Phares et feux
        'chassis_dummy',        # Coque extérieure et ailes
        'wheel'                 # Roues
    ]

    # Mots clés à exclure formellement (mécanique interne invisible, sièges...)
    exclude_keywords = [
        'krislo',               # Sièges / fauteuils
        'interior',             # Intérieur
        'roofbox',              # Coffre de toit optionnel
        'extra3'                # Accessoire superflu
    ]

    kept_objs = []
    removed_count = 0
    for o in list(mesh_objs):
        name_l = o.name.lower()
        should_exclude = any(k in name_l for k in exclude_keywords)
        should_keep = any(k in name_l for k in keep_keywords) and not should_exclude

        if should_keep:
            kept_objs.append(o)
        else:
            bpy.data.objects.remove(o, do_unlink=True)
            removed_count += 1

    print(f"Objets conservés pour la carrosserie : {len(kept_objs)} (supprimés : {removed_count})")

    # 4. Réorientation et alignement selon les axes de l'Audi 80 B3 dans Three.js
    # Actuellement dans le DAE/GLB :
    # On crée un empty parent pour la rotation globale
    root = bpy.data.objects.new("Audi80_Carrosserie_Root", None)
    bpy.context.scene.collection.objects.link(root)

    for o in kept_objs:
        o.parent = root

    # Rotation pour aligner Longueur sur X (+ = Avant, - = Arrière), Hauteur sur Y, Largeur sur Z
    # Dans le DAE original, la longueur était sur Y et la hauteur sur Z
    root.rotation_euler = (0, math.radians(-90), math.radians(90))
    bpy.context.view_layer.update()

    bpy.ops.object.select_all(action='DESELECT')
    root.select_set(True)
    for o in kept_objs:
        o.select_set(True)
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=False)

    # Déparentage en conservant les transformations
    for o in kept_objs:
        o.parent = None
    bpy.data.objects.remove(root, do_unlink=True)

    # 5. Calcul des dimensions actuelles et mise à l'échelle d'usine
    # Dimensions Audi 80 B3 officielles : L = 4.393 m, l = 1.695 m, H = 1.397 m
    min_x = min(o.bound_box[0][0] * o.scale.x + o.location.x for o in kept_objs)
    max_x = max(o.bound_box[6][0] * o.scale.x + o.location.x for o in kept_objs)
    min_y = min(o.bound_box[0][1] * o.scale.y + o.location.y for o in kept_objs)
    max_y = max(o.bound_box[6][1] * o.scale.y + o.location.y for o in kept_objs)
    min_z = min(o.bound_box[0][2] * o.scale.z + o.location.z for o in kept_objs)
    max_z = max(o.bound_box[6][2] * o.scale.z + o.location.z for o in kept_objs)

    cur_length = max_x - min_x  # Sur X
    cur_height = max_y - min_y  # Sur Y
    cur_width  = max_z - min_z  # Sur Z

    print(f"Dimensions brutes : Longueur={cur_length:.3f}m, Hauteur={cur_height:.3f}m, Largeur={cur_width:.3f}m")

    # Échelle cible basée sur la longueur constructeur de 4.393m
    if cur_length > 0:
        scale_factor = 4.393 / cur_length
    else:
        scale_factor = 1.0

    print(f"Facteur d'échelle appliqué : {scale_factor:.4f}")

    # Centrer le véhicule : X = 0 au milieu de l'empattement, Z = 0 sur l'axe de symétrie, Y = 0 au niveau du sol (bas des roues)
    center_x = (min_x + max_x) / 2.0
    center_z = (min_z + max_z) / 2.0
    ground_y = min_y

    for o in kept_objs:
        o.scale = (o.scale.x * scale_factor, o.scale.y * scale_factor, o.scale.z * scale_factor)
        o.location.x = (o.location.x - center_x) * scale_factor
        o.location.z = (o.location.z - center_z) * scale_factor
        o.location.y = (o.location.y - ground_y) * scale_factor

    bpy.ops.object.select_all(action='DESELECT')
    for o in kept_objs:
        o.select_set(True)
    bpy.ops.object.transform_apply(location=True, rotation=False, scale=True)

    # 6. Structurer en collections d'atelier propres
    master_col = bpy.context.scene.collection
    col_carrosserie = bpy.data.collections.new("01_Carrosserie_Exterieure")
    col_portes = bpy.data.collections.new("02_Ouvrants_Portes_Capots")
    col_boucliers = bpy.data.collections.new("03_Boucliers_Optiques")
    col_roues = bpy.data.collections.new("04_Roues")

    master_col.children.link(col_carrosserie)
    master_col.children.link(col_portes)
    master_col.children.link(col_boucliers)
    master_col.children.link(col_roues)

    for o in kept_objs:
        # Retirer de la collection racine
        for c in o.users_collection:
            c.objects.unlink(o)
        name_l = o.name.lower()
        if 'door' in name_l or 'bonnet' in name_l or 'boot' in name_l or 'hood' in name_l:
            col_portes.objects.link(o)
        elif 'bump' in name_l or 'bamper' in name_l or 'fari' in name_l:
            col_boucliers.objects.link(o)
        elif 'wheel' in name_l:
            col_roues.objects.link(o)
        else:
            col_carrosserie.objects.link(o)

    # 7. Créer un matériau Alpinweiß L90E propre et l'appliquer
    mat_white = bpy.data.materials.new("Audi_Alpinweiss_L90E")
    mat_white.use_nodes = True
    bsdf = mat_white.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs['Base Color'].default_value = (0.92, 0.92, 0.90, 1.0)
        bsdf.inputs['Roughness'].default_value = 0.22

    mat_black = bpy.data.materials.new("Audi_Plastique_Noir_B3")
    mat_black.use_nodes = True
    bsdf_black = mat_black.node_tree.nodes.get("Principled BSDF")
    if bsdf_black:
        bsdf_black.inputs['Base Color'].default_value = (0.04, 0.04, 0.04, 1.0)
        bsdf_black.inputs['Roughness'].default_value = 0.65

    for o in kept_objs:
        name_l = o.name.lower()
        if 'bump' in name_l or 'bamper' in name_l or 'wheel' in name_l:
            if not o.data.materials:
                o.data.materials.append(mat_black)
        else:
            if not o.data.materials:
                o.data.materials.append(mat_white)

    # 8. Sauvegarder la scène Blender finale
    blend_out = os.path.abspath(r"models\blender\audi80_b3_carrosserie.blend")
    bpy.ops.wm.save_as_mainfile(filepath=blend_out)
    print(f"Scène Blender enregistrée dans : {blend_out}")

    # 9. Exporter en GLB optimisé pour le Web
    os.makedirs("assets/models", exist_ok=True)
    glb_out = os.path.abspath(r"assets\models\audi80_b3_exterior.glb")
    bpy.ops.export_scene.gltf(
        filepath=glb_out,
        export_format='GLB',
        use_selection=False,
        export_materials='EXPORT'
    )
    glb_size = os.path.getsize(glb_out)
    print(f"Modèle GLB exporté : {glb_out} ({glb_size:,} octets)")

    # 10. Générer le fichier JS avec encodage base64 pour garantie zéro CORS en file://
    with open(glb_out, "rb") as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')

    js_out = os.path.abspath(r"data\audi80_b3_model.js")
    with open(js_out, "w", encoding="utf-8") as f:
        f.write("window.AUDI80_DATA = window.AUDI80_DATA || {};\n")
        f.write(f"window.AUDI80_DATA.modelGLBBase64 = '{b64_data}';\n")
    print(f"Fichier JS base64 généré : {js_out} ({os.path.getsize(js_out):,} octets)")

    print("=" * 60)
    print("TRAITEMENT TERMINÉ AVEC SUCCÈS")
    print("=" * 60)

if __name__ == "__main__":
    process_model()
