/**
 * Audi 80 B3 (1988) - Module Électricité 3D & Fantôme Châssis
 * Moteur 3D Three.js sans dépendance externe, compatible file://
 */
(function () {
  window.AUDI80_3D = window.AUDI80_3D || {};

  // Zones anatomiques de l'Audi 80 B3 pour le repérage électrique
  const ZONES = {
    all: {
      id: "all",
      name: "Véhicule complet",
      badge: "Vue générale",
      desc: "Silhouette globale de l'Audi 80 B3 (Type 89) et implantation générale des faisceaux.",
      camPos: { x: 4.8, y: 2.2, z: 4.6 },
      target: { x: 0, y: 0.5, z: 0 }
    },
    moteur: {
      id: "moteur",
      name: "1. Compartiment Moteur (NE)",
      badge: "Moteur 1.8S",
      desc: "Bloc 4 cylindres NE longitudinal, batterie, alternateur Bosch 65A, démarreur 1kW, radiateur/ventilateur V7, thermocontact F18, allumeur et sondes.",
      camPos: { x: 2.3, y: 1.6, z: 1.8 },
      target: { x: 1.4, y: 0.6, z: 0 }
    },
    auvent: {
      id: "auvent",
      name: "2. Baie d'auvent / Boîte à fusibles",
      badge: "Baie pare-brise",
      desc: "Boîtier fusibles & relais principal (S1 à S25) sous auvent côté conducteur, moteur d'essuie-glace V et tringlerie, réservoirs.",
      camPos: { x: 1.3, y: 1.8, z: 1.6 },
      target: { x: 0.7, y: 0.8, z: 0.3 }
    },
    soustrd: {
      id: "soustrd",
      name: "3. Sous-Tableau de bord (Relais)",
      badge: "Platine relais & Neiman",
      desc: "Porte-relais additionnel (J18 délestage X, J114 pression huile), connecteurs T5/T10, contacteur Neiman, module TSZ-H montant A, masse étoile (32).",
      camPos: { x: 0.7, y: 1.1, z: 1.3 },
      target: { x: 0.3, y: 0.7, z: 0.35 }
    },
    planche: {
      id: "planche",
      name: "4. Planche de bord & Console",
      badge: "Combiné T26 / Commandes",
      desc: "Combiné d'instruments avec connecteurs T26 (jaune) et T26a (bleu), boutons de console (antibrouillard E18, dégivrage E15, warning E3), soufflante V2.",
      camPos: { x: 0.4, y: 1.3, z: 1.4 },
      target: { x: 0.2, y: 0.8, z: 0 }
    },
    habitacle: {
      id: "habitacle",
      name: "5. Habitacle & Portes",
      badge: "Portes / Lève-vitres",
      desc: "Passages de câbles et soufflets de portes (lève-vitres, centralisation), contacteurs de feuillure F2/F3/F10/F11, plafonnier W.",
      camPos: { x: -0.2, y: 2.1, z: 3.2 },
      target: { x: -0.1, y: 0.6, z: 0 }
    },
    coffre: {
      id: "coffre",
      name: "6. Coffre & Malle arrière",
      badge: "Malle / Éclairage AR",
      desc: "Connecteur T6a (aile AR gauche), faisceau de charnière de malle, antibrouillard L20, feux de recul M16/M17, lunette dégivrante Z1, masse coffre (98).",
      camPos: { x: -3.2, y: 1.7, z: 1.8 },
      target: { x: -1.7, y: 0.7, z: 0 }
    }
  };

  class Audi80Ghost3D {
    constructor(containerEl) {
      this.container = containerEl;
      this.currentZone = "all";
      this.displayMode = "realistic"; // "realistic" (Blanc Alpinweiß L90E opaque) ou "ghost" (transparence technique)
      this.wireframeOnly = false;
      this.ghostOpacity = 0.22;
      this.isolateZone = false;
      this.isDark = document.documentElement.dataset.theme !== "light";

      this.zoneGroups = {};
      this.animReq = null;
      this.camLerp = null;

      this.init();
    }

    init() {
      const width = this.container.clientWidth || 800;
      const height = this.container.clientHeight || 560;

      // 1. Scène
      this.scene = new THREE.Scene();
      this.updateBackgroundColor();

      // 2. Caméra
      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
      this.camera.position.set(ZONES.all.camPos.x, ZONES.all.camPos.y, ZONES.all.camPos.z);

      // 3. Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.shadowMap.enabled = false;
      this.container.appendChild(this.renderer.domElement);

      // 4. Contrôles orbitaux
      if (THREE.OrbitControls) {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.08;
        this.controls.maxPolarAngle = Math.PI / 2 + 0.05; // Pas en-dessous du sol
        this.controls.minDistance = 0.8;
        this.controls.maxDistance = 14;
        this.controls.target.set(0, 0.5, 0);
      }

      // 5. Éclairages d'ambiance technique
      this.setupLights();

      // 6. Sol technique quadrillé
      this.setupGround();

      // 7. Construction procédurale du fantôme de l'Audi 80 B3
      this.buildAudi80Chassis();

      // 7 bis. Chargement du modèle haute fidélité officiel Audi 80 B3 (GLB / Base64)
      this.loadAuthenticMesh();

      // 8. Gestion du redimensionnement
      this.onResize = this.onResize.bind(this);
      window.addEventListener("resize", this.onResize);

      // 9. Boucle de rendu
      this.animate = this.animate.bind(this);
      this.animate();
    }

    updateBackgroundColor() {
      this.isDark = document.documentElement.dataset.theme !== "light";
      const bg = this.isDark ? 0x0f141c : 0xf1f5f9;
      this.scene.background = new THREE.Color(bg);
      if (this.gridHelper) {
        this.scene.remove(this.gridHelper);
        this.setupGround();
      }
      this.updateMaterialsTheme();
    }

    setupLights() {
      this.ambientLight = new THREE.AmbientLight(0xffffff, this.isDark ? 0.75 : 0.95);
      this.scene.add(this.ambientLight);

      this.dirLight1 = new THREE.DirectionalLight(0x70b5ff, this.isDark ? 0.9 : 0.7);
      this.dirLight1.position.set(5, 8, 4);
      this.scene.add(this.dirLight1);

      this.dirLight2 = new THREE.DirectionalLight(0xffb870, this.isDark ? 0.45 : 0.35);
      this.dirLight2.position.set(-5, 4, -4);
      this.scene.add(this.dirLight2);
    }

    setupGround() {
      const gridColor1 = this.isDark ? 0x223249 : 0xcbd5e1;
      const gridColor2 = this.isDark ? 0x141e2d : 0xe2e8f0;
      this.gridHelper = new THREE.GridHelper(9, 36, gridColor1, gridColor2);
      this.gridHelper.position.y = -0.01;
      this.scene.add(this.gridHelper);
    }

    // Palette de matériaux techniques pour le fantôme
    getMaterial(role = "body", isHighlighted = false) {
      const dark = this.isDark;
      const isRealistic = this.displayMode === "realistic";

      // 1. Matériaux Mode Réaliste (Audi 80 B3 Blanc Alpinweiß L90E d'usine avec pare-chocs et bandeaux noirs)
      if (isRealistic) {
        switch (role) {
          case "body":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: isHighlighted ? 0xe0f2fe : 0xf8f9fa, // Blanc Alpinweiß pur d'origine
                roughness: 0.28,
                metalness: 0.15,
                transparent: false,
                opacity: 1.0,
                side: THREE.DoubleSide
              }),
              edges: new THREE.LineBasicMaterial({
                color: isHighlighted ? 0x0284c7 : 0xd1d5db,
                transparent: true,
                opacity: isHighlighted ? 0.9 : 0.25,
                linewidth: 1
              })
            };
          case "black_trim":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: isHighlighted ? 0x334155 : 0x1f2428, // Plastique noir mat/satiné grainé (pare-chocs, bandeaux)
                roughness: 0.75,
                metalness: 0.1,
                transparent: false,
                opacity: 1.0,
                side: THREE.DoubleSide
              }),
              edges: new THREE.LineBasicMaterial({
                color: isHighlighted ? 0x38bdf8 : 0x111827,
                transparent: true,
                opacity: isHighlighted ? 0.8 : 0.4
              })
            };
          case "glass":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: 0x0f172a, // Teinte verte/fumé d'origine VAG
                roughness: 0.1,
                metalness: 0.85,
                transparent: true,
                opacity: 0.6,
                depthWrite: false,
                side: THREE.DoubleSide
              }),
              edges: new THREE.LineBasicMaterial({
                color: 0x475569,
                transparent: true,
                opacity: 0.35
              })
            };
          case "wheel":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: 0x1e242b, // Pneu noir et jante/enjoliveur tôle
                roughness: 0.7,
                metalness: 0.25,
                transparent: false,
                opacity: 1.0
              }),
              edges: new THREE.LineBasicMaterial({
                color: 0x374151,
                transparent: true,
                opacity: 0.4
              })
            };
          case "light_front":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: isHighlighted ? 0xfef08a : 0xf1f5f9, // Optique phare H4 verre transparent
                roughness: 0.15,
                metalness: 0.4,
                transparent: true,
                opacity: 0.85
              }),
              edges: new THREE.LineBasicMaterial({
                color: 0x94a3b8,
                transparent: true,
                opacity: 0.6
              })
            };
          case "light_indicator":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: 0xd97706, // Clignotant orange d'angle B3
                roughness: 0.2,
                metalness: 0.2,
                transparent: true,
                opacity: 0.9
              }),
              edges: new THREE.LineBasicMaterial({
                color: 0xb45309,
                transparent: true,
                opacity: 0.6
              })
            };
          case "light_rear":
            return {
              mesh: new THREE.MeshStandardMaterial({
                color: 0xb91c1c, // Bandeau de feux arrière rouge foncé Audi 80
                roughness: 0.2,
                metalness: 0.2,
                transparent: true,
                opacity: 0.9
              }),
              edges: new THREE.LineBasicMaterial({
                color: 0x7f1d1d,
                transparent: true,
                opacity: 0.6
              })
            };
        }
      }

      // 2. Matériaux Mode Transparent / Fantôme Technique
      let color, edgeColor, opacity;
      switch (role) {
        case "body":
          color = dark ? (isHighlighted ? 0x38bdf8 : 0x224168) : (isHighlighted ? 0x0284c7 : 0x94a3b8);
          edgeColor = dark ? (isHighlighted ? 0x7dd3fc : 0x477aa8) : (isHighlighted ? 0x0369a1 : 0x64748b);
          opacity = isHighlighted ? 0.45 : this.ghostOpacity;
          break;
        case "black_trim":
          color = dark ? 0x1e293b : 0x64748b;
          edgeColor = dark ? 0x475569 : 0x334155;
          opacity = isHighlighted ? 0.55 : this.ghostOpacity * 1.2;
          break;
        case "glass":
          color = dark ? 0x38bdf8 : 0x0ea5e9;
          edgeColor = dark ? 0x7dd3fc : 0x0284c7;
          opacity = isHighlighted ? 0.4 : this.ghostOpacity * 0.7;
          break;
        case "engine":
          color = dark ? (isHighlighted ? 0xf59e0b : 0x644320) : (isHighlighted ? 0xd97706 : 0xb45309);
          edgeColor = dark ? (isHighlighted ? 0xfbbf24 : 0x9a6b32) : (isHighlighted ? 0xb45309 : 0x78350f);
          opacity = isHighlighted ? 0.6 : this.ghostOpacity * 1.3;
          break;
        case "electric":
          color = dark ? 0x10b981 : 0x059669;
          edgeColor = dark ? 0x34d399 : 0x047857;
          opacity = 0.85;
          break;
        case "fusebox":
          color = dark ? (isHighlighted ? 0xef4444 : 0x7f1d1d) : (isHighlighted ? 0xdc2626 : 0x991b1b);
          edgeColor = dark ? 0xfca5a5 : 0xb91c1c;
          opacity = isHighlighted ? 0.75 : 0.55;
          break;
        case "wheel":
          color = dark ? 0x1a2332 : 0x475569;
          edgeColor = dark ? 0x3b4d66 : 0x64748b;
          opacity = this.ghostOpacity * 1.1;
          break;
        default:
          color = 0x3b82f6;
          edgeColor = 0x60a5fa;
          opacity = this.ghostOpacity;
      }

      return {
        mesh: new THREE.MeshStandardMaterial({
          color,
          roughness: 0.4,
          metalness: 0.2,
          transparent: true,
          opacity: this.wireframeOnly ? 0 : opacity,
          wireframe: false,
          depthWrite: false,
          side: THREE.DoubleSide
        }),
        edges: new THREE.LineBasicMaterial({
          color: edgeColor,
          transparent: true,
          opacity: isHighlighted ? 0.95 : 0.65,
          linewidth: 1
        })
      };
    }

    createTechMesh(geometry, role = "body", zoneId = "all") {
      const mats = this.getMaterial(role, false);
      const mesh = new THREE.Mesh(geometry, mats.mesh);
      mesh.userData = { role, zoneId };

      const wireGeom = new THREE.EdgesGeometry(geometry, 28);
      const wire = new THREE.LineSegments(wireGeom, mats.edges);
      wire.userData = { role, zoneId, isEdge: true };
      mesh.add(wire);

      return mesh;
    }

    buildAudi80Chassis() {
      // Groupe racine pour la voiture
      this.carGroup = new THREE.Group();
      this.carGroup.position.set(0, 0, 0);
      this.scene.add(this.carGroup);

      // Initialisation des groupes de zones
      Object.keys(ZONES).forEach(key => {
        if (key !== "all") {
          const group = new THREE.Group();
          group.name = `zone_${key}`;
          this.zoneGroups[key] = group;
          this.carGroup.add(group);
        }
      });

      // ==========================================
      // ZONE 1 : MOTEUR (Avant, X: 0.8 -> 2.1)
      // ==========================================
      const gMoteur = this.zoneGroups.moteur;

      // Berceau avant & longerons moteur
      const longeronG = this.createTechMesh(new THREE.BoxGeometry(1.2, 0.08, 0.08), "body", "moteur");
      longeronG.position.set(1.4, 0.35, 0.45);
      gMoteur.add(longeronG);

      const longeronD = this.createTechMesh(new THREE.BoxGeometry(1.2, 0.08, 0.08), "body", "moteur");
      longeronD.position.set(1.4, 0.35, -0.45);
      gMoteur.add(longeronD);

      const traverseAV = this.createTechMesh(new THREE.BoxGeometry(0.1, 0.08, 0.9), "body", "moteur");
      traverseAV.position.set(2.0, 0.35, 0);
      gMoteur.add(traverseAV);

      // Radiateur frontal & Ventilateur V7
      const radiateur = this.createTechMesh(new THREE.BoxGeometry(0.06, 0.36, 0.52), "engine", "moteur");
      radiateur.position.set(1.88, 0.5, 0.18);
      gMoteur.add(radiateur);

      const ventiloV7 = this.createTechMesh(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 16), "electric", "moteur");
      ventiloV7.rotation.z = Math.PI / 2;
      ventiloV7.position.set(1.82, 0.5, 0.18);
      gMoteur.add(ventiloV7);

      // Bloc moteur longitudinal 1.8S NE (incliné à ~20° vers la droite)
      const moteurBloc = this.createTechMesh(new THREE.BoxGeometry(0.62, 0.44, 0.34), "engine", "moteur");
      moteurBloc.position.set(1.35, 0.54, 0.05);
      moteurBloc.rotation.x = 0.22; // Inclinaison VAG EA827
      gMoteur.add(moteurBloc);

      // Culasse & Cache-culbuteurs
      const culasse = this.createTechMesh(new THREE.BoxGeometry(0.56, 0.16, 0.26), "engine", "moteur");
      culasse.position.set(1.35, 0.78, 0.1);
      culasse.rotation.x = 0.22;
      gMoteur.add(culasse);

      // Boîte à air ronde & Carburateur Keihin KS2
      const carbuAir = this.createTechMesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 16), "engine", "moteur");
      carbuAir.position.set(1.32, 0.9, -0.06);
      gMoteur.add(carbuAir);

      // Alternateur Bosch 65A (côté gauche moteur)
      const alternateur = this.createTechMesh(new THREE.CylinderGeometry(0.09, 0.09, 0.18, 14), "electric", "moteur");
      alternateur.rotation.z = Math.PI / 2;
      alternateur.position.set(1.55, 0.42, 0.32);
      gMoteur.add(alternateur);

      // Démarreur Bosch 1kW (bas moteur / cloche)
      const demarreur = this.createTechMesh(new THREE.CylinderGeometry(0.07, 0.07, 0.22, 12), "electric", "moteur");
      demarreur.rotation.z = Math.PI / 2;
      demarreur.position.set(1.05, 0.32, 0.28);
      gMoteur.add(demarreur);

      // Allumeur à capteur Hall + Tête d'allumeur
      const allumeur = this.createTechMesh(new THREE.CylinderGeometry(0.05, 0.05, 0.14, 12), "electric", "moteur");
      allumeur.position.set(1.22, 0.72, 0.26);
      gMoteur.add(allumeur);

      // Batterie 12V 220A (AV gauche dans le compartiment)
      const batterie = this.createTechMesh(new THREE.BoxGeometry(0.26, 0.2, 0.18), "electric", "moteur");
      batterie.position.set(1.58, 0.62, 0.62);
      gMoteur.add(batterie);

      // ==========================================
      // ZONE 2 : AUVENT & BOÎTE À FUSIBLES (X: 0.6 -> 0.9)
      // ==========================================
      const gAuvent = this.zoneGroups.auvent;

      // Cloison de baie d'auvent (waterbox)
      const auventBac = this.createTechMesh(new THREE.BoxGeometry(0.3, 0.25, 1.42), "body", "auvent");
      auventBac.position.set(0.72, 0.76, 0);
      gAuvent.add(auventBac);

      // Boîtier à fusibles & relais principal (S1 à S25 sous auvent côté conducteur)
      const boiteFusibles = this.createTechMesh(new THREE.BoxGeometry(0.24, 0.14, 0.18), "fusebox", "auvent");
      boiteFusibles.position.set(0.74, 0.88, 0.48);
      gAuvent.add(boiteFusibles);

      // Couvercle transparent de la boîte à fusibles
      const couvercleFusibles = this.createTechMesh(new THREE.BoxGeometry(0.25, 0.03, 0.19), "electric", "auvent");
      couvercleFusibles.position.set(0.74, 0.96, 0.48);
      gAuvent.add(couvercleFusibles);

      // Moteur d'essuie-glace V et tringlerie centrale
      const moteurEssuieGlace = this.createTechMesh(new THREE.CylinderGeometry(0.06, 0.06, 0.16, 12), "electric", "auvent");
      moteurEssuieGlace.rotation.z = Math.PI / 2;
      moteurEssuieGlace.position.set(0.72, 0.82, 0.1);
      gAuvent.add(moteurEssuieGlace);

      const tringlerie = this.createTechMesh(new THREE.CylinderGeometry(0.015, 0.015, 0.8, 8), "body", "auvent");
      tringlerie.rotation.x = Math.PI / 2;
      tringlerie.position.set(0.76, 0.86, 0);
      gAuvent.add(tringlerie);

      // Vase d'expansion & Maître-cylindre / bocal frein
      const vaseLdr = this.createTechMesh(new THREE.SphereGeometry(0.12, 12, 10), "engine", "auvent");
      vaseLdr.position.set(0.82, 0.78, -0.52);
      gAuvent.add(vaseLdr);

      // ==========================================
      // ZONE 3 : SOUS-TABLEAU DE BORD (X: 0.2 -> 0.6)
      // ==========================================
      const gSousTdb = this.zoneGroups.soustrd;

      // Tablier pare-feu principal
      const tablier = this.createTechMesh(new THREE.BoxGeometry(0.08, 0.65, 1.48), "body", "soustrd");
      tablier.position.set(0.6, 0.58, 0);
      gSousTdb.add(tablier);

      // Porte-relais additionnel sous tableau de bord conducteur
      const porteRelais = this.createTechMesh(new THREE.BoxGeometry(0.18, 0.14, 0.26), "fusebox", "soustrd");
      porteRelais.position.set(0.42, 0.62, 0.38);
      gSousTdb.add(porteRelais);

      // Relais délestage X / J18 sur socle
      const relaisJ18 = this.createTechMesh(new THREE.BoxGeometry(0.05, 0.06, 0.05), "electric", "soustrd");
      relaisJ18.position.set(0.42, 0.71, 0.44);
      gSousTdb.add(relaisJ18);

      // Module d'allumage TSZ-H (191 905 351 B) fixé au montant A gauche
      const moduleTSZ = this.createTechMesh(new THREE.BoxGeometry(0.12, 0.09, 0.04), "electric", "soustrd");
      moduleTSZ.position.set(0.5, 0.68, 0.66);
      gSousTdb.add(moduleTSZ);

      // Point de masse en étoile (32) derrière montant A
      const masse32 = this.createTechMesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 10), "electric", "soustrd");
      masse32.position.set(0.48, 0.52, 0.62);
      gSousTdb.add(masse32);

      // Colonne de direction & Neiman
      const colonne = this.createTechMesh(new THREE.CylinderGeometry(0.035, 0.035, 0.6, 12), "body", "soustrd");
      colonne.rotation.z = -0.65;
      colonne.position.set(0.32, 0.68, 0.35);
      gSousTdb.add(colonne);

      const contacteurNeiman = this.createTechMesh(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 12), "electric", "soustrd");
      contacteurNeiman.rotation.z = -0.65;
      contacteurNeiman.position.set(0.24, 0.78, 0.3);
      gSousTdb.add(contacteurNeiman);

      // ==========================================
      // ZONE 4 : PLANCHE DE BORD & CONSOLE (X: -0.1 -> 0.4)
      // ==========================================
      const gPlanche = this.zoneGroups.planche;

      // Volume de la planche de bord Audi 80 B3
      const plancheBord = this.createTechMesh(new THREE.BoxGeometry(0.5, 0.38, 1.44), "body", "planche");
      plancheBord.position.set(0.25, 0.82, 0);
      gPlanche.add(plancheBord);

      // Casquette et combiné d'instruments
      const casquette = this.createTechMesh(new THREE.BoxGeometry(0.28, 0.22, 0.44), "body", "planche");
      casquette.position.set(0.22, 0.94, 0.35);
      gPlanche.add(casquette);

      // Combiné d'instruments analogique (avec les deux prises T26 / T26a au dos)
      const combine = this.createTechMesh(new THREE.BoxGeometry(0.12, 0.16, 0.38), "electric", "planche");
      combine.position.set(0.25, 0.92, 0.35);
      gPlanche.add(combine);

      // Connecteur T26 (jaune) et T26a (bleu) au dos du combiné
      const priseT26 = this.createTechMesh(new THREE.BoxGeometry(0.03, 0.05, 0.12), "electric", "planche");
      priseT26.position.set(0.32, 0.92, 0.44);
      gPlanche.add(priseT26);

      const priseT26a = this.createTechMesh(new THREE.BoxGeometry(0.03, 0.05, 0.12), "electric", "planche");
      priseT26a.position.set(0.32, 0.92, 0.26);
      gPlanche.add(priseT26a);

      // Volant 4 branches B3
      const volant = this.createTechMesh(new THREE.TorusGeometry(0.18, 0.02, 10, 24), "body", "planche");
      volant.rotation.y = Math.PI / 2;
      volant.rotation.z = -0.3;
      volant.position.set(0.08, 0.88, 0.35);
      gPlanche.add(volant);

      // Console centrale & Rangée de boutons (E18, E15, E3)
      const consoleCentrale = this.createTechMesh(new THREE.BoxGeometry(0.45, 0.52, 0.28), "body", "planche");
      consoleCentrale.position.set(0.18, 0.56, 0);
      gPlanche.add(consoleCentrale);

      // Boutons antibrouillard AR E18, warning E3, dégivrage E15
      const boutonsConsole = this.createTechMesh(new THREE.BoxGeometry(0.04, 0.05, 0.22), "electric", "planche");
      boutonsConsole.position.set(0.06, 0.78, 0);
      gPlanche.add(boutonsConsole);

      // Bloc soufflante d'air frais V2 + résistance N24 (côté droit sous TDB)
      const blocChauffage = this.createTechMesh(new THREE.BoxGeometry(0.38, 0.32, 0.42), "engine", "planche");
      blocChauffage.position.set(0.32, 0.62, -0.38);
      gPlanche.add(blocChauffage);

      // ==========================================
      // ZONE 5 : HABITACLE & PORTES (X: -1.3 -> 0.4)
      // ==========================================
      const gHabitacle = this.zoneGroups.habitacle;

      // Soufflets de passage de câbles porte conducteur & passager
      const souffletG = this.createTechMesh(new THREE.CylinderGeometry(0.025, 0.025, 0.1, 8), "electric", "habitacle");
      souffletG.rotation.z = Math.PI / 2;
      souffletG.position.set(0.48, 0.58, 0.76);
      gHabitacle.add(souffletG);

      // Sièges avant schématiques
      const siegeConducteur = this.createTechMesh(new THREE.BoxGeometry(0.45, 0.55, 0.42), "body", "habitacle");
      siegeConducteur.position.set(-0.15, 0.52, 0.35);
      gHabitacle.add(siegeConducteur);

      const siegePassager = this.createTechMesh(new THREE.BoxGeometry(0.45, 0.55, 0.42), "body", "habitacle");
      siegePassager.position.set(-0.15, 0.52, -0.35);
      gHabitacle.add(siegePassager);

      // Plafonnier W au centre du pavillon
      const plafonnier = this.createTechMesh(new THREE.BoxGeometry(0.12, 0.03, 0.08), "electric", "habitacle");
      plafonnier.position.set(-0.35, 1.38, 0);
      gHabitacle.add(plafonnier);

      // ==========================================
      // ZONE 6 : COFFRE & MALLE ARRIÈRE (X: -1.4 -> -2.2)
      // ==========================================
      const gCoffre = this.zoneGroups.coffre;

      // Bandeau de feux arrière Audi 80 (feux d'ailes + feux de malle)
      const feuxGauche = this.createTechMesh(new THREE.BoxGeometry(0.08, 0.16, 0.38), "electric", "coffre");
      feuxGauche.position.set(-2.2, 0.74, 0.54);
      gCoffre.add(feuxGauche);

      const feuxDroit = this.createTechMesh(new THREE.BoxGeometry(0.08, 0.16, 0.38), "electric", "coffre");
      feuxDroit.position.set(-2.2, 0.74, -0.54);
      gCoffre.add(feuxDroit);

      // Feu antibrouillard arrière L20 (sur bandeau de malle gauche)
      const feuAntibrouillardL20 = this.createTechMesh(new THREE.BoxGeometry(0.09, 0.12, 0.18), "electric", "coffre");
      feuAntibrouillardL20.position.set(-2.2, 0.74, 0.22);
      gCoffre.add(feuAntibrouillardL20);

      // Connecteur T6a (6 raccords dans le coffre à bagages côté gauche)
      const priseT6a = this.createTechMesh(new THREE.BoxGeometry(0.04, 0.05, 0.08), "electric", "coffre");
      priseT6a.position.set(-1.75, 0.62, 0.68);
      gCoffre.add(priseT6a);

      // Passage de charnière de malle (point sensible faisceau gauche)
      const charniereG = this.createTechMesh(new THREE.CylinderGeometry(0.015, 0.015, 0.28, 8), "electric", "coffre");
      charniereG.rotation.z = -0.5;
      charniereG.position.set(-1.58, 0.94, 0.62);
      gCoffre.add(charniereG);

      // Point de masse coffre arrière (98)
      const masse98 = this.createTechMesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 10), "electric", "coffre");
      masse98.position.set(-2.05, 0.48, 0.58);
      gCoffre.add(masse98);

      // ==========================================
      // TRAINS ROULANTS & 4 ROUES
      // ==========================================
      // Les 4 roues authentiques avec jantes d'origine sont désormais intégrées dans le modèle 3D Blender.
    }

    buildWheels() {
      // Les roues sont chargées fidèlement depuis le modèle 3D GLTF
    }

    // Chargement du modèle haute fidélité officiel Audi 80 B3
    loadAuthenticMesh() {
      if (!window.THREE?.GLTFLoader) return;
      const loader = new THREE.GLTFLoader();

      const onLoaded = (gltfScene) => {
        this.authenticMesh = gltfScene;
        this.authenticMeshesList = [];

        gltfScene.traverse((child) => {
          if (child.isMesh) {
            const nameL = child.name.toLowerCase();
            let role = "body";
            let zone = "habitacle";

            if (nameL.startsWith("paint_")) {
              role = "body"; // Peinture Blanc Alpinweiß L90E
              if (nameL.includes("bonnet") || nameL.includes("body_001") || nameL.includes("body_012")) {
                zone = "moteur";
              } else if (nameL.includes("boot")) {
                zone = "coffre";
              } else if (nameL.includes("door_lf") || nameL.includes("door_rf")) {
                zone = "soustrd";
              } else {
                zone = "habitacle";
              }
            } else if (nameL.startsWith("trimblack_")) {
              role = "black_trim"; // Pare-chocs, bas de caisse, baguettes et poignées noires
              if (nameL.includes("bump_front") || nameL.includes("trim_007")) {
                zone = "moteur";
              } else if (nameL.includes("bump_rear")) {
                zone = "coffre";
              } else if (nameL.includes("door_lf") || nameL.includes("door_rf")) {
                zone = "soustrd";
              } else {
                zone = "habitacle";
              }
            } else if (nameL.startsWith("glass_")) {
              role = "glass"; // Vitrages teintés
              if (nameL.includes("glass_010")) {
                zone = "auvent"; // Pare-brise
              } else if (nameL.includes("glass_011") || nameL.includes("glass_016") || nameL.includes("glass_017")) {
                zone = "coffre"; // Lunette arrière
              } else {
                zone = "habitacle";
              }
            } else if (nameL.startsWith("light_")) {
              if (nameL.includes("fari2_1") || nameL.includes("fari2_001_1")) {
                role = "light_indicator"; // Clignotants orange d'aile
                zone = "moteur";
              } else if (nameL.includes("fari")) {
                role = "light_front"; // Phares avant H4 verre
                zone = "moteur";
              } else {
                role = "light_rear"; // Feux arrière rouges/malle
                zone = "coffre";
              }
            } else if (nameL.startsWith("wheel_")) {
              role = "wheel"; // 4 Roues complètes
              zone = "all";
            }

            child.userData = { role: role, zone: zone, originalName: child.name };
            this.authenticMeshesList.push(child);

            // Contour fil de fer technique
            try {
              const edges = new THREE.EdgesGeometry(child.geometry, 28);
              const edgeMat = this.getMaterial(role, false).edges;
              const wire = new THREE.LineSegments(edges, edgeMat);
              wire.userData = { isEdge: true };
              child.add(wire);
            } catch (err) {}
          }
        });

        this.carGroup.add(gltfScene);
        this.updateAuthenticMaterials();
      };

      const b64 = window.AUDI80_DATA?.modelGLBBase64;
      if (b64) {
        try {
          const binStr = atob(b64);
          const bytes = new Uint8Array(binStr.length);
          for (let i = 0; i < binStr.length; i++) {
            bytes[i] = binStr.charCodeAt(i);
          }
          loader.parse(bytes.buffer, "", (gltf) => {
            onLoaded(gltf.scene);
          }, (err) => console.error("Erreur GLTF parse:", err));
        } catch (e) {
          console.error("Erreur base64:", e);
        }
      } else {
        loader.load("assets/models/audi80_b3_exterior.glb", (gltf) => {
          onLoaded(gltf.scene);
        });
      }
    }

    updateAuthenticMaterials() {
      if (!this.authenticMeshesList) return;
      const zoneId = this.currentZone;

      this.authenticMeshesList.forEach(child => {
        const isMatch = (zoneId === "all" || child.userData.zone === zoneId || child.userData.zone === "all");

        if (this.isolateZone && zoneId !== "all") {
          child.visible = isMatch;
        } else {
          child.visible = true;
        }

        const role = child.userData.role || "body";
        const mats = this.getMaterial(role, isMatch && zoneId !== "all");

        if (this.wireframeOnly) {
          child.material.visible = false;
        } else {
          child.material.visible = true;
          child.material = mats.mesh;
        }

        const wire = child.children.find(c => c.isLineSegments);
        if (wire) {
          wire.visible = true;
          wire.material = mats.edges;
        }
      });
    }

    // Sélection et mise en surbrillance d'une zone anatomique
    selectZone(zoneId) {
      if (!ZONES[zoneId]) zoneId = "all";
      this.currentZone = zoneId;

      const targetDef = ZONES[zoneId];

      // Transition fluide de caméra vers la zone
      this.animateCameraTo(targetDef.camPos, targetDef.target);

      // Mise à jour de l'opacité et de la visibilité des zones
      Object.keys(this.zoneGroups).forEach(key => {
        const group = this.zoneGroups[key];
        const isMatch = (zoneId === "all" || zoneId === key);

        if (this.isolateZone && zoneId !== "all") {
          group.visible = isMatch;
        } else {
          group.visible = true;
        }

        group.traverse(child => {
          if (child.isMesh && child.userData.role) {
            const mats = this.getMaterial(child.userData.role, isMatch && zoneId !== "all");
            child.material = mats.mesh;
            const wire = child.children.find(c => c.isLineSegments);
            if (wire) wire.material = mats.edges;
          }
        });
      });

      this.updateAuthenticMaterials();
    }

    animateCameraTo(endPos, endTarget, duration = 800) {
      if (!this.controls) return;

      const startPos = this.camera.position.clone();
      const startTarget = this.controls.target.clone();
      const startTime = performance.now();

      this.camLerp = {
        update: (now) => {
          const t = Math.min((now - startTime) / duration, 1);
          // Easing cubique fluide
          const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          this.camera.position.lerpVectors(startPos, new THREE.Vector3(endPos.x, endPos.y, endPos.z), ease);
          this.controls.target.lerpVectors(startTarget, new THREE.Vector3(endTarget.x, endTarget.y, endTarget.z), ease);

          if (t >= 1) this.camLerp = null;
        }
      };
    }

    setGhostOpacity(val) {
      this.ghostOpacity = Math.max(0.05, Math.min(0.85, val));
      this.selectZone(this.currentZone);
    }

    setDisplayMode(mode) {
      this.displayMode = (mode === "ghost") ? "ghost" : "realistic";
      this.selectZone(this.currentZone);
    }

    setWireframeOnly(enabled) {
      this.wireframeOnly = !!enabled;
      this.selectZone(this.currentZone);
    }

    setIsolateZone(enabled) {
      this.isolateZone = !!enabled;
      this.selectZone(this.currentZone);
    }

    updateMaterialsTheme() {
      this.selectZone(this.currentZone);
    }

    onResize() {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      if (width && height) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
      }
    }

    animate(now = 0) {
      this.animReq = requestAnimationFrame(this.animate);

      if (this.camLerp) {
        this.camLerp.update(now);
      }

      if (this.controls) {
        this.controls.update();
      }

      this.renderer.render(this.scene, this.camera);
    }

    destroy() {
      if (this.animReq) cancelAnimationFrame(this.animReq);
      window.removeEventListener("resize", this.onResize);
      if (this.renderer?.domElement?.parentElement) {
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      }
    }
  }

  window.AUDI80_3D.ZONES = ZONES;
  window.AUDI80_3D.GhostView = Audi80Ghost3D;
})();
