"""
Audi 80 B3 (1988) - Générateur de Gabarit & Carrosserie Extérieure
Modélisation pas à pas pour Blender 5.2+
Cotes officielles d'usine Audi AG (Typ 89) :
 - Longueur : 4 393 mm (4.393 m)
 - Largeur : 1 695 mm (1.695 m)
 - Hauteur : 1 397 mm (1.397 m)
 - Empattement : 2 540 mm (2.540 m)
 - Voie AV : 1 410 mm / Voie AR : 1 426 mm
 - Configuration : France / LHD (Conduite et volant à gauche)
 - Couleur d'origine : Alpinweiß L90E (Blanc Alpin)
"""

import bpy
import math
from mathutils import Vector

def setup_scene():
    # 1. Unités métriques en mètres
    bpy.context.scene.unit_settings.system = 'METRIC'
    bpy.context.scene.unit_settings.scale_length = 1.0
    bpy.context.scene.unit_settings.length_unit = 'METERS'

    # 2. Nettoyer la scène par défaut (Cube, Caméra, Lampe par défaut)
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

    # 3. Créer l'arborescence des collections
    collections = [
        "01_Guides_Dimensions",
        "02_Carrosserie_Exterieure",
        "03_PareChocs_Calandre",
        "04_Vitrages_Affleurants",
        "05_Optiques_Feux",
        "06_Roues_Jantes"
    ]
    col_map = {}
    master_col = bpy.context.scene.collection
    for col_name in collections:
        col = bpy.data.collections.new(col_name)
        master_col.children.link(col)
        col_map[col_name] = col

    return col_map

def create_materials():
    # Matériau 1 : Peinture carrosserie Blanc Alpin L90E
    mat_body = bpy.data.materials.new(name="Audi_L90E_Alpinweiss")
    mat_body.use_nodes = True
    bsdf = mat_body.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        # Blanc chaud Alpinweiß
        bsdf.inputs['Base Color'].default_value = (0.91, 0.91, 0.90, 1.0)
        bsdf.inputs['Roughness'].default_value = 0.22
        # Clearcoat / vernis brillant
        if 'Coat Weight' in bsdf.inputs:
            bsdf.inputs['Coat Weight'].default_value = 1.0
            bsdf.inputs['Coat Roughness'].default_value = 0.03
        elif 'Clearcoat' in bsdf.inputs:
            bsdf.inputs['Clearcoat'].default_value = 1.0
            bsdf.inputs['Clearcoat Roughness'].default_value = 0.03

    # Matériau 2 : Plastique noir texturé (Bandeaux pare-chocs, rétroviseurs, baguettes)
    mat_trim = bpy.data.materials.new(name="Audi_Trim_Noir_B3")
    mat_trim.use_nodes = True
    bsdf_trim = mat_trim.node_tree.nodes.get("Principled BSDF")
    if bsdf_trim:
        bsdf_trim.inputs['Base Color'].default_value = (0.05, 0.05, 0.05, 1.0)
        bsdf_trim.inputs['Roughness'].default_value = 0.65

    # Matériau 3 : Vitrage teinté vert affleurant
    mat_glass = bpy.data.materials.new(name="Audi_Vitrage_Teinte_Vert")
    mat_glass.use_nodes = True
    bsdf_glass = mat_glass.node_tree.nodes.get("Principled BSDF")
    if bsdf_glass:
        bsdf_glass.inputs['Base Color'].default_value = (0.85, 0.95, 0.88, 1.0)
        bsdf_glass.inputs['Roughness'].default_value = 0.02
        if 'Transmission Weight' in bsdf_glass.inputs:
            bsdf_glass.inputs['Transmission Weight'].default_value = 0.95
            bsdf_glass.inputs['IOR'].default_value = 1.52
        elif 'Transmission' in bsdf_glass.inputs:
            bsdf_glass.inputs['Transmission'].default_value = 0.95
            bsdf_glass.inputs['IOR'].default_value = 1.52

    return mat_body, mat_trim, mat_glass

def create_dimension_guide(col):
    # Gabarit d'encombrement hors-tout de l'Audi 80 B3 (4.393m x 1.695m x 1.397m)
    # L'axe X est la largeur (gauche/droite), Y est la longueur (AV/AR), Z est la hauteur.
    bpy.ops.mesh.primitive_cube_add(
        size=1.0,
        location=(0, 0, 1.397 / 2.0)
    )
    box = bpy.context.active_object
    box.name = "Guide_Gabarit_HorsTout_Audi80B3"
    box.scale = (1.695, 4.393, 1.397)
    box.display_type = 'WIRE'
    box.hide_render = True
    
    # Déplacer dans la collection guides
    bpy.context.collection.objects.unlink(box)
    col.objects.link(box)

    # Repères d'axes des roues (Empattement 2.540m)
    # Essieu AV à Y = +1.270 m, Essieu AR à Y = -1.270 m, Centre roue à Z = 0.29 m
    for name, y_pos in [("Essieu_Avant", 1.270), ("Essieu_Arriere", -1.270)]:
        bpy.ops.object.empty_add(type='SINGLE_ARROW', location=(0, y_pos, 0.29))
        ax = bpy.context.active_object
        ax.name = f"Guide_{name}"
        ax.scale = (0.8, 0.8, 0.8)
        bpy.context.collection.objects.unlink(ax)
        col.objects.link(ax)

