"""
Traitement Haute Fidélité Audi 80 B3 (1988) - Peinture Réaliste Alpinweiß L90E
- Élimine les doublons de géométrie (ne garde que la surface extérieure peinte unique)
- Sépare clairement par rôle et couleur d'usine :
  1. Carrosserie peinte (Blanc Alpinweiß L90E)
  2. Pare-chocs, bas de caisse, baguettes de protection latérales et poignées (Plastique noir satiné)
  3. Vitrages affleurants type 89 (Teintés verre)
  4. Optiques avant (Phares H4 verre + Clignotants orange)
  5. Optiques arrière (Bandeau de feux rouge/orange Audi 80)
  6. 4 Roues complètes (Jantes tôle 14" avec enjoliveurs d'origine comme sur la photo)
"""

import trimesh
import numpy as np
import base64
import os

def run():
    raw_glb = r"models\modeles telecharges\audi_80_b3_full_parts.glb"
    scene = trimesh.load(raw_glb)

    # Matrice de projection vers repère Three.js / Audi 80 :
    # x_final = -y_raw (Avant = +X, Arrière = -X)
    # y_final = z_raw  (Haut = +Y, Sol = 0)
    # z_final = x_raw  (Gauche LHD Conducteur = +Z, Droite Passager = -Z)
    mat = np.array([
        [0.0, -1.0, 0.0, 0.0],
        [0.0,  0.0, 1.0, 0.0],
        [1.0,  0.0, 0.0, 0.0],
        [0.0,  0.0, 0.0, 1.0]
    ])

    # Pièces sélectionnées sans AUCUN doublon
    # Catégorie 1 : Carrosserie Alpinweiß L90E (Tôle peinte)
    body_paint_names = [
        'bonnet_ok-mesh-mesh',         # Capot moteur plongeant
        'boot_ok-mesh-mesh_1',         # Malle de coffre arrière
        'chassis_dummy-mesh-mesh_1',   # Coque principale (toit, montants A/B/C, ailes AR)
        'chassis_dummy-mesh_001-mesh_1',# Aile avant gauche
        'chassis_dummy-mesh_012-mesh_1',# Aile avant droite
        'door_lf_ok_-mesh-mesh_1',     # Porte AV G (conducteur)
        'door_rf_ok_-mesh-mesh_1',     # Porte AV D (passager)
        'door_lr_ok_-mesh-mesh_1',     # Porte AR G
        'door_rr_ok_-mesh-mesh_1'      # Porte AR D
    ]

    # Catégorie 2 : Plastiques Noirs / Pare-chocs / Bandes latérales (voir photo réelle)
    black_trim_names = [
        'bump_front_ok-mesh_001-mesh',  # Pare-chocs avant
        'bump_front_ok-mesh_001-mesh_1',# Jupe basse pare-chocs avant
        'bump_rear_ok_-mesh-mesh',      # Pare-chocs arrière
        'bump_rear_ok_-mesh-mesh_1',    # Jupe basse pare-chocs arrière
        'chassis_dummy-mesh-mesh_5',    # Bas de caisse noir sous portes
        'door_lf_ok_-mesh-mesh_2',      # Bandeau de protection latéral porte AVG
        'door_rf_ok_-mesh-mesh_2',      # Bandeau de protection latéral porte AVD
        'door_lr_ok_-mesh-mesh_2',      # Bandeau de protection latéral porte ARG
        'door_rr_ok_-mesh-mesh_2',      # Bandeau de protection latéral porte ARD
        'door_lf_ok_-mesh_002-mesh',    # Poignée porte AVG
        'door_lf_ok_-mesh_002-mesh_1',  # Rétroviseur gauche
        'door_rf_ok_-mesh_002-mesh',    # Poignée porte AVD
        'door_rf_ok_-mesh_002-mesh_1',  # Rétroviseur droit
        'chassis_dummy-mesh_007-mesh'   # Calandre noire Audi
    ]

    # Catégorie 3 : Vitrages affleurants
    glass_names = [
        'chassis_dummy-mesh_010-mesh',  # Pare-brise
        'chassis_dummy-mesh_011-mesh',  # Lunette arrière
        'door_lf_ok_-mesh_001-mesh',    # Vitre porte AVG
        'door_rf_ok_-mesh_001-mesh',    # Vitre porte AVD
        'door_lr_ok_-mesh_001-mesh',    # Vitre porte ARG
        'door_rr_ok_-mesh_001-mesh',    # Vitre porte ARD
        'chassis_dummy-mesh_016-mesh',  # Custode ARG
        'chassis_dummy-mesh_017-mesh'   # Custode ARD
    ]

    # Catégorie 4 : Optiques avant et arrière
    lights_names = [
        'fari-mesh-mesh',               # Phare AV droit (verre)
        'fari-mesh_001-mesh',           # Phare AV gauche (verre)
        'fari2-mesh-mesh',              # Optique AV
        'fari2-mesh_001-mesh',          # Optique AV
        'fari2-mesh-mesh_1',            # Clignotant AV aile gauche (orange)
        'fari2-mesh_001-mesh_1',        # Clignotant AV aile droite (orange)
        'boot_ok-mesh-mesh',            # Feu de malle gauche
        'boot_ok-mesh_002-mesh',        # Feu de malle droit
        'boot_ok-mesh_003-mesh',        # Feu antibrouillard / recul malle
        'chassis_dummy-mesh_005-mesh',  # Feu d'aile ARG (rouge/orange)
        'chassis_dummy-mesh_006-mesh'   # Feu d'aile ARD (rouge/orange)
    ]

    selected_names = set(body_paint_names + black_trim_names + glass_names + lights_names)
    print(f"Total pièces uniques sélectionnées : {len(selected_names)}")

    # Calcul des bornes globales pour l'échelle et le centrage
    all_bounds = []
    for name in selected_names:
        if name in scene.geometry:
            g = scene.geometry[name].copy().apply_transform(mat)
            all_bounds.append(g.bounds[0])
            all_bounds.append(g.bounds[1])

    all_bounds = np.array(all_bounds)
    min_pt = all_bounds.min(axis=0)
    max_pt = all_bounds.max(axis=0)

    cur_length = max_pt[0] - min_pt[0]
    scale_factor = 4.393 / cur_length
    print(f"Longueur carrosserie : {cur_length:.3f}m -> échelle usine (4.393m) = {scale_factor:.4f}")

    center_x = (min_pt[0] + max_pt[0]) / 2.0
    center_z = (min_pt[2] + max_pt[2]) / 2.0
    ground_y = 0.0  # Le sol sera calculé avec les roues

    # Transformer la roue pour connaître son rayon
    raw_wheel = scene.geometry['wheel-mesh-mesh'].copy().apply_transform(mat)
    wheel_radius = (raw_wheel.bounds[1][1] - raw_wheel.bounds[0][1]) / 2.0 * scale_factor
    print(f"Rayon calculé de la roue : {wheel_radius:.3f}m")

    # Hauteur du sol : bas des pneus à Y = 0
    # L'axe de roue est à environ Y = wheel_radius
    ground_y = min_pt[1] - 0.05

    adjust_mat = np.array([
        [scale_factor, 0.0,          0.0,          -center_x * scale_factor],
        [0.0,          scale_factor, 0.0,          -ground_y * scale_factor],
        [0.0,          0.0,          scale_factor, -center_z * scale_factor],
        [0.0,          0.0,          0.0,          1.0                     ]
    ])

    final_mat = adjust_mat @ mat

    new_scene = trimesh.Scene()

    # 1. Ajouter les pièces de carrosserie
    for name in body_paint_names:
        if name in scene.geometry:
            g = scene.geometry[name].copy().apply_transform(final_mat)
            clean_name = "Paint_" + name.replace("-mesh", "").replace("_ok_", "").replace("chassis_dummy", "body")
            new_scene.add_geometry(g, geom_name=clean_name, node_name=clean_name)

    # 2. Ajouter les pièces plastiques noires / bandeaux / pare-chocs
    for name in black_trim_names:
        if name in scene.geometry:
            g = scene.geometry[name].copy().apply_transform(final_mat)
            clean_name = "TrimBlack_" + name.replace("-mesh", "").replace("_ok_", "").replace("chassis_dummy", "trim")
            new_scene.add_geometry(g, geom_name=clean_name, node_name=clean_name)

    # 3. Ajouter les vitrages
    for name in glass_names:
        if name in scene.geometry:
            g = scene.geometry[name].copy().apply_transform(final_mat)
            clean_name = "Glass_" + name.replace("-mesh", "").replace("_ok_", "").replace("chassis_dummy", "glass")
            new_scene.add_geometry(g, geom_name=clean_name, node_name=clean_name)

    # 4. Ajouter les optiques
    for name in lights_names:
        if name in scene.geometry:
            g = scene.geometry[name].copy().apply_transform(final_mat)
            clean_name = "Light_" + name.replace("-mesh", "").replace("_ok_", "").replace("chassis_dummy", "light")
            new_scene.add_geometry(g, geom_name=clean_name, node_name=clean_name)

    # 5. Créer et positionner les 4 roues réelles (AV G, AV D, AR G, AR D)
    # Empattement officiel B3 : 2.540m
    # Voie officielle B3 : 1.410m (Z = +/- 0.73m)
    wheel_base = scene.geometry['wheel-mesh-mesh'].copy().apply_transform(final_mat)
    # Centrer la géométrie de la roue sur son origine
    w_c = (wheel_base.bounds[0] + wheel_base.bounds[1]) / 2.0
    wheel_base.apply_translation(-w_c)

    wheel_positions = {
        'Wheel_Front_Left':  np.array([ 1.30, 0.31,  0.74]),
        'Wheel_Front_Right': np.array([ 1.30, 0.31, -0.74]),
        'Wheel_Rear_Left':   np.array([-1.24, 0.31,  0.74]),
        'Wheel_Rear_Right':  np.array([-1.24, 0.31, -0.74])
    }

    for w_name, pos in wheel_positions.items():
        w_geom = wheel_base.copy()
        # Si côté droit, inverser l'orientation
        if 'Right' in w_name:
            rot_y = np.array([
                [-1.0, 0.0,  0.0, 0.0],
                [ 0.0, 1.0,  0.0, 0.0],
                [ 0.0, 0.0, -1.0, 0.0],
                [ 0.0, 0.0,  0.0, 1.0]
            ])
            w_geom.apply_transform(rot_y)
        w_geom.apply_translation(pos)
        new_scene.add_geometry(w_geom, geom_name=w_name, node_name=w_name)

    glb_out = r"assets\models\audi80_b3_exterior.glb"
    new_scene.export(glb_out)
    print(f"GLB exporté avec succès : {glb_out} ({os.path.getsize(glb_out)} octets, {len(new_scene.geometry)} pièces)")

    # Générer Base64 pour compatibilité 100% file://
    with open(glb_out, 'rb') as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')

    js_content = f'// Audi 80 B3 Exterior 3D Model (Base64 GLB)\nwindow.AUDI80_DATA = window.AUDI80_DATA || {{}};\nwindow.AUDI80_DATA.modelGLBBase64 = "{b64_data}";\n'
    js_out = r"data\audi80_b3_model.js"
    with open(js_out, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"JS Base64 généré : {js_out} ({os.path.getsize(js_out)} octets)")

if __name__ == '__main__':
    run()
