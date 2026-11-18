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
                ["Huile boîte de vitesses (012 AKM)", "SAE 75W90 synthétique norme API GL-4 (G90)", "2,35 litres (RTA p.44)"],
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
                "Arbre à cames : le point ou trait gravé sur la face arrière de la poulie d'arbre à cames doit être aligné au ras du plan de joint supérieur de culasse côté GAUCHE (conformément à la RTA 018).",
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
                ["4e passe", "+ 90° (1/4 de tour)", "Même ordre (1 à 10) — Aucun resserrage ultérieur requis"],
                ["Ordre exact des vis (vue dessus)", "Rangée arrière : 10 - 4 - 2 - 6 - 8", "Rangée avant : 7 - 5 - 1 - 3 - 9 (joint : repère 'Oben' vers le haut)"],
                ["Jeu maxi guides de soupapes", "1,0 mm (admission)", "1,3 mm (échappement)"]
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
          summary: "Thermostat (85/105 °C), pompe à eau, vase d'expansion, radiateur et vis de purge sur durite de chauffage.",
          blocks: [
            {
              kind: "steps",
              title: "Procédure officielle de vidange et purge sans bulles (RTA 023/024)",
              items: [
                "Vidange : moteur froid, ouvrir le bouchon du vase d'expansion et débrancher la durite inférieure de radiateur (ou déposer le boîtier de thermostat sous la pompe à eau).",
                "Remplissage : rebrancher les durites, ouvrir le chauffage habitacle à fond sur chaud, et desserrer la VIS DE PURGE en plastique située sur la durite supérieure de chauffage au niveau du tablier.",
                "Remplir lentement par le vase d'expansion (~6,0 L) jusqu'à ce que le liquide sorte sans bulles par la vis de purge, puis la refermer.",
                "Démarrer le moteur et laisser chauffer jusqu'au déclenchement du moto-ventilateur (92 à 97 °C), puis contrôler et compléter le niveau à froid."
              ]
            }
          ]
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
          title: "Réglages détaillés carburateur Keihin (Ralenti & Richesse CO)",
          type: "rta",
          fileDirect: "docs/rta/013_carburateur-keihin-reglages-injection.jpg",
          summary: "Procédure RTA complète de réglage du ralenti, de la richesse CO (avec ou sans analyseur) et de la pompe de reprise.",
          blocks: [
            {
              kind: "steps",
              title: "Réglage de la richesse (CO) SANS analyseur de gaz (Méthode officielle RTA 013)",
              items: [
                "Conditions préalables : filtre à air propre en place, allumage calé à 18°, aucune prise d'air, aucun gros consommateur électrique (phares, dégivrage, ventilateur arrêtés), starter repoussé.",
                "Amener le moteur à température en le faisant tourner vers 2 000 tr/min jusqu'à ouverture du thermostat (ne pas le laisser chauffer au ralenti seul).",
                "Régler le régime de ralenti à 900 ± 50 tr/min via la vis de butée papillon.",
                "Déposer le capuchon d'inviolabilité de la vis de richesse et tourner la vis pour obtenir le RÉGIME MAXIMUM.",
                "Ramener le régime à 900 tr/min par la vis de butée, puis répéter jusqu'à équilibre.",
                "Appauvrir légèrement à la vis de richesse pour faire BAISSER le régime de 50 tr/min, puis replacer le capuchon.",
                "Contrôle pompe de reprise (en cas de trou à l'accélération) : sur 10 coups lents de papillon, recueillir 7,8 ± 1,2 cm³ (soit 0,78 ± 0,12 cm³ par pulsation)."
              ]
            }
          ]
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
          title: "Embrayage : caractéristiques & remplacement",
          type: "fiche",
          summary: "Fiche technique complète (mécanisme à diaphragme Ø 210 mm, disque, butée et centrage).",
          blocks: [
            {
              kind: "table",
              title: "Caractéristiques embrayage — Audi 80 B3 1.8S (Moteur NE)",
              headers: ["Élément", "Spécification constructeur"],
              rows: [
                ["Type", "Monodisque à sec, mécanisme à diaphragme"],
                ["Diamètre du disque", "210 mm (23 cannelures — repère montage 'Getriebeseite' côté boîte)"],
                ["Couple fixation mécanisme sur volant moteur", "25 Nm (serrage progressif en croix)"],
                ["Graissage cannelures arbre primaire", "Très fine couche de graisse haute température MoS2 / lithium"]
              ]
            }
          ]
        },
        {
          page: "027",
          title: "Commande hydraulique d'embrayage & purge",
          type: "fiche",
          summary: "Émetteur sous pédalier, récepteur sur cloche de boîte et purge au liquide DOT 4.",
          blocks: [
            {
              kind: "steps",
              title: "Purge du circuit hydraulique d'embrayage (commun avec réservoir freins)",
              items: [
                "Maintenir le bocal de liquide de frein DOT 4 rempli au-dessus du repère MAXI (le piquage d'embrayage est placé en hauteur sur le bocal).",
                "Relier la vis de purge du cylindre récepteur (sur le haut de la boîte) par un tuyau transparent vers un bocal, ou utiliser un purgeur sous pression (max 1,5 bar).",
                "Ouvrir la vis de purge et pomper lentement (ou laisser couler sous pression) jusqu'à disparition totale des bulles d'air.",
                "Refermer la vis de purge, vérifier le retour franc de la pédale et contrôler l'absence de fuite sous le soufflet du récepteur."
              ]
            }
          ]
        },
        {
          page: "028",
          title: "Boîte mécanique 5 vitesses type 012 (Code AKM)",
          type: "rta",
          fileDirect: "docs/rta/026_embrayage-caracteristiques.jpg",
          summary: "Planche RTA officielle Page 44 : rapports AKM (89 NE2), huile 2,35 L et couples de serrage.",
          blocks: [
            {
              kind: "table",
              title: "Rapports de démultiplication & données — Boîte 012 Repère AKM (RTA p.44)",
              headers: ["Rapport / Paramètre", "Valeur officielle AKM"],
              rows: [
                ["Affectation", "Audi 80 1.8S carburateur (89 NE2) — Couple conique 9/37"],
                ["1re / 2e / 3e", "11/39 (0,2820) • 21/39 (0,5384) • 32/37 (0,8648)"],
                ["4e / 5e / M.AR", "37/31 (1,1935) • 41/28 (1,4642) • 12/42 (0,2857)"],
                ["Huile préconisée", "2,35 litres de SAE 75W90 (G90 / norme API GL-4 uniquement)"],
                ["Couples boîte sur moteur", "Vis M8 : 25 Nm • Vis M10 : 45 Nm • Vis M12 : 65 Nm"],
                ["Couples transmissions & commande", "Cardans M8 : 45 Nm / M10 : 80 Nm • Bride commande : 20 Nm • Bouchons : 25 Nm"]
              ]
            },
            {
              kind: "warning",
              text: "Toujours débloquer le bouchon de remplissage/niveau (repère 2 sur le flanc gauche) AVANT d'ouvrir le bouchon de vidange inférieur (repère 1) !"
            }
          ]
        },
        {
          page: "029",
          title: "Dépose-repose boîte de vitesses & éclaté différentiel",
          type: "rta",
          fileDirect: "docs/rta/027_embrayage-commande-hydraulique.jpg",
          summary: "Planche RTA officielle Page 45 : dépose-repose de la boîte 012 et vue éclatée du différentiel.",
          blocks: [
            {
              kind: "list",
              title: "Points clés dépose-repose boîte 012 (RTA p.44–45)",
              items: [
                "Débrancher la tresse de masse batterie, la masse sur boîte, le contacteur de marche arrière et la sonde tachymétrique.",
                "Déposer le cylindre récepteur d'embrayage SANS débrancher sa durite hydraulique.",
                "Désaccoupler les deux cardans sur les tulipes de boîte, déposer le support arrière et maintenir le moteur.",
                "À la repose : graisser légèrement l'arbre cannelé, enduire les vis de cardans de frein-filet et contrôler le niveau d'huile."
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
                "Desserrer légèrement la bride de tige de commande (couple 20 Nm) reliant le levier au sélecteur de boîte.",
                "Centrer le levier légèrement incliné vers la droite (~3°) au point mort, puis resserrer la bride à 20 Nm.",
                "Tester l'engagement souple de toutes les vitesses (1 à 5 et MA) moteur arrêté puis moteur tournant."
              ]
            }
          ]
        },
        {
          page: "037",
          title: "Transmissions & Cardans",
          type: "fiche",
          summary: "Dépose des demi-arbres de transmission, soufflets et couples de serrage des tulipes.",
          blocks: [
            {
              kind: "steps",
              title: "Dépose et contrôle d'un arbre de transmission (cardan)",
              items: [
                "Véhicule posé au sol (frein à main serré), débloquer la vis centrale de moyeu de roue.",
                "Lever l'avant sur chandelles, déposer la roue et dévisser les 6 vis XZN reliant le joint intérieur à la tulipe de boîte.",
                "Braquer les roues à fond pour sortir l'arbre de transmission sans déposer la jambe de force (ou désaccoupler la rotule inférieure si besoin).",
                "Au remontage : utiliser des vis de tulipe propres enduites de frein-filet (45 Nm pour vis M8, 80 Nm pour vis M10) et serrer la vis centrale de moyeu au couple roues au sol."
              ]
            }
          ]
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
          title: "Direction mécanique à crémaillère (Sans assistance)",
          type: "rta",
          fileDirect: "docs/rta/037_transmissions-cardans.jpg",
          summary: "Planche RTA officielle Fig. 29 : éclaté complet Direction Mécanique et cote de colonne X = 66 mm.",
          blocks: [
            {
              kind: "table",
              title: "Spécifications Direction Mécanique (Audi 80 1.8S sans DA)",
              headers: ["Élément", "Donnée constructeur"],
              rows: [
                ["Type", "Crémaillère mécanique fixée sur tablier (Fig. 29 — sans pompe ni huile)"],
                ["Cote de dépassement colonne sur tube enveloppe", "X = 66 mm (RTA Fig. 29)"],
                ["Nombre de tours de volant (butée à butée)", "4,2 tours"],
                ["Couple fixation crémaillère / rotules", "Crémaillère : 40 Nm • Rotule direction : 35 Nm"]
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
                "En cas de jeu léger au point milieu, visser progressivement la vis de réglage de poussoir (repère 6 sur Fig. 29) jusqu'à disparition du jeu, sans créer de point dur en braquage.",
                "Contrôler l'intégrité du soufflet (repère 7) et de l'amortisseur de réaction (repère 2)."
              ]
            }
          ]
        },
        {
          page: "040",
          title: "Direction assistée (Documentation de référence)",
          type: "rta",
          fileDirect: "docs/rta/038_direction-caracteristiques.jpg",
          summary: "Planche RTA Fig. 30 (informative uniquement — votre véhicule n'est pas équipé de la DA)."
        },
        {
          page: "058",
          title: "Suspension Train Avant (Véhicule à direction mécanique)",
          type: "rta",
          fileDirect: "docs/rta/040_direction-assistee.jpg",
          summary: "Planche RTA officielle Fig. 31 : jambe de force McPherson, triangle, barre stabilisatrice et rotule.",
          blocks: [
            {
              kind: "list",
              title: "Opérations couvertes sur la planche Fig. 31 (Direction mécanique)",
              items: [
                "Démontage-remontage de l'élément de suspension (compresseur de ressort + douille calotte filetée 40-201A).",
                "Dépose-repose du triangle inférieur sur berceau (dégager les paliers de barre stabilisatrice sur version sans DA).",
                "Remplacement rapide de la rotule de suspension sur triangle sans déposer la jambe de force (reprendre le parallélisme/carrossage ensuite)."
              ]
            }
          ]
        },
        {
          page: "059",
          title: "Silentblocs de berceau, triangles & barre stabilisatrice",
          type: "fiche",
          summary: "Diagnostic des claquements train avant et règles de serrage en assiette normale.",
          blocks: [
            {
              kind: "warning",
              text: "Règle d'or Audi 80 B3 : ne JAMAIS bloquer au couple les boulons de triangles et de paliers de barre stabilisatrice roues pendantes. Effectuer le serrage final uniquement lorsque la voiture repose en appui sur ses roues !"
            }
          ]
        },
        {
          page: "060",
          title: "Géométrie du train avant & roulement de moyeu",
          type: "rta",
          fileDirect: "docs/rta/060_train-avant-geometrie-roulement-moyeu-avant.jpg",
          summary: "Planche RTA officielle Page 60 : réglage parallélisme, carrossage et extraction du roulement à la presse."
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
          title: "Essieu arrière semi-rigide, barre Panhard & couples AR",
          type: "rta",
          fileDirect: "docs/rta/059_train-avant-bras-rotules.jpg",
          summary: "Planche RTA officielle Page 61 : géométrie train AR, couples de serrage et dépose combiné AR.",
          blocks: [
            {
              kind: "table",
              title: "Géométrie & Couples de serrage Train Arrière (RTA p.61)",
              headers: ["Paramètre / Fixation", "Valeur officielle"],
              rows: [
                ["Carrossage arrière", "-1° ± 20' (différence D/G maxi 30')"],
                ["Parallélisme arrière (pincement)", "2,1 ± 2,1 mm (ou 20' ± 20')"],
                ["Bras longitudinaux sur coque", "100 Nm (serrage roues au sol)"],
                ["Barre Panhard sur coque / sur essieu", "80 Nm (coque) • 90 Nm (essieu)"],
                ["Fixation amortisseur (supérieure / inférieure)", "20 Nm (supérieure) • 60 Nm (inférieure)"],
                ["Orientation coupelle inférieure ressort", "45° vers l'avant (voir figure RTA p.61)"]
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
          summary: "Planche RTA officielle Page 70 : réglage du levier de frein à main tambours (2 crans) et ordre de purge en X.",
          blocks: [
            {
              kind: "steps",
              title: "Ordre officiel de purge en X (RTA p.70)",
              items: [
                "Moteur arrêté (servofrein hors action), maintenir le réservoir de liquide DOT 4 plein en permanence.",
                "Purger impérativement dans l'ordre du circuit en X : 1. Arrière Droit → 2. Avant Gauche → 3. Arrière Gauche → 4. Avant Droit.",
                "Réglage frein à main (tambours 1.8S) : roues AR pendantes, appuyer une fois à fond sur la pédale de frein, tirer le levier de 2 crans et serrer l'écrou du palonnier jusqu'à ce que les roues tournent difficilement à la main, puis vérifier qu'elles tournent librement levier desserré."
              ]
            }
          ]
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
                ["Résistance doigt d'allumeur (rotor)", "1,0 kΩ (± 20 %)"],
                ["Emplacement du module TSZ-H", "Dans l'habitacle, sur le montant avant gauche derrière le revêtement (semelle alu)"]
              ]
            },
            {
              kind: "table",
              title: "Tableau officiel de contrôle des tensions TSZ-H (RTA p.009)",
              headers: ["Élément contrôlé", "Mode opératoire (voltmètre)", "Valeur assignée", "Défaut si hors norme"],
              rows: [
                ["Faisceau d'alimentation", "Connecteur module débranché, contact mis : tension entre bornes 4 et 2", "12 V", "Coupure dans le circuit d'allumage"],
                ["Module TSZ-H (coupure repos)", "Connecteur d'allumeur débranché, contact mis : tension entre bornes 1 et 15 bobine", "Mini 2 V puis 0 V après 1 à 2 s", "Module TSZ-H défectueux"],
                ["Module TSZ-H (impulsion)", "Contact mis : tension bornes 1 et 15 bobine en mettant brièvement à la masse le fil central du connecteur d'allumeur", "2 V temporairement", "Continuité câble ou module TSZ-H"],
                ["Alimentation capteur Hall", "Tension entre les 2 câbles extérieurs du connecteur d'allumeur", "Mini 5 V", "Continuité câbles ou module TSZ-H"],
                ["Capteur Hall (transmetteur)", "Secondaire bobine à la masse, connecteur module branché : tension bornes 6 et 3 en tournant le moteur à la main", "Alternance 0 à 2 V", "Capteur Hall d'allumeur HS"]
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
              title: "Connecteur T26 — JAUNE (26 broches — vérifié RTA p.091)",
              headers: ["Broche", "Couleur fil (RTA 091)", "Fonction / Signal"],
              rows: [
                ["1", "gr/gn (0,5)", "Entrée rhéostat d'éclairage E20 (+58)"],
                ["2", "bl/br (0,5)", "Signal sonde température liquide de refroidissement (G3)"],
                ["3", "sw/bl", "+15 après contact (alimentation combiné / Fusible S12)"],
                ["4", "—", "Sortie éclairage instruments (58b)"],
                ["5", "gr/bl (0,5)", "Alimentation ampoules d'éclairage cadrans (L10)"],
                ["8", "br (0,5)", "Masse éclairage / témoins (Borne 31)"],
                ["9", "sw/ws", "Témoin clignotant gauche"],
                ["10", "—", "Alerte température / niveau liquide refroidissement"],
                ["13", "bl (0,5)", "Témoin de charge alternateur (K2 / Borne D+)"],
                ["19", "ro", "+30 permanent montre analogique (Fusible S4)"],
                ["22", "gn", "Signal compte-tours (depuis borne 1 bobine / TSZ-H)"],
                ["24", "bl/sw (0,5)", "Témoin de pression d'huile (K3)"],
                ["25", "br/ws (0,5)", "Témoin de frein à main (K14)"],
                ["26", "br/gn (0,5)", "Témoin de starter tiré (K15)"]
              ]
            },
            {
              kind: "table",
              title: "Connecteur T26a — BLEU (26 broches — vérifié RTA p.091 & p.121)",
              headers: ["Broche", "Couleur fil (RTA 091)", "Fonction / Signal"],
              rows: [
                ["15", "li/sw (0,5)", "Signal sonde niveau de carburant réservoir (G1)"],
                ["16", "sw/bl (0,5)", "Alimentation +15 stabilisateur de tension J6 (10 V)"],
                ["17", "sw/gn", "Témoin clignotant droit"],
                ["18", "ws/bl (0,5)", "Sortie signal vitesse (Tachymètre G21)"],
                ["20", "br/ro (0,5)", "Entrée capteur vitesse boîte (G22)"],
                ["21", "br (0,5)", "Masse générale éclairage cadrans (L10)"],
                ["22", "—", "Éclairage réglable cadrans"],
                ["23", "bl/ws (0,5)", "Témoin feu de route (K1 — plein phare bleu)"],
                ["25", "bl/gn (0,5)", "Témoin signal de détresse / warning (K6)"],
                ["26", "br (0,5)", "Masse témoins combiné (Borne 31)"]
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
          title: "Schéma électrique : Soufflante air frais (V2), Tachymètre (G21/G22), Antibrouillard AR (E18) & Allume-cigare",
          type: "rta",
          rtaKey: "commandesMoteursOptions",
          summary: "Schémas RTA N° 40/21 et 40/22 : soufflante V2 + résistance N24 (fusible S17), capteur vitesse G22, feu antibrouillard AR E18/L20 (fusible S1) et allume-cigare U1."
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