def create_body_shell(col, mat_body):
    """
    Crée le demi-châssis extérieur côté gauche (X >= 0) avec modificateur Mirror.
    Profil aérodynamique spécifique Typ 89 :
    - Calandre inclinée
    - Capot plongeant
    - Pare-brise affleurant incliné
    - Pavillon profilé
    - Lunette arrière fuyante
    - Malle arrière haute (aérodynamique Cx 0.29)
    """
    mesh = bpy.data.meshes.new("Audi80_Carrosserie_Mesh")
    obj = bpy.data.objects.new("Audi80_Carrosserie_Exterieure", mesh)
    col.objects.link(obj)

    # Coordonnées des sommets du demi-profil gauche (X >= 0, Y = Longueur, Z = Hauteur)
    # X = 0 correspond au plan médian de symétrie de la voiture
    verts = [
        # Ligne médiane supérieure (X = 0)
        (0.00,  2.15, 0.65),  # 0: Bas calandre AV
        (0.00,  2.10, 0.78),  # 1: Haut calandre / bord capot AV
        (0.00,  0.75, 0.94),  # 2: Milieu capot / auvent pare-brise
        (0.00,  0.50, 0.98),  # 3: Bas baie pare-brise
        (0.00, -0.20, 1.38),  # 4: Haut pare-brise / début pavillon
        (0.00, -0.90, 1.40),  # 5: Milieu pavillon
        (0.00, -1.45, 1.37),  # 6: Fin pavillon / haut lunette AR
        (0.00, -2.00, 0.99),  # 7: Bas lunette AR / début malle
        (0.00, -2.20, 0.97),  # 8: Arête de fuite supérieure malle AR
        (0.00, -2.22, 0.65),  # 9: Panneau de feux AR
        (0.00, -2.18, 0.38),  # 10: Bas jupe AR

        # Ligne d'épaulement / Ligne de caisse latérale (Tornado line, X ~ 0.78 - 0.84)
        (0.65,  2.10, 0.65),  # 11: Coin phare AV gauche
        (0.76,  2.05, 0.78),  # 12: Clignotant AV gauche
        (0.82,  1.27, 0.86),  # 13: Sommet passage roue AV gauche
        (0.83,  0.50, 0.92),  # 14: Base montant A gauche
        (0.84, -0.20, 0.93),  # 15: Ligne d'épaulement porte AV gauche
        (0.84, -0.90, 0.93),  # 16: Ligne d'épaulement porte AR gauche
        (0.83, -1.27, 0.92),  # 17: Sommet passage roue AR gauche
        (0.80, -2.00, 0.92),  # 18: Coin aile AR gauche
        (0.78, -2.20, 0.90),  # 19: Coin malle / feu AR gauche
        (0.72, -2.22, 0.65),  # 20: Coin feu AR aile gauche
        (0.68, -2.18, 0.38),  # 21: Coin bas jupe AR gauche

        # Montants de toit & vitrages affleurants (X ~ 0.55 - 0.70)
        (0.58, -0.20, 1.35),  # 22: Haut montant A gauche
        (0.62, -0.90, 1.37),  # 23: Haut montant B gauche
        (0.60, -1.45, 1.34),  # 24: Haut montant C gauche
        (0.72, -1.95, 0.94),  # 25: Base montant C / custode gauche

        # Bas de caisse & passages de roues (Z ~ 0.28 - 0.35)
        (0.68,  2.12, 0.35),  # 26: Bas pare-chocs AV coin gauche
        (0.74,  1.75, 0.35),  # 27: Avant passage de roue AV
        (0.75,  0.80, 0.32),  # 28: Arrière passage de roue AV
        (0.78, -0.20, 0.30),  # 29: Bas de caisse porte AV
        (0.78, -0.90, 0.30),  # 30: Bas de caisse porte AR
        (0.77, -0.80, 0.32),  # 31: Avant passage de roue AR
        (0.75, -1.75, 0.35),  # 32: Arrière passage de roue AR
    ]

    # Faces quadrilatères et triangles pour former la tôle
    faces = [
        # Capot moteur & face avant
        (0, 1, 12, 11),
        (1, 2, 13, 12),
        (2, 3, 14, 13),

        # Pare-brise affleurant
        (3, 4, 22, 14),

        # Pavillon de toit
        (4, 5, 23, 22),
        (5, 6, 24, 23),

        # Lunette arrière fuyante
        (6, 7, 25, 24),

        # Couvercle de malle de coffre
        (7, 8, 19, 25),
        (8, 9, 20, 19),
        (9, 10, 21, 20),

        # Flanc supérieur / Portes & vitres latérales
        (14, 22, 23, 15),
        (15, 23, 24, 16),
        (16, 24, 25, 17),
        (17, 25, 19, 18),

        # Flanc inférieur / Portes & ailes
        (11, 12, 27, 26),
        (12, 13, 28, 27),
        (13, 14, 29, 28),
        (14, 15, 29),
        (15, 16, 30, 29),
        (16, 17, 31, 30),
        (17, 18, 32, 31),
        (18, 19, 20, 21),
        (18, 21, 32),
    ]

    mesh.from_pydata(verts, [], faces)
    mesh.update()

    # Assigner le matériau Alpinweiß L90E
    obj.data.materials.append(mat_body)

    # Ajouter le modificateur Mirror pour symétrie automatique gauche/droite
    mod_mirror = obj.modifiers.new(name="Miroir_Symetrie_X", type='MIRROR')
    mod_mirror.use_axis[0] = True
    mod_mirror.use_clip = True

    # Ajouter le modificateur Subdivision Surface pour la fluidité des courbes Audi B3
    mod_sub = obj.modifiers.new(name="Subdivision_Surface", type='SUBSURF')
    mod_sub.levels = 1
    mod_sub.render_levels = 2

    # Lissage des normales
    for poly in mesh.polygons:
        poly.use_smooth = True

    return obj

