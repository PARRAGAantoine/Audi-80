window.AUDI80_DATA = window.AUDI80_DATA || {};

/**
 * Revue Technique d'Atelier sur-mesure — Audi 80 B3 1.8S (1988 / Millésime 1989)
 * Moteur : NE (1 781 cm3, 90 ch) | Carburateur : Keihin KS2 | Allumage : TSZ-H | Boîte : AKM (012)
 * Organisation officielle VAG / RTA par Familles (Groupes 0 à 9) et par Pages (001 à 130).
 */
window.AUDI80_DATA.revue = {
  meta: {
    title: "Revue Technique d'Atelier — Audi 80 B3 1.8S (1988)",
    subtitle: "Moteur NE • Boîte AKM • Carburateur Keihin KS2 • Allumage TSZ-H • Sans DA"
  },
  families: [
    {
      id: "famille-0",
      code: "Famille 0",
      title: "Généralités, Identification & Entretien",
      pagesRange: "Pages 001 – 006",
      pages: [
        {
          page: "001",
          title: "Présentation générale Audi 80 B3 (Typ 89)",
          type: "fiche",
          summary: "Architecture de la carrosserie galvanisée, caractéristiques générales du modèle 1.8S millésime 1989.",
          blocks: [
            {
              kind: "table",
              title: "Fiche d'identité du véhicule",
              headers: ["Paramètre", "Donnée constructeur"],
              rows: [
                ["Modèle / Génération", "Audi 80 B3 Berline 4 portes (Typ 89)"],
                ["Année / Millésime", "1988 / Millésime 1989 (Code année K)"],
                ["N° de châssis (VIN)", "WAUZZZ89ZKA025845"],
                ["Couleur carrosserie", "Blanc Alpinweiß — Code peinture L90E"],
                ["Moteur", "4 cylindres en ligne longitudinal, code NE (1 781 cm³)"],
                ["Puissance / Couple", "90 ch (66 kW) à 5 200 tr/min — 150 Nm à 3 300 tr/min"],
                ["Alimentation / Allumage", "Carburateur double corps Keihin KS2 — Allumage TSZ-H"],
                ["Transmission", "Traction avant — Boîte manuelle 5 vitesses code AKM (type 012)"],
                ["Direction", "À crémaillère mécanique (sans assistance)"]
              ]
            }
          ]
        },
        {
          page: "002",
          title: "Identification : VIN, Plaque constructeur & Étiquette coffre",
          type: "fiche",
          summary: "Où lire les numéros d'identification moteur, boîte, peinture et options PR.",
          blocks: [
            {
              kind: "list",
              title: "Emplacements des marquages d'identification",
              items: [
                "Numéro de châssis (VIN) : frappé à froid sur la tôle de tablier / baie d'auvent au centre (WAUZZZ89ZKA025845).",
                "Plaque constructeur : rivetée sur la traverse avant droite ou joue d'aile droite dans le compartiment moteur.",
                "Étiquette d'identification véhicule (codes PR) : collée à l'intérieur du couvercle de malle arrière ou dans le logement de roue de secours (indique L90E, NE, AKM et les codes options).",
                "Code moteur NE : frappé sur le méplat du bloc-cylindres côté gauche, juste sous la culasse (entre les cylindres 2 et 3).",
                "Code boîte AKM : frappé sur le dessus de la cloche d'embrayage."
              ]
            }
          ]
        },
        {
          page: "003",
          title: "Dimensions, Masses & Points de levage",
          type: "fiche",
          summary: "Cotes extérieures exactes et emplacements sécurisés pour cric et chandelles.",
          blocks: [
            {
              kind: "table",
              title: "Dimensions & Masses (Berline 1.8S)",
              headers: ["Mesure", "Valeur"],
              rows: [
                ["Longueur hors tout", "4 393 mm"],
                ["Largeur hors tout (sans rétroviseurs)", "1 695 mm"],
                ["Hauteur à vide", "1 397 mm"],
                ["Empattement", "2 546 mm"],
                ["Voie avant / arrière", "1 411 mm / 1 431 mm"],
                ["Poids à vide (en ordre de marche)", "1 050 kg"],
                ["Poids total autorisé en charge (PTAC)", "1 510 kg"]
              ]
            },
            {
              kind: "warning",
              text: "Toujours placer le cric ou les chandelles sur les renforts de bas de caisse repérés par des encoches (près des passages de roue) ou sous les longerons du berceau avant. Ne jamais lever sous le plancher en tôle ni sous le carter d'huile."
            }
          ]
        },
        {
          page: "004",
          title: "Tableau des lubrifiants, fluides & contenances",
          type: "fiche",
          summary: "Quantités exactes et spécifications VAG / RTA pour toutes les vidanges.",
          blocks: [
            {
              kind: "table",
              title: "Fluides & Capacités (Moteur NE / Boîte AKM)",
              headers: ["Organe", "Spécification / Norme", "Contenance"],
              rows: [
                ["Huile moteur (avec filtre)", "10W40 semi-synthèse ou 15W40 (API SF / VW 501 01)", "3,0 litres (2,5 L + 0,5 L filtre)"],
                ["Huile moteur (sans filtre)", "10W40 / 15W40", "2,5 litres"],
                ["Liquide de refroidissement", "Antigel sans silicate (G11 bleu/vert ou G12+)", "~6,0 litres"],
                ["Huile boîte de vitesses (012 AKM)", "SAE 75W90 synthétique norme API GL-4", "~2,25 litres (7 mm sous bord)"],
                ["Liquide de frein & embrayage", "DOT 4 (remplacement tous les 2 ans)", "~0,5 litre (purge)"],
                ["Carburant", "Sans Plomb 98 (SP98 recommandé) ou SP95", "68 litres"]
              ]
            }
          ]
        },
        {
          page: "005",
          title: "Plan d'entretien périodique d'atelier",
          type: "fiche",
          summary: "Fréquences de révision adaptées à un véhicule de collection roulant régulièrement.",
          blocks: [
            {
              kind: "table",
              title: "Périodicités recommandées",
              headers: ["Opération", "Kilométrage / Durée", "Remarque atelier"],
              rows: [
                ["Vidange huile moteur + filtre", "7 500 à 10 000 km ou 1 an", "Joint cuivre neuf sur bouchon M14 (30 Nm)"],
                ["Filtre à air & filtre à essence", "15 000 km ou 2 ans", "Filtre essence transparent en ligne avant pompe"],
                ["Bougies d'allumage", "15 000 à 20 000 km", "Bosch W7DTC ou NGK BUR6ET (écartement 0,8 mm)"],
                ["Liquide de frein (circuit + embrayage)", "Tous les 2 ans", "Purger aussi le récepteur d'embrayage"],
                ["Liquide de refroidissement", "Tous les 2 à 3 ans", "Vérifier le bouchon du vase et le thermocontact"],
                ["Courroie de distribution + galet", "60 000 km ou 5 ans max", "Contrôler pompe à eau et jeu des galets"],
                ["Huile de boîte 5 vitesses", "60 000 km ou contrôle annuel", "Niveau à 7 mm sous le bord du trou de remplissage (clé Allen 17)"]
              ]
            }
          ]
        },
        {
          page: "006",
          title: "Couples de serrage types (Moteur & Châssis)",
          type: "fiche",
          summary: "Valeurs de serrage officielles RTA / VAG en Nm pour la visserie de l'Audi 80 B3.",
          blocks: [
            {
              kind: "table",
              title: "Couples de serrage usuels",
              headers: ["Assemblage", "Couple (Nm)"],
              rows: [
                ["Boulons de roue (jantes tôle ou alu)", "110 Nm"],
                ["Bouchon de vidange huile moteur", "30 Nm"],
                ["Bougies d'allumage dans culasse alu", "25 Nm"],
                ["Cache-culbuteurs (écrous M6)", "10 Nm"],
                ["Pignon de vilebrequin", "200 Nm"],
                ["Poulie d'arbre à cames / arbre intermédiaire", "80 Nm"],
                ["Galet tendeur de distribution", "45 Nm"],
                ["Volant moteur (avec produit de scellement)", "75 Nm"],
                ["Étriers AV sur chape (Girling / Teves)", "35 Nm (Girling) / 25 Nm (Teves)"],
                ["Support d'étrier AV sur porte-fusée", "125 Nm"],
                ["Maître-cylindre sur servofrein", "25 Nm"],
                ["Rotule de direction sur biellette / levier", "35 Nm"],
                ["Bouchon vidange / niveau boîte 012", "25 Nm"]
              ]
            }
          ]
        }
      ]
    },
    {
      id: "famille-1",
      code: "Famille 1",
      title: "Moteur 1.8S (NE) — Mécanique, Distribution & Refroidissement",
      pagesRange: "Pages 007 – 008 & 017 – 024",
      pages: [
        {
          page: "007",
          title: "Données moteur NE : alésage, course, allumage, refroidissement",
          type: "rta",
          rtaKey: "moteurDonnees",
          summary: "Planche RTA officielle des caractéristiques générales moteur, cotes et valeurs de base.",
          blocks: [
            {
              kind: "table",
              title: "Synthèse technique directe — Moteur NE 1.8S (90 ch)",
              headers: ["Caractéristique", "Valeur officielle"],
              rows: [
                ["Type / Code moteur", "4 cylindres en ligne — Code NE (marqué 'L' sur arbre à cames)"],
                ["Cylindrée", "1 781 cm³ (Alésage 81,0 mm × Course 86,4 mm)"],
                ["Rapport volumétrique", "9,0 : 1 (Essence SP98 / SP95)"],
                ["Puissance / Couple", "66 kW (90 ch DIN) à 5 200 tr/min — 150 Nm à 3 300 tr/min"],
                ["Ordre d'allumage", "1 - 3 - 4 - 2 (cylindre n°1 côté distribution/avant)"],
                ["Jeu aux soupapes", "Rattrapage hydraulique automatique (aucun réglage)"],
                ["Thermostat refroidissement", "Début d'ouverture 85 °C — Pleine ouverture 105 °C (course 7 mm)"],
                ["Thermocontact ventilateur", "Enclenchement 92 à 97 °C — Arrêt 84 à 91 °C"],
                ["Manocontacts huile", "0,3 bar (isolant brun) et 1,8 bar à 2 100 tr/min (isolant blanc)"],
                ["Courroie alternateur / pompe à eau", "Gates 9,5 × 950 La (flexion 10 à 15 mm sous pression pouce)"]
              ]
            }
          ]
        },
        {
          page: "008",
          title: "Contrôles mise au point moteur & couples de serrage",
          type: "rta",
          rtaKey: "miseAuPoint",
          summary: "Planche RTA des contrôles de compression, calage et couples de serrage détaillés du bloc."
        },
        {
          page: "017",
          title: "Réglages moteur & courroie de distribution",
          type: "rta",
          rtaKey: "distribution",
          summary: "Procédure RTA officielle de dépose/pose et calage de la courroie de distribution.",
          diagramSvg: "timing_ne",
          blocks: [
            {
              kind: "steps",
              title: "Repères de calage PMH cylindre n°1 (Moteur NE)",
              items: [
                "Vilebrequin / Volant moteur : aligner le repère '0' (ou trait) gravé sur le volant moteur face au repère fixe dans la fenêtre de cloche d'embrayage.",
                "Arbre à cames : le point ou trait gravé sur la face arrière/avant de la poulie d'arbre à cames doit être aligné au ras du plan supérieur de culasse / cache-culbuteurs côté droit.",
                "Arbre intermédiaire (allumeur) : déposer la tête d'allumeur et vérifier que le doigt d'allumeur pointe exactement vers le repère du cylindre n°1 gravé sur le bord du corps d'allumeur.",
                "Tension de courroie : le brin long (entre poulie arbre à cames et arbre intermédiaire) doit pouvoir être vrillé à 90° entre le pouce et l'index, sans plus."
              ]
            }
          ]
        },
        {
          page: "018",
          title: "Distribution & culasse (repères et pignons)",
          type: "rta",
          fileDirect: "docs/rta/018_distribution-culasse.jpg",
          summary: "Planche RTA complémentaire sur l'arbre à cames, l'arbre intermédiaire et les repères PMH."
        },
        {
          page: "019",
          title: "Culasse : dépose, contrôles & ordre de serrage",
          type: "rta",
          rtaKey: "culasse",
          summary: "Ordre de desserrage/serrage en spirale de la culasse et tolérances de planéité.",
          blocks: [
            {
              kind: "table",
              title: "Serrage culasse Moteur NE (Vis neuves obligatoires)",
              headers: ["Passe", "Couple / Angle", "Ordre de serrage"],
              rows: [
                ["1re passe", "40 Nm", "En escargot du centre vers les extrémités (vis 1 à 10)"],
                ["2e passe", "60 Nm", "Même ordre (1 à 10)"],
                ["3e passe", "+ 90° (1/4 de tour)", "Même ordre (1 à 10)"],
                ["4e passe", "+ 90° (1/4 de tour)", "Même ordre (1 à 10) — Aucun resserrage ultérieur requis"]
              ]
            }
          ]
        },
        {
          page: "020",
          title: "Poussoirs hydrauliques & soupapes",
          type: "fiche",
          summary: "Contrôle du jeu des poussoirs hydrauliques et remplacement des joints de queue de soupape.",
          blocks: [
            {
              kind: "steps",
              title: "Contrôle des poussoirs hydrauliques (moteur chaud)",
              items: [
                "Faire tourner le moteur jusqu'à déclenchement du moto-ventilateur, puis couper le contact.",
                "Déposer le couvre-culasse et tourner le vilebrequin pour placer la came du cylindre contrôlé vers le haut.",
                "Appuyer fermement sur le poussoir avec une cale en bois ou plastique (ne pas rayer la surface).",
                "Si le jeu entre came et poussoir dépasse 0,1 mm avant résistance ferme, le poussoir fuit et doit être remplacé.",
                "Après pose de poussoirs neufs, attendre au moins 30 minutes avant de démarrer pour éviter tout contact soupape/piston."
              ]
            }
          ]
        },
        {
          page: "021",
          title: "Bloc-cylindres & équipage mobile",
          type: "fiche",
          summary: "Cotes d'alésage, segments, coussinets de bielles et vilebrequin moteur NE.",
          blocks: [
            {
              kind: "table",
              title: "Cotes nominales équipage mobile NE (1 781 cm³)",
              headers: ["Élément", "Cote d'origine"],
              rows: [
                ["Alésage cylindres (nominal)", "81,01 mm (cotes réparation +0,25 / +0,50 mm)"],
                ["Diamètre tourillons vilebrequin", "54,00 mm (couple chapeaux paliers : 65 Nm)"],
                ["Diamètre manetons bielles", "47,80 mm (chapeaux bielles : 30 Nm + 180° vis neuves)"],
                ["Jeu à la coupe (feu / étanchéité / racleur)", "0,30 à 0,45 mm (feu/étanch.) — 0,25 à 0,45 mm (racleur) — Maxi 1,0 mm"]
              ]
            }
          ]
        },
        {
          page: "022",
          title: "Dépose-repose de l'ensemble moteur / boîte",
          type: "fiche",
          summary: "Méthode de dépose par le dessus (ou avec face avant démontée) sur Audi 80 B3.",
          blocks: [
            {
              kind: "list",
              title: "Points clés avant levage moteur",
              items: [
                "Débrancher la batterie, vidanger le liquide de refroidissement et déposer le radiateur + face avant supérieure.",
                "Déposer le capot moteur (ou le placer en position verticale atelier) et débrancher le faisceau allumage/alternateur/sondes.",
                "Désaccoupler les deux cardans côté flasques de boîte et la tringlerie de vitesses.",
                "Soutenir le berceau/boîte avant de desserrer les deux supports moteur latéraux."
              ]
            }
          ]
        },
        {
          page: "023",
          title: "Circuit de graissage & pression d'huile",
          type: "rta",
          rtaKey: "graissage",
          summary: "Pompe à huile, filtre et capteurs de pression 0,3 bar / 1,8 bar."
        },
        {
          page: "024",
          title: "Circuit de refroidissement & purge",
          type: "rta",
          rtaKey: "refroidissement",
          summary: "Thermostat, pompe à eau, vase d'expansion, radiateur et méthode de purge."
        }
      ]
    },
    {
      id: "famille-2",
      code: "Famille 2",
      title: "Alimentation, Carburation (Keihin KS2) & Échappement",
      pagesRange: "Pages 010 – 014 & 025",
      pages: [
        {
          page: "010",
          title: "Alimentation & calage carburateur Keihin 26-30 DC",
          type: "rta",
          rtaKey: "carburateur10",
          summary: "Planche RTA sur le circuit d'alimentation essence et les réglages de base.",
          blocks: [
            {
              kind: "table",
              title: "Valeurs de réglage — Carburateur Keihin 26-30 DC (026 129 016 N)",
              headers: ["Paramètre", "1er corps", "2e corps"],
              rows: [
                ["Diffuseur", "20", "26"],
                ["Gicleur principal", "110", "150"],
                ["Ajutage d'automaticité", "90", "120"],
                ["Gicleur de ralenti / Ajutage d'air", "52 / 115", "—"],
                ["Niveau de cuve / Pointeau", "9,0 ± 1 mm / 2,5", "—"],
                ["Entrebâillement volet de départ", "4,6 ± 0,15 mm", "—"],
                ["Ralenti accéléré à froid", "3 200 ± 200 tr/min", "—"],
                ["Régime de ralenti à chaud", "900 ± 50 tr/min", "—"],
                ["Teneur en CO", "1,0 ± 0,5 %", "—"]
              ]
            }
          ]
        },
        {
          page: "011",
          title: "Carburateur Keihin : fonctionnement & schémas",
          type: "rta",
          rtaKey: "carburateur11",
          summary: "Schémas internes des circuits de ralenti, progression, 2e corps à dépression et starter."
        },
        {
          page: "012",
          title: "Carburateur Keihin : vue éclatée complète",
          type: "rta",
          rtaKey: "carburateur12",
          summary: "Éclaté complet de toutes les pièces, joints, membranes et gicleurs du carburateur Keihin."
        },
        {
          page: "013",
          title: "Réglages détaillés carburateur Keihin",
          type: "rta",
          fileDirect: "docs/rta/013_carburateur-keihin-reglages-injection.jpg",
          summary: "Planche RTA sur la vis de richesse, le régime de ralenti et les contrôles d'entrebâillement."
        },
        {
          page: "014",
          title: "Semelle d'embase caoutchouc & durites de dépression",
          type: "fiche",
          summary: "Diagnostic des prises d'air sur Keihin KS2 (ralenti instable, calage, trous à l'accélération).",
          blocks: [
            {
              kind: "steps",
              title: "Contrôle rapide d'étanchéité de l'embase",
              items: [
                "Moteur tournant au ralenti à chaud, saisir délicatement la boîte à air et la bouger latéralement.",
                "Si le régime moteur varie ou s'effondre immédiatement, la semelle caoutchouc entre le carburateur et le collecteur d'admission est fissurée.",
                "Inspecter les petites durites tressées de dépression à l'arrière du carburateur (vers capsule d'allumeur, volet d'air chaud et servofrein).",
                "Remplacer systématiquement toute durite craquelée ou durcie par de la durite carburant/dépression 3,2 mm ou 4 mm neuve."
              ]
            }
          ]
        },
        {
          page: "015",
          title: "Réservoir à carburant, goulotte & jauge à flotteur",
          type: "fiche",
          summary: "Accès à la trappe de jauge dans le coffre et contrôle de résistance du capteur de niveau.",
          blocks: [
            {
              kind: "list",
              title: "Contrôle de la jauge à carburant (réservoir 68 L)",
              items: [
                "Trappe de visite ronde située dans le coffre (sous le tapis, côté droit / derrière la banquette).",
                "Connecteur 2 ou 3 broches sur puits de jauge : résistance variable entre ~40 Ω (plein) et ~280 Ω (réserve / vide).",
                "Si l'aiguille reste à zéro alors que la jauge est bonne : vérifier le régulateur 10V J6 au dos du combiné (Page 074C)."
              ]
            }
          ]
        },
        {
          page: "025",
          title: "Ligne d'échappement",
          type: "rta",
          rtaKey: "echappement",
          summary: "Planche RTA : collecteur, tube de descente, silencieux intermédiaire et silencieux arrière."
        }
      ]
    },
    {
      id: "famille-3",
      code: "Famille 3",
      title: "Embrayage, Boîte 5 Vitesses (AKM) & Cardans",
      pagesRange: "Pages 026 – 030 & 037",
      pages: [
        {
          page: "026",
          title: "Embrayage : caractéristiques & dépose",
          type: "rta",
          fileDirect: "docs/rta/026_embrayage-caracteristiques.jpg",
          summary: "Planche RTA : dimensions du disque, mécanisme à diaphragme et couples de serrage."
        },
        {
          page: "027",
          title: "Commande hydraulique d'embrayage & purge",
          type: "rta",
          rtaKey: "embrayage",
          summary: "Planche RTA : cylindre émetteur, récepteur sur boîte et purge du circuit hydraulique."
        },
        {
          page: "028",
          title: "Boîte mécanique 5 vitesses type 012 (Code AKM)",
          type: "fiche",
          summary: "Spécifications, vidange et contrôle de niveau de la boîte longitudinale 012.",
          blocks: [
            {
              kind: "table",
              title: "Caractéristiques boîte AKM (Type 012)",
              headers: ["Élément", "Valeur / Spécification"],
              rows: [
                ["Type / Code", "Boîte mécanique 5 vitesses + MA — Type 012, code AKM"],
                ["Huile préconisée", "~2,25 litres de SAE 75W90 norme API GL-4 (ne pas mettre de GL-5 agressif pour les synchros laiton)"],
                ["Bouchon de vidange", "Sous le carter différentiel (empreinte 6 pans creux 17 mm ou XZN 16 avec téton)"],
                ["Bouchon de niveau / remplissage", "Sur le flanc gauche de la boîte (6 pans creux 17 mm) — Niveau à ~7 mm sous le bord inférieur de l'orifice"],
                ["Couple de serrage bouchons", "25 Nm"]
              ]
            },
            {
              kind: "warning",
              text: "Toujours débloquer le bouchon de remplissage/niveau AVANT de vidanger la boîte, pour être sûr de pouvoir la remplir ensuite !"
            }
          ]
        },
        {
          page: "029",
          title: "Dépose-repose de la boîte de vitesses (012 / AKM)",
          type: "fiche",
          summary: "Points clés pour déposer la boîte longitudinale sans déposer le moteur.",
          blocks: [
            {
              kind: "list",
              title: "Couples et étapes principales",
              items: [
                "Débrancher la batterie, déposer le démarreur et le récepteur hydraulique d'embrayage (sans ouvrir le circuit).",
                "Désaccoupler les deux cardans côté flasques de boîte (vis XZN M8) et la tringlerie de commande.",
                "Maintenir l'arrière du moteur avec une traverse ou cric, déposer les vis de tour de cloche (M8 : 25 Nm, M10 : 45 Nm, M12 : 65 Nm) et le support arrière de boîte (40 Nm)."
              ]
            }
          ]
        },
        {
          page: "030",
          title: "Tringlerie de commande des vitesses",
          type: "fiche",
          summary: "Réglage de l'alignement du levier de vitesses lorsque la 1re ou la marche arrière accroche.",
          blocks: [
            {
              kind: "steps",
              title: "Procédure de réglage rapide",
              items: [
                "Placer le levier de vitesses au point mort.",
                "Soulever le soufflet de levier dans l'habitacle et vérifier l'état de la rotule plastique et de ses bagues.",
                "Desserrer légèrement le collier de serrage de la tringle reliant le levier au sélecteur de boîte (accessible par dessous).",
                "Centrer le levier légèrement incliné vers la droite (~3°) au point mort, puis resserrer le collier à 20 Nm.",
                "Tester l'engagement souple de toutes les vitesses (1 à 5 et MA) moteur arrêté puis moteur tournant."
              ]
            }
          ]
        },
        {
          page: "037",
          title: "Transmissions & Cardans",
          type: "rta",
          rtaKey: "cardans",
          summary: "Planche RTA : dépose des arbres de transmission, soufflets et joints homocinétiques."
        }
      ]
    },
    {
      id: "famille-4",
      code: "Famille 4",
      title: "Train Avant, Suspension & Direction Mécanique",
      pagesRange: "Pages 038 – 040 & 058 – 060",
      pages: [
        {
          page: "038",
          title: "Direction mécanique (sans assistance) & référence colonne",
          type: "rta",
          rtaKey: "direction",
          summary: "Caractéristiques de votre direction mécanique (Note : la planche RTA 038 ci-dessous illustre la variante assistée pour la colonne).",
          blocks: [
            {
              kind: "table",
              title: "Spécifications Direction Mécanique (Audi 80 1.8S sans DA)",
              headers: ["Élément", "Donnée constructeur"],
              rows: [
                ["Type", "Crémaillère mécanique fixée sur tablier (sans pompe ni huile)"],
                ["Nombre de tours de volant (butée à butée)", "4,2 tours"],
                ["Couple fixation crémaillère sur caisse", "40 Nm"],
                ["Couple rotule de direction sur jambe de force", "35 Nm"]
              ]
            }
          ]
        },
        {
          page: "039",
          title: "Réglage du jeu de crémaillère & biellettes",
          type: "fiche",
          summary: "Suppression d'un claquement dans la direction et remplacement des soufflets.",
          blocks: [
            {
              kind: "steps",
              title: "Contrôle et réglage de crémaillère",
              items: [
                "Braquer les roues en ligne droite et contrôler le jeu en secouant la barre d'accouplement près du tablier.",
                "En cas de jeu léger au point milieu, visser progressivement la vis de réglage de poussoir sur le boîtier de crémaillère jusqu'à disparition du jeu, sans créer de point dur en braquage.",
                "Contrôler l'intégrité des soufflets accordéons et du silentbloc d'amortissement de barre."
              ]
            }
          ]
        },
        {
          page: "040",
          title: "Direction assistée (Documentation de référence)",
          type: "rta",
          fileDirect: "docs/rta/040_direction-assistee.jpg",
          summary: "Planche RTA informative (non équipée sur votre véhicule)."
        },
        {
          page: "058",
          title: "Jambe de force avant (Amortisseurs & Ressorts)",
          type: "rta",
          rtaKey: "jambeForce",
          summary: "Planche RTA : dépose de la jambe de force McPherson, cartouche d'amortisseur et coupelle."
        },
        {
          page: "059",
          title: "Train avant : bras inférieurs, rotules & silentblocs",
          type: "rta",
          rtaKey: "trainAvant",
          summary: "Planche RTA : triangles inférieurs, barre stabilisatrice, biellettes et berceau."
        },
        {
          page: "060",
          title: "Géométrie du train avant & roulement de moyeu",
          type: "rta",
          fileDirect: "docs/rta/060_train-avant-geometrie-roulement-moyeu-avant.jpg",
          summary: "Valeurs officielles de parallélisme / carrossage et extraction du roulement avant à la presse."
        }
      ]
    },
    {
      id: "famille-5",
      code: "Famille 5",
      title: "Train Arrière & Roulements Arrière",
      pagesRange: "Pages 061 – 063",
      pages: [
        {
          page: "061",
          title: "Essieu arrière de torsion & barre Panhard",
          type: "fiche",
          summary: "Architecture de l'essieu arrière en V à bras tirés et contrôle des silentblocs.",
          blocks: [
            {
              kind: "list",
              title: "Points de contrôle sur essieu arrière B3",
              items: [
                "Silentblocs d'articulation principaux : vérifier l'absence de craquelures profondes ou de jeu latéral au levier.",
                "Barre Panhard transversale : assure le guidage latéral de l'essieu ; contrôler ses deux silentblocs d'extrémité.",
                "Serrage des boulons de silentblocs : toujours effectuer le blocage final au couple voiture posée sur ses roues (assiette normale) pour ne pas vriller le caoutchouc."
              ]
            }
          ]
        },
        {
          page: "062",
          title: "Amortisseurs et ressorts arrière",
          type: "fiche",
          summary: "Dépose des combinés arrière par le coffre et le train arrière.",
          blocks: [
            {
              kind: "steps",
              title: "Remplacement des combinés arrière",
              items: [
                "Soulever l'arrière du véhicule et soutenir l'essieu avec un cric rouleur pour éviter de tirer sur les flexibles de frein.",
                "Dans le coffre (ou derrière le dossier de banquette), retirer les caches caoutchouc et dévisser les 2 vis supérieures de la coupelle.",
                "Déposer le boulon inférieur reliant l'amortisseur au bras d'essieu.",
                "Sortir le combiné, comprimer le ressort avec un compresse-ressorts homologué avant de dévisser l'écrou central de tige."
              ]
            }
          ]
        },
        {
          page: "063",
          title: "Roulements coniques de roues arrière",
          type: "fiche",
          summary: "Réglage précis du jeu axial des roulements arrière sur tambours.",
          blocks: [
            {
              kind: "steps",
              title: "Méthode VAG de réglage du jeu de roulement conique",
              items: [
                "Après remontage des roulements coniques bien graissés (graisse haute température au lithium), serrer l'écrou crénelé sans forcer tout en faisant tourner le tambour pour placer les rouleaux.",
                "Desserrer l'écrou d'environ 1/8 de tour.",
                "Le jeu est correct lorsque la rondelle d'appui située juste sous l'écrou peut encore être glissée latéralement à la main avec la pointe d'un tournevis plat (sans faire levier).",
                "Monter une goupille fendue NEUVE dans la cage de sécurité et reposer le cabochon pare-poussière."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "famille-6",
      code: "Famille 6",
      title: "Freinage, Frein à Main, Roues & Pneus",
      pagesRange: "Pages 064 – 071",
      pages: [
        {
          page: "064",
          title: "Système de freinage : caractéristiques générales",
          type: "rta",
          rtaKey: "freins",
          summary: "Planche RTA : cotes disques avant, tambours arrière, épaisseurs mini et servofrein.",
          blocks: [
            {
              kind: "table",
              title: "Cotes officielles de freinage (Audi 80 B3 1.8S)",
              headers: ["Élément", "Valeur nominale", "Limite d'usure / Couple"],
              rows: [
                ["Disques avant pleins (Girling / Teves)", "Ø 256 mm × épaisseur 13 mm", "Épaisseur mini : 11 mm (voile maxi 0,03 mm)"],
                ["Plaquettes avant", "Épaisseur totale 14 mm", "Épaisseur mini : 2 mm"],
                ["Tambours arrière (Fag)", "Ø 200 mm", "Ø maxi alésage : 201 mm (garnitures mini 2,5 mm)"],
                ["Cylindres de roue arrière", "Ø 19,05 mm", "Vis fixation plateau : 10 Nm"],
                ["Maître-cylindre / Servofrein", "Tandem Ø 22,2 mm / Isovac 9\"", "Fixation maître-cylindre : 25 Nm"],
                ["Limiteur / Frein de stationnement", "Limiteur double non asservi à la charge", "Course mini levier : 2 crans"]
              ]
            }
          ]
        },
        {
          page: "065",
          title: "Freins avant : disques & plaquettes",
          type: "rta",
          rtaKey: "plaquettes",
          summary: "Planche RTA : remplacement des plaquettes, graissage des colonnettes et contrôle des disques."
        },
        {
          page: "066",
          title: "Freins arrière à tambours",
          type: "fiche",
          summary: "Démontage des tambours, contrôle des cylindres de roue et rattrapage automatique.",
          blocks: [
            {
              kind: "steps",
              title: "Ouverture et réfection d'un tambour arrière",
              items: [
                "Détendre le câble de frein à main (ou repousser le coin de rattrapage automatique par un trou de boulon de roue avec un tournevis fin).",
                "Déposer le cabochon central, la goupille et l'écrou de moyeu, puis extraire le tambour.",
                "Soulever délicatement les cache-poussières du cylindre de roue : toute trace d'humidité impose le remplacement des deux cylindres.",
                "Nettoyer au nettoyant frein (sans souffler les poussières), contrôler l'épaisseur des garnitures (mini 2,5 mm) et graisser très légèrement les points d'appui sur le flasque."
              ]
            }
          ]
        },
        {
          page: "070",
          title: "Frein de stationnement & purge du circuit hydraulique",
          type: "rta",
          rtaKey: "purgeFrein",
          summary: "Planche RTA : réglage du levier de frein à main et ordre officiel de purge des 4 roues."
        },
        {
          page: "071",
          title: "Roues, Pneus & Pressions (175/70 R14)",
          type: "fiche",
          summary: "Dimensions pneumatiques homologuées et pressions de gonflage à froid.",
          blocks: [
            {
              kind: "table",
              title: "Pneumatiques & Pressions (1.8S)",
              headers: ["Montage", "Pression AV / AR (charge normale)", "Pression AV / AR (pleine charge)", "Couple boulons"],
              rows: [
                ["175/70 R14 84T (jantes tôle 5.5Jx14)", "2,0 bar / 2,0 bar", "2,2 bar / 2,5 bar", "110 Nm"],
                ["195/60 R14 86H (option)", "2,0 bar / 2,0 bar", "2,2 bar / 2,5 bar", "110 Nm"]
              ]
            }
          ]
        }
      ]
    },
    {
      id: "famille-7",
      code: "Famille 7",
      title: "Pédalier & Commandes",
      pagesRange: "Pages 071B – 071C",
      pages: [
        {
          page: "071B",
          title: "Pédalier & contacteur de feux stop",
          type: "fiche",
          summary: "Réglage du contacteur de stop et contrôle des axes de pédales.",
          blocks: [
            {
              kind: "list",
              title: "Réglage du contacteur de feux stop",
              items: [
                "Situé au-dessus de la pédale de frein (accessible en déposant le vide-poches conducteur).",
                "Le contacteur à poussoir se règle par encliquetage : tirer la tige blanche vers la pédale, puis relâcher la pédale au repos.",
                "Vérifier que les feux stop s'allument dès le début d'enfoncement (5 à 10 mm de course) et s'éteignent franchement au repos."
              ]
            }
          ]
        },
        {
          page: "071C",
          title: "Câble d'accélérateur",
          type: "fiche",
          summary: "Passage et réglage de garde du câble sur carburateur Keihin KS2.",
          blocks: [
            {
              kind: "steps",
              title: "Réglage de la garde du câble",
              items: [
                "Pédale d'accélérateur enfoncée à fond par un assistant, vérifier que le papillon du 1er et du 2e corps atteignent bien la butée pleine charge sans forcer sur le câble.",
                "Ajuster le clip cranté sur la gaine près du support de carburateur pour laisser environ 1 mm de mou au repos (afin que le papillon revienne toujours sur sa vis de ralenti)."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "famille-8",
      code: "Famille 8",
      title: "Carrosserie, Habitacle, Ouvrants & Chauffage",
      pagesRange: "Pages 124 – 130",
      pages: [
        {
          page: "124",
          title: "Éléments extérieurs : pare-chocs, baguettes & rétroviseurs",
          type: "fiche",
          summary: "Dépose des boucliers avant/arrière noirs, calandre et baguettes latérales.",
          blocks: [
            {
              kind: "list",
              title: "Fixations extérieures Audi 80 B3",
              items: [
                "Calandre avant : fixée par clips supérieurs sous le capot et languettes inférieures.",
                "Pare-chocs avant : maintenu par 2 gros boulons verticaux accessibles par les grilles inférieures et glissières latérales sur les ailes.",
                "Pare-chocs arrière : boulons accessibles depuis l'intérieur du coffre (derrière les garnitures latérales) + glissières sur ailes arrière.",
                "Baguettes latérales noires : glissées sur des agrafes plastiques clipsées dans la rainure d'origine de la tôle."
              ]
            }
          ]
        },
        {
          page: "125",
          title: "Chauffage, ventilation & implantation des faisceaux",
          type: "rta",
          rtaKey: "chauffage",
          summary: "Planche RTA : bloc chauffage, moteur de soufflante, résistance de vitesses et passage de faisceaux."
        },
        {
          page: "126",
          title: "Dépose des garnitures de portes (panneaux intérieurs)",
          type: "fiche",
          summary: "Méthode sans casse pour accéder aux moteurs de lève-vitres et serrures.",
          blocks: [
            {
              kind: "steps",
              title: "Démontage d'un panneau de porte Audi 80 B3",
              items: [
                "Dévisser le loquet de verrouillage en haut du panneau (filetage plastique).",
                "Déclipser délicatement le cache de la poignée de tirage pour accéder aux 2 grosses vis cruciformes.",
                "Retirer les 2 petites vis situées en haut des champs avant et arrière du panneau.",
                "Déclipser l'entourage de poignée d'ouverture intérieure (glisser vers l'avant ou l'arrière selon porte) et décrocher le câble.",
                "Soulever tout le panneau verticalement vers le haut (ne pas tirer vers soi : ce sont des crochets vers le bas, pas des clips à pression !)."
              ]
            }
          ]
        },
        {
          page: "128",
          title: "Verrouillage centralisé pneumatique",
          type: "fiche",
          summary: "Fonctionnement du système à air comprimé/dépression Audi 80 B3.",
          blocks: [
            {
              kind: "list",
              title: "Architecture du verrouillage centralisé",
              items: [
                "Pompe bi-pression électrique logée dans la mousse insonorisante à droite dans le coffre.",
                "Réseau de tubulures rigides vertes/bleues allant aux 4 portes, au coffre et à la trappe à carburant.",
                "En cas de pompe qui tourne longtemps (> 4 secondes) après fermeture : fuite d'air sur un soufflet d'actionneur de porte ou raccord caoutchouc dans le passage de porte."
              ]
            }
          ]
        },
        {
          page: "129",
          title: "Lève-vitres électriques : mécanique et moteur",
          type: "fiche",
          summary: "Remplacement du mécanisme à câble / moteur électrique dans la porte.",
          blocks: [
            {
              kind: "steps",
              title: "Intervention sur lève-vitre électrique",
              items: [
                "Déposer le panneau de porte (Page 126) et décoller proprement le film pare-vapeur en plastique.",
                "Descendre la vitre à mi-course (ou la caler avec du ruban adhésif large sur l'encadrement) pour accéder aux 2 pinces de fixation du verre.",
                "Débrancher le connecteur 2 broches du moteur et dévisser les fixations du rail de guidage.",
                "Contrôler en direct sur 12V la rotation du moteur et lubrifier les glissières de vitre au spray silicone."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "famille-9",
      code: "Famille 9",
      title: "Électricité Générale, Allumage, Combiné & Schémas",
      pagesRange: "Pages 009, 072 – 123 & Planches ETKA",
      pages: [
        {
          page: "009",
          title: "Allumage transistorisé TSZ-H & allumeur",
          type: "rta",
          rtaKey: "allumage",
          summary: "Planche RTA : contrôles du capteur Hall, module TSZ-H et bobine d'allumage.",
          blocks: [
            {
              kind: "table",
              title: "Valeurs d'allumage Moteur NE (TSZ-H)",
              headers: ["Paramètre", "Valeur constructeur"],
              rows: [
                ["Allumeur / Module TSZ-H", "Allumeur Bosch 0237 020 153 — Module Bosch 0227 100 143 (depuis 11-86)"],
                ["Calage initial (au ralenti)", "18° ± 1° avant PMH (dépression débranchée, selon RTA 008)"],
                ["Bougies préconisées", "Bosch W7 DTC, Beru 14-7 DTU ou Champion N7 BYC (écartement 0,7 à 0,9 mm)"],
                ["Bobine d'allumage", "Bosch 0221 122 380 ou Magneti-Marelli"],
                ["Résistance primaire bobine (bornes 1 et 15)", "0,52 à 0,76 Ω"],
                ["Résistance secondaire bobine (bornes 15 et 4 HT)", "2,4 à 3,5 kΩ"],
                ["Résistance doigt d'allumeur (rotor)", "1,0 kΩ (± 20 %)"]
              ]
            }
          ]
        },
        {
          page: "009B",
          title: "ETKA 905-00 : Allumage TSZ-H (Références OEM)",
          type: "etka",
          etkaId: "905-00",
          summary: "Planche éclatée officielle ETKA avec références pièces VAG."
        },
        {
          page: "072",
          title: "Équipement électrique : tableau des fusibles (1 à 21) & relais",
          type: "rta",
          rtaKey: "fusibles",
          summary: "Planche RTA officielle des fusibles S1 à S21 et des relais en boîte d'auvent.",
          blocks: [
            {
              kind: "table",
              title: "Affectation des fusibles S1 à S21 (Boîte d'auvent Audi 80 B3)",
              headers: ["N°", "Calibre", "Circuits protégés"],
              rows: [
                ["1", "15 A (Bleu)", "Projecteurs antibrouillard*, feu de brouillard AR (E18)"],
                ["2", "15 A (Bleu)", "Centrale clignotante"],
                ["3", "25 A (Blanc)", "Avertisseur sonore, feu stop"],
                ["4", "15 A (Bleu)", "Montre, éclairage coffre, plafonnier, miroir de courtoisie*, allume-cigare AV, radio, ordinateur de bord*, lecteur de carte*"],
                ["5", "30 A (Vert)", "Motoventilateur (pleine charge)"],
                ["6", "5 A (Marron)", "Feu de position DROIT AV et AR"],
                ["7", "5 A (Marron)", "Feu de position GAUCHE AV et AR"],
                ["8", "10 A (Rouge)", "Projecteur route DROIT et témoin"],
                ["9", "10 A (Rouge)", "Projecteur route GAUCHE"],
                ["10", "10 A (Rouge)", "Projecteur code DROIT"],
                ["11", "10 A (Rouge)", "Projecteur code GAUCHE"],
                ["12", "15 A (Bleu)", "Combiné d'instruments, feu de recul, régulateur de vitesse*, ordinateur de bord*, dispositif ABS*"],
                ["13", "15 A (Bleu)", "Pompe à carburant (moteur injection)"],
                ["14", "5 A (Marron)", "Feu de plaque de police, éclairage compartiment moteur, éclairage boîte à gants"],
                ["15", "25 A (Blanc)", "Essuie-glace"],
                ["16", "30 A (Vert)", "Dégivrage de lunette AR et des rétroviseurs*"],
                ["17", "30 A (Vert)", "Ventilateur de chauffage (et lève-vitres selon montage)"],
                ["18", "5 A (Marron)", "Rétroviseurs extérieurs (Audi 90)"],
                ["19", "10 A (Rouge)", "Rétroviseurs extérieurs (Audi 80), verrouillage central"],
                ["20", "30 A (Vert)", "Motoventilateur (1re vitesse)"],
                ["21", "25 A (Blanc)", "Allume-cigare AR*"],
                ["22 / 24", "—", "Non utilisé"],
                ["23", "30 A (Vert)", "Sièges électriques*"],
                ["25", "30 A (Vert)", "Sièges chauffants*"]
              ]
            }
          ]
        },
        {
          page: "072B",
          title: "ETKA 937-00 : Centrale électrique, fusibles & relais",
          type: "etka",
          etkaId: "937-00",
          summary: "Planche éclatée officielle ETKA de la boîte à fusibles sous auvent."
        },
        {
          page: "073",
          title: "Alternateur & Démarreur",
          type: "rta",
          rtaKey: "alternateur",
          summary: "Planche RTA : contrôles de charge, régulateur, charbons et démontage démarreur."
        },
        {
          page: "074",
          title: "Essuie-glace, Combiné d'instruments & Projecteurs",
          type: "rta",
          rtaKey: "projecteursEssuieCombine",
          summary: "Planche RTA : dépose combiné, réglage des phares et moteur d'essuie-glace."
        },
        {
          page: "074B",
          title: "ETKA 919-00 : Combiné d'instruments & Stabilisateur J6",
          type: "etka",
          etkaId: "919-00",
          summary: "Planche éclatée officielle ETKA : compteur, jauge, J6 (TCA700Y) et prises T26."
        },
        {
          page: "074C",
          title: "Brochage complet des connecteurs T26 Jaune & T26a Bleu",
          type: "fiche",
          summary: "Correspondance broche par broche (1 à 26) des deux prises arrière du combiné d'instruments.",
          blocks: [
            {
              kind: "table",
              title: "Connecteur T26 — JAUNE (26 broches)",
              headers: ["Broche", "Fonction / Signal", "Type / Note"],
              rows: [
                ["1", "Alimentation éclairage cadrans (depuis commodo)", "+58 / Rhéostat"],
                ["2", "Masse sonde température liquide de refroidissement", "Signal G2"],
                ["3", "+15 après contact (alimentation générale combiné)", "+12V contact (Fusible S12)"],
                ["4", "Alimentation veilleuses / éclairage", "+58"],
                ["5", "Entrée variateur d'intensité (rhéostat)", "58b"],
                ["8", "Masse témoins clignotants / voyants", "Masse 31"],
                ["9", "Témoin clignotant gauche", "+12V pulsé"],
                ["10", "Alerte température / niveau liquide refroidissement", "Masse par sonde"],
                ["11", "Témoin défaut système de freinage", "Masse par contacteur niveau"],
                ["13", "Témoin charge alternateur (D+) / alerte eau", "Fil bleu D+"],
                ["19", "+30 permanent montre analogique", "+12V permanent (Fusible S4)"],
                ["22", "Signal compte-tours (depuis borne 1 bobine / TSZ-H)", "Impulsions moteur"],
                ["23", "Masse compte-tours", "Masse 31"],
                ["25", "Témoin frein à main tiré", "Masse par contacteur levier"]
              ]
            },
            {
              kind: "table",
              title: "Connecteur T26a — BLEU (26 broches)",
              headers: ["Broche", "Fonction / Signal", "Type / Note"],
              rows: [
                ["15", "Signal sonde jauge carburant (réservoir)", "Résistance variable vers masse"],
                ["16", "Alimentation stabilisée / témoins combiné", "Via régulateur J6 (10V) / +15"],
                ["17", "Témoin clignotant droit", "+12V pulsé"],
                ["18", "Sortie signal vitesse véhicule", "Selon équipement"],
                ["20", "Entrée capteur vitesse boîte (G22)", "Selon compteur"],
                ["21", "Masse générale éclairage cadrans & témoin plein phare", "Masse 31"],
                ["22", "Alimentation éclairage réglable (58b)", "+12V varié par rhéostat"]
              ]
            },
            {
              kind: "warning",
              text: "Si la jauge à essence ET le thermomètre d'eau tombent tous les deux à zéro simultanément, vérifier le régulateur de tension 10V J6 (composant 3 pattes TCA700Y vissé au dos du combiné) et ses soudures."
            }
          ]
        },
        {
          page: "075",
          title: "ETKA 959-00 & 945-00 : Interrupteurs console & Feux arrière",
          type: "etka",
          etkaId: "959-00",
          summary: "Planche éclatée officielle ETKA des interrupteurs console (E18 antibrouillard, E15 dégivrage, E3 warning)."
        },
        {
          page: "085",
          title: "Schéma électrique : Moto-ventilateur & Pression d'huile",
          type: "rta",
          rtaKey: "ventilateurPressionHuile",
          summary: "Schéma RTA officiel du circuit de ventilateur radiateur et des manocontacts d'huile."
        },
        {
          page: "088",
          title: "Schéma électrique : Feux de recul, Clignotants & Warning",
          type: "rta",
          rtaKey: "feuxReculClignotants",
          summary: "Schéma RTA officiel des clignotants, feux de détresse et contacteur de marche arrière."
        },
        {
          page: "091",
          title: "Schéma électrique : Combiné d'instruments & Éclairage",
          type: "rta",
          rtaKey: "instruments",
          summary: "Schéma RTA officiel complet du combiné d'instruments et des voyants d'alerte."
        },
        {
          page: "118",
          title: "Schéma électrique : Essuie-glaces & Lave-glace",
          type: "rta",
          rtaKey: "essuieGlace",
          summary: "Schéma RTA officiel du moteur d'essuie-glace, relais intermittent et pompe de lave-glace."
        },
        {
          page: "120",
          title: "Schéma électrique : Points de masse & Raccords faisceau",
          type: "rta",
          rtaKey: "masses",
          summary: "Schéma RTA officiel d'implantation des masses sur caisse et bloc moteur."
        },
        {
          page: "121",
          title: "Schéma électrique : Commandes & Moteurs d'options (Lève-vitres)",
          type: "rta",
          rtaKey: "commandesMoteursOptions",
          summary: "Schéma RTA officiel des circuits d'options électriques dont les lève-vitres."
        },
        {
          page: "122",
          title: "Schéma électrique : Antibrouillard arrière & Dégivrage lunette",
          type: "rta",
          rtaKey: "antibrouillard",
          summary: "Schéma RTA officiel des circuits E18 (antibrouillard) et E15 (lunette chauffante)."
        },
        {
          page: "123",
          title: "Légende des codes couleurs VAG & Bornes DIN normalisées",
          type: "fiche",
          summary: "Indispensable pour lire les schémas électriques allemands et RTA de l'Audi 80 B3.",
          blocks: [
            {
              kind: "table",
              title: "Codes couleurs des fils électriques VAG (Allemand -> Français)",
              headers: ["Code schéma", "Couleur", "Signification allemande"],
              rows: [
                ["sw", "Noir", "schwarz"],
                ["br", "Marron (Masse)", "braun"],
                ["ro / rt", "Rouge (+ Permanent)", "rot"],
                ["bl", "Bleu", "blau"],
                ["gn", "Vert", "grün"],
                ["ge", "Jaune", "gelb"],
                ["ws", "Blanc", "weiß"],
                ["gr", "Gris", "grau"],
                ["li / vi", "Violet / Lilas", "lila / violett"],
                ["sw/bl", "Noir liseré Bleu", "schwarz / blau (1re couleur = fil, 2e = liseré)"]
              ]
            },
            {
              kind: "table",
              title: "Repérage normalisé des bornes DIN",
              headers: ["Borne", "Signification électrique"],
              rows: [
                ["30", "+12V permanent direct batterie (avant contact)"],
                ["15", "+12V après contact (clé tournée, conservé pendant démarrage)"],
                ["X", "+12V déchargé (coupé pendant l'action du démarreur : phares, dégivrage, essuie-glaces)"],
                ["31", "Masse véhicule (négatif batterie / carrosserie)"],
                ["50", "Commande solénoïde de démarreur (position démarrage clé)"],
                ["58 / 58b", "Éclairage feux de position / 58b = éclairage cadrans via rhéostat"],
                ["56a / 56b", "Feux de route (56a) / Feux de croisement (56b)"],
                ["1 / 15 (bobine)", "1 = rupture/signal compte-tours | 15 = +12V bobine"],
                ["D+ / 61", "Témoin de charge alternateur"]
              ]
            }
          ]
        }
      ]
    }
  ]
};
