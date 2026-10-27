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

      // 7. Modèle 3D Haute Fidélité officiel Audi 80 B3 issu de Blender (GLB / Base64)
      this.carGroup = new THREE.Group();
      this.scene.add(this.carGroup);
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
      // Intégralement remplacé par la modélisation Blender
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