def create_wheels(col):
    # Roues et jantes tôle/alu 14 pouces avec pneus 175/70 R14 (diamètre ~0.60m, largeur 0.18m)
    # Essieux à Y = +1.270m et Y = -1.270m, Voie X = ±0.705m
    for prefix, y_pos in [("Roue_AV", 1.270), ("Roue_AR", -1.270)]:
        for side, x_sign in [("G", 0.705), ("D", -0.705)]:
            bpy.ops.mesh.primitive_cylinder_add(
                radius=0.30,
                depth=0.18,
                location=(x_sign, y_pos, 0.30),
                rotation=(0, math.radians(90), 0)
            )
            wheel = bpy.context.active_object
            wheel.name = f"{prefix}_{side}_14pouces"
            bpy.context.collection.objects.unlink(wheel)
            col.objects.link(wheel)

def create_bumpers_and_grille(col, mat_trim):
    # Bouclier avant enveloppant B3 (en polypropylène noir/teinté)
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 2.15, 0.48))
    front_bumper = bpy.context.active_object
    front_bumper.name = "PareChocs_Avant_B3"
    front_bumper.scale = (1.68, 0.30, 0.28)
    front_bumper.data.materials.append(mat_trim)
    bpy.context.collection.objects.unlink(front_bumper)
    col.objects.link(front_bumper)

    # Bouclier arrière enveloppant B3
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, -2.18, 0.50))
    rear_bumper = bpy.context.active_object
    rear_bumper.name = "PareChocs_Arriere_B3"
    rear_bumper.scale = (1.68, 0.30, 0.28)
    rear_bumper.data.materials.append(mat_trim)
    bpy.context.collection.objects.unlink(rear_bumper)
    col.objects.link(rear_bumper)

    # Calandre avant avec emblème 4 anneaux
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 2.13, 0.72))
    grille = bpy.context.active_object
    grille.name = "Calandre_Audi_B3"
    grille.scale = (0.75, 0.05, 0.12)
    grille.data.materials.append(mat_trim)
    bpy.context.collection.objects.unlink(grille)
    col.objects.link(grille)

def main():
    print("=" * 60)
    print("Initialisation Carrosserie Extérieure Audi 80 B3 (1988) dans Blender")
    print("Poste de conduite : Conduite à gauche (LHD France)")
    print("=" * 60)

    cols = setup_scene()
    mat_body, mat_trim, mat_glass = create_materials()

    create_dimension_guide(cols["01_Guides_Dimensions"])
    create_body_shell(cols["02_Carrosserie_Exterieure"], mat_body)
    create_bumpers_and_grille(cols["03_PareChocs_Calandre"], mat_trim)
    create_wheels(cols["06_Roues_Jantes"])

    # Sauvegarder le fichier .blend
    blend_path = "models/blender/audi80_b3_carrosserie.blend"
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    print(f"Modèle sauvegardé avec succès dans : {blend_path}")

if __name__ == "__main__":
    main()
