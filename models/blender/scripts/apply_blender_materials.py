"""
Script d'application directe des matériaux réalistes dans Blender :
- Blanc Alpinweiß L90E sur la tôle (capot, toit, ailes, portes, malle)
- Plastique Noir satiné sur les boucliers AV/AR, la calandre, les bas de caisse et les baguettes latérales
- Vitrages teintés translucides
- Clignotants orange et feux AR rouges
- 4 Roues avec pneus noirs et jantes tôle argentées
"""

import bpy
import os
import base64

def run():
    print("=== ASSIGNATION DES MATERIAUX DANS BLENDER ===")
    
    # 1. Matériau Blanc Alpinweiß L90E
    mat_white = bpy.data.materials.get("Mat_Alpinweiss_L90E") or bpy.data.materials.new("Mat_Alpinweiss_L90E")
    mat_white.use_nodes = True
    bsdf_w = mat_white.node_tree.nodes.get("Principled BSDF")
    if bsdf_w:
        bsdf_w.inputs["Base Color"].default_value = (0.95, 0.96, 0.98, 1.0)
        bsdf_w.inputs["Roughness"].default_value = 0.25
        bsdf_w.inputs["Metallic"].default_value = 0.05
    mat_white.diffuse_color = (0.95, 0.96, 0.98, 1.0) # Affichage Viewport solide

    # 2. Matériau Plastique Noir (Bandeaux, pare-chocs, poignées, calandre)
    mat_black = bpy.data.materials.get("Mat_TrimBlack") or bpy.data.materials.new("Mat_TrimBlack")
    mat_black.use_nodes = True
    bsdf_b = mat_black.node_tree.nodes.get("Principled BSDF")
    if bsdf_b:
        bsdf_b.inputs["Base Color"].default_value = (0.04, 0.04, 0.05, 1.0)
        bsdf_b.inputs["Roughness"].default_value = 0.8
        bsdf_b.inputs["Metallic"].default_value = 0.0
    mat_black.diffuse_color = (0.04, 0.04, 0.05, 1.0) # Affichage Viewport solide

    # 3. Matériau Vitrage
    mat_glass = bpy.data.materials.get("Mat_Glass") or bpy.data.materials.new("Mat_Glass")
    mat_glass.use_nodes = True
    bsdf_g = mat_glass.node_tree.nodes.get("Principled BSDF")
    if bsdf_g:
        bsdf_g.inputs["Base Color"].default_value = (0.1, 0.15, 0.22, 1.0)
        bsdf_g.inputs["Roughness"].default_value = 0.1
        if "Transmission Weight" in bsdf_g.inputs:
            bsdf_g.inputs["Transmission Weight"].default_value = 0.85
        elif "Transmission" in bsdf_g.inputs:
            bsdf_g.inputs["Transmission"].default_value = 0.85
    mat_glass.diffuse_color = (0.1, 0.15, 0.22, 0.5)

    # 4. Matériau Optiques Phares AV (verre transparent)
    mat_light = bpy.data.materials.get("Mat_Light") or bpy.data.materials.new("Mat_Light")
    mat_light.use_nodes = True
    bsdf_l = mat_light.node_tree.nodes.get("Principled BSDF")
    if bsdf_l:
        bsdf_l.inputs["Base Color"].default_value = (0.9, 0.92, 0.95, 1.0)
        bsdf_l.inputs["Roughness"].default_value = 0.1
    mat_light.diffuse_color = (0.9, 0.92, 0.95, 0.8)

    # 5. Clignotants Orange d'angle
    mat_orange = bpy.data.materials.get("Mat_OrangeIndicator") or bpy.data.materials.new("Mat_OrangeIndicator")
    mat_orange.use_nodes = True
    bsdf_o = mat_orange.node_tree.nodes.get("Principled BSDF")
    if bsdf_o:
        bsdf_o.inputs["Base Color"].default_value = (0.95, 0.42, 0.02, 1.0)
        bsdf_o.inputs["Roughness"].default_value = 0.25
    mat_orange.diffuse_color = (0.95, 0.42, 0.02, 1.0)

    # 6. Feux Arrière Rouge
    mat_red = bpy.data.materials.get("Mat_RedTailLight") or bpy.data.materials.new("Mat_RedTailLight")
    mat_red.use_nodes = True
    bsdf_r = mat_red.node_tree.nodes.get("Principled BSDF")
    if bsdf_r:
        bsdf_r.inputs["Base Color"].default_value = (0.75, 0.05, 0.05, 1.0)
        bsdf_r.inputs["Roughness"].default_value = 0.2
    mat_red.diffuse_color = (0.75, 0.05, 0.05, 1.0)

    # 7. Roues (Pneu noir & Enjoliveur argenté d'origine)
    mat_wheel = bpy.data.materials.get("Mat_Wheel") or bpy.data.materials.new("Mat_Wheel")
    mat_wheel.use_nodes = True
    bsdf_wh = mat_wheel.node_tree.nodes.get("Principled BSDF")
    if bsdf_wh:
        bsdf_wh.inputs["Base Color"].default_value = (0.15, 0.16, 0.18, 1.0)
        bsdf_wh.inputs["Roughness"].default_value = 0.6
        bsdf_wh.inputs["Metallic"].default_value = 0.2
    mat_wheel.diffuse_color = (0.15, 0.16, 0.18, 1.0)

    # Assigner à chaque objet mesh
    for o in bpy.data.objects:
        if o.type == 'MESH':
            o.data.materials.clear()
            name = o.name
            if name.startswith("Paint_"):
                o.data.materials.append(mat_white)
            elif name.startswith("TrimBlack_"):
                o.data.materials.append(mat_black)
            elif name.startswith("Glass_"):
                o.data.materials.append(mat_glass)
            elif name.startswith("Light_"):
                if "fari2_1" in name or "fari2_001_1" in name or "light_005" in name:
                    o.data.materials.append(mat_orange)
                elif "boot" in name or "light_006" in name:
                    o.data.materials.append(mat_red)
                else:
                    o.data.materials.append(mat_light)
            elif name.startswith("Wheel_"):
                o.data.materials.append(mat_wheel)
            else:
                o.data.materials.append(mat_white)

    # Configurer la vue 3D pour afficher les matériaux
    for area in bpy.context.screen.areas if bpy.context.screen else []:
        if area.type == 'VIEW_3D':
            for space in area.spaces:
                if space.type == 'VIEW_3D':
                    space.shading.type = 'MATERIAL' # Affichage Material Preview

    # Sauvegarder le blend
    blend_path = os.path.abspath(r"models\blender\audi80_b3_carrosserie.blend")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    print("Blend sauvegarde avec succès :", blend_path)

    # Exporter le GLB avec les matériaux
    glb_out = os.path.abspath(r"assets\models\audi80_b3_exterior.glb")
    bpy.ops.export_scene.gltf(filepath=glb_out, export_format='GLB')
    print("GLB exporte avec succès :", glb_out)

    # Mettre à jour le JS Base64
    with open(glb_out, "rb") as f:
        b64_data = base64.b64encode(f.read()).decode("ascii")

    js_content = f'// Audi 80 B3 Exterior 3D Model (Base64 GLB)\nwindow.AUDI80_DATA = window.AUDI80_DATA || {{}};\nwindow.AUDI80_DATA.modelGLBBase64 = "{b64_data}";\n'
    js_out = os.path.abspath(r"data\audi80_b3_model.js")
    with open(js_out, "w", encoding="utf-8") as f:
        f.write(js_content)
    print("data/audi80_b3_model.js genere avec succès !")

if __name__ == "__main__":
    run()
