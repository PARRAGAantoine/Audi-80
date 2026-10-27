"""
Orientation et Alignement Officiel Audi 80 B3 (LHD France)
Axes Three.js / Atelier :
- Avant = +X (Longueur vers l'avant, capot à +X)
- Arrière = -X (Longueur vers l'arrière, malle à -X)
- Hauteur = +Y (Du sol Y=0 jusqu'au pavillon Y=+1.40m)
- Gauche / Conducteur LHD = +Z (Porte AVG, volant, boîte fusibles à +Z)
- Droite / Passager = -Z (Porte AVD à -Z)

Formule de projection exacte depuis audi_80_b3_full_parts.glb :
x_final = -y_raw
y_final = z_raw
z_final = x_raw
"""

import bpy
import os
import base64

def run():
    print("=== ALIGNEMENT OFFICIEL AUDI 80 B3 ===")
    glb_in = os.path.abspath(r"models\modeles telecharges\audi_80_b3_full_parts.glb")
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=glb_in)

    keep_keywords = [
        'bonnet', 'hood',
        'boot', 'trunk',
        'door_lf', 'door_rf',
        'door_lr', 'door_rr',
        'bump_front', 'bump_rear', 'bamper',
        'fari', 'light',
        'chassis_dummy',
        'wheel'
    ]
    exclude_keywords = ['krislo', 'interior', 'roofbox', 'extra3']

    kept_objs = []
    for o in list(bpy.data.objects):
        if o.type == 'MESH':
            name_l = o.name.lower()
            if any(k in name_l for k in keep_keywords) and not any(k in name_l for k in exclude_keywords):
                kept_objs.append(o)
            else:
                bpy.data.objects.remove(o, do_unlink=True)
        else:
            bpy.data.objects.remove(o, do_unlink=True)

    print(f"Objets conserves : {len(kept_objs)}")

    # Transformation de base sur chaque vertex
    # x_new = -y_raw
    # y_new = z_raw
    # z_new = x_raw
    for o in kept_objs:
        mesh = o.data
        for v in mesh.vertices:
            xr = float(v.co.x)
            yr = float(v.co.y)
            zr = float(v.co.z)
            v.co.x = -yr
            v.co.y = zr
            v.co.z = xr
        mesh.update()

    # Bornes calculées après la projection
    min_x = min(min(v.co.x for v in o.data.vertices) for o in kept_objs)
    max_x = max(max(v.co.x for v in o.data.vertices) for o in kept_objs)
    min_y = min(min(v.co.y for v in o.data.vertices) for o in kept_objs)
    max_y = max(max(v.co.y for v in o.data.vertices) for o in kept_objs)
    min_z = min(min(v.co.z for v in o.data.vertices) for o in kept_objs)
    max_z = max(max(v.co.z for v in o.data.vertices) for o in kept_objs)

    cur_len = max_x - min_x  # Longueur sur X
    scale_factor = 4.393 / cur_len
    print(f"Dimensions brutes: L(X)={cur_len:.3f}m, H(Y)={max_y - min_y:.3f}m, l(Z)={max_z - min_z:.3f}m")
    print(f"Facteur d'echelle officiel (4.393m): {scale_factor:.4f}")

    # Centrage :
    # X : centré autour de 0 (Avant = +2.20m, Arrière = -2.20m)
    # Z : centré autour de 0 (Gauche = +0.85m, Droite = -0.85m)
    # Y : sol à 0 (le point le plus bas repose exactement au sol)
    center_x = (min_x + max_x) / 2.0
    center_z = (min_z + max_z) / 2.0
    ground_y = min_y

    for o in kept_objs:
        mesh = o.data
        for v in mesh.vertices:
            v.co.x = (v.co.x - center_x) * scale_factor
            v.co.y = (v.co.y - ground_y) * scale_factor
            v.co.z = (v.co.z - center_z) * scale_factor
        mesh.update()

    # Structuration en 4 collections d'atelier
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
        n = o.name.lower()
        if 'wheel' in n:
            col_roues.objects.link(o)
        elif 'door' in n or 'bonnet' in n or 'boot' in n:
            col_portes.objects.link(o)
        elif 'bump' in n or 'fari' in n or 'bamper' in n:
            col_boucliers.objects.link(o)
        else:
            col_carrosserie.objects.link(o)

    bonnet = bpy.data.objects.get('bonnet_ok-mesh-mesh')
    boot = bpy.data.objects.get('boot_ok-mesh-mesh')
    dlf = bpy.data.objects.get('door_lf_ok_-mesh-mesh')
    drf = bpy.data.objects.get('door_rf_ok_-mesh-mesh')

    def c(obj):
        if not obj: return "None"
        v = obj.data.vertices
        return f"X={sum(p.co.x for p in v)/len(v):.2f}, Y={sum(p.co.y for p in v)/len(v):.2f}, Z={sum(p.co.z for p in v)/len(v):.2f}"

    print("VERIFICATION COORDONNEES :")
    print(" -> BONNET (AVANT +X) :", c(bonnet))
    print(" -> BOOT (ARRIERE -X)  :", c(boot))
    print(" -> DOOR LF (Conducteur Gauche LHD +Z) :", c(dlf))
    print(" -> DOOR RF (Passager Droite -Z)       :", c(drf))

    # Sauvegarder .blend pour travail d'atelier
    blend_out = os.path.abspath(r"models\blender\audi80_b3_carrosserie.blend")
    bpy.ops.wm.save_as_mainfile(filepath=blend_out)
    print("Fichier .blend sauvegarde :", blend_out)

    # Exporter GLB pour l'application web
    glb_out = os.path.abspath(r"assets\models\audi80_b3_exterior.glb")
    bpy.ops.export_scene.gltf(filepath=glb_out, export_format='GLB')
    print("GLB exporte :", glb_out, os.path.getsize(glb_out), "octets")

    # Generer JS Base64 pour zero CORS file://
    with open(glb_out, 'rb') as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')

    js_content = f"// Audi 80 B3 Exterior 3D Model (Base64 GLB)\nwindow.AUDI80_DATA = window.AUDI80_DATA || {{}};\nwindow.AUDI80_DATA.modelGLBBase64 = \"{b64_data}\";\n"
    js_out = os.path.abspath(r"data\audi80_b3_model.js")
    with open(js_out, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("JS Base64 genere :", js_out, os.path.getsize(js_out), "octets")
    print("=== TRAITEMENT TERMINE AVEC SUCCES ===")

if __name__ == "__main__":
    run()
