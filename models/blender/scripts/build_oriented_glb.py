import trimesh
import os
import base64
import numpy as np

def run():
    raw_glb = r"models\modeles telecharges\audi_80_b3_full_parts.glb"
    scene = trimesh.load(raw_glb)

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

    filtered_geoms = {}
    for name, geom in scene.geometry.items():
        nl = name.lower()
        if any(k in nl for k in keep_keywords) and not any(k in nl for k in exclude_keywords):
            filtered_geoms[name] = geom

    print(f"Geometries conservees : {len(filtered_geoms)}")

    # Matrice de projection vers repere Three.js / Audi 80 :
    # x_final = -y_raw (Avant = +X, Arrière = -X)
    # y_final = z_raw  (Haut = +Y, Sol = 0)
    # z_final = x_raw  (Gauche LHD Conducteur = +Z, Droite Passager = -Z)
    mat = np.array([
        [0.0, -1.0, 0.0, 0.0],
        [0.0,  0.0, 1.0, 0.0],
        [1.0,  0.0, 0.0, 0.0],
        [0.0,  0.0, 0.0, 1.0]
    ])

    all_bounds = []
    for name, geom in filtered_geoms.items():
        g = geom.copy().apply_transform(mat)
        all_bounds.append(g.bounds[0])
        all_bounds.append(g.bounds[1])

    all_bounds = np.array(all_bounds)
    min_pt = all_bounds.min(axis=0)
    max_pt = all_bounds.max(axis=0)

    cur_length = max_pt[0] - min_pt[0]
    scale_factor = 4.393 / cur_length
    print(f"Longueur brute projetee : {cur_length:.3f}m -> echelle officielle (4.393m) = {scale_factor:.4f}")

    center_x = (min_pt[0] + max_pt[0]) / 2.0
    center_z = (min_pt[2] + max_pt[2]) / 2.0
    ground_y = min_pt[1]

    # Matrice d'ajustement : centrage X et Z, pose au sol Y=0, et mise à l'échelle
    adjust_mat = np.array([
        [scale_factor, 0.0,          0.0,          -center_x * scale_factor],
        [0.0,          scale_factor, 0.0,          -ground_y * scale_factor],
        [0.0,          0.0,          scale_factor, -center_z * scale_factor],
        [0.0,          0.0,          0.0,          1.0                     ]
    ])

    final_mat = adjust_mat @ mat

    new_scene = trimesh.Scene()
    for name, geom in filtered_geoms.items():
        g = geom.copy().apply_transform(final_mat)
        new_scene.add_geometry(g, geom_name=name, node_name=name)

    glb_out = r"assets\models\audi80_b3_exterior.glb"
    new_scene.export(glb_out)
    print(f"GLB exporte : {glb_out} ({os.path.getsize(glb_out)} octets)")

    with open(glb_out, 'rb') as f:
        b64_data = base64.b64encode(f.read()).decode('ascii')

    js_content = f'// Audi 80 B3 Exterior 3D Model (Base64 GLB)\nwindow.AUDI80_DATA = window.AUDI80_DATA || {{}};\nwindow.AUDI80_DATA.modelGLBBase64 = "{b64_data}";\n'
    js_out = r"data\audi80_b3_model.js"
    with open(js_out, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print(f"JS Base64 genere : {js_out} ({os.path.getsize(js_out)} octets)")

    test_load = trimesh.load(glb_out)
    dim = test_load.bounds[1] - test_load.bounds[0]
    print("=== VERIFICATION OFFICIELLE DES AXES ===")
    print(f"Bornes Min : X={test_load.bounds[0][0]:.3f}, Y={test_load.bounds[0][1]:.3f}, Z={test_load.bounds[0][2]:.3f}")
    print(f"Bornes Max : X={test_load.bounds[1][0]:.3f}, Y={test_load.bounds[1][1]:.3f}, Z={test_load.bounds[1][2]:.3f}")
    print(f"Dimensions : Longueur(X)={dim[0]:.3f}m, Hauteur(Y)={dim[1]:.3f}m, Largeur(Z)={dim[2]:.3f}m")

    # Vérification des centroïdes des pièces clés
    b = test_load.geometry['bonnet_ok-mesh-mesh'].centroid
    bo = test_load.geometry['boot_ok-mesh-mesh'].centroid
    dl = test_load.geometry['door_lf_ok_-mesh-mesh'].centroid
    dr = test_load.geometry['door_rf_ok_-mesh-mesh'].centroid
    print(f" -> CAPOT (AVANT +X) : X={b[0]:.2f}, Y={b[1]:.2f}, Z={b[2]:.2f}")
    print(f" -> COFFRE (ARRIERE -X) : X={bo[0]:.2f}, Y={bo[1]:.2f}, Z={bo[2]:.2f}")
    print(f" -> PORTE LF (Conducteur Gauche LHD +Z) : X={dl[0]:.2f}, Y={dl[1]:.2f}, Z={dl[2]:.2f}")
    print(f" -> PORTE RF (Passager Droite -Z) : X={dr[0]:.2f}, Y={dr[1]:.2f}, Z={dr[2]:.2f}")

if __name__ == '__main__':
    run()
