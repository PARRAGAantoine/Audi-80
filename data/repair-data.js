window.AUDI80_REPAIR = {
  vehicle: {
    title: "Audi 80 B3 1.8S",
    year: "1988",
    modelYear: "millésime 1989",
    vin: "WAUZZZ89ZKA025845",
    engine: "NE",
    gearbox: "AKM",
    carburetor: "Keihin KS2"
  },

  rta: {
    refroidissement: { label: "RTA refroidissement", file: "docs/rta/024_refroidissement.jpg" },
    moteurDonnees: { label: "RTA données moteur/refroidissement", file: "docs/rta/007_moteur-donnees-allumage-refroidissement-alimentation.jpg" },
    distribution: { label: "RTA distribution", file: "docs/rta/017_reglages-moteur-distribution.jpg" },
    culasse: { label: "RTA culasse", file: "docs/rta/019_culasse-depose-controles.jpg" },
    graissage: { label: "RTA graissage", file: "docs/rta/023_graissage.jpg" },
    carburateur10: { label: "RTA carburation/allumage Keihin", file: "docs/rta/010_alimentation-carburateur-calage-allumage-keihin.jpg" },
    carburateur11: { label: "RTA Keihin fonctionnement/réglages", file: "docs/rta/011_carburateur-keihin-schemas-fonctionnement-reglages.jpg" },
    carburateur12: { label: "RTA Keihin éclaté", file: "docs/rta/012_carburateur-keihin-eclate-alimentation.jpg" },
    allumage: { label: "RTA allumage transistorisé", file: "docs/rta/009_allumage-transistorise-allumeur-controles.jpg" },
    miseAuPoint: { label: "RTA mise au point moteur", file: "docs/rta/008_moteur-controles-allumage-mise-au-point-couples-serrage.jpg" },
    alternateur: { label: "RTA alternateur/démarreur", file: "docs/rta/073_alternateur-demarreur.jpg" },
    fusibles: { label: "RTA fusibles", file: "docs/rta/072_equipement-electrique-caracteristiques-fusibles.jpg" },
    masses: { label: "RTA points de masse", file: "docs/rta/120_schema-points-masse-raccords-faisceau.jpg" },
    freins: { label: "RTA freins caractéristiques", file: "docs/rta/064_freins-caracteristiques.jpg" },
    plaquettes: { label: "RTA plaquettes avant", file: "docs/rta/065_freins-avant-plaquettes.jpg" },
    purgeFrein: { label: "RTA purge frein", file: "docs/rta/070_frein-stationnement-purge-circuit.jpg" },
    cardans: { label: "RTA transmissions/cardans", file: "docs/rta/037_transmissions-cardans.jpg" },
    embrayage: { label: "RTA embrayage", file: "docs/rta/027_embrayage-commande-hydraulique.jpg" },
    trainAvant: { label: "RTA train avant", file: "docs/rta/059_train-avant-bras-rotules.jpg" },
    jambeForce: { label: "RTA jambe de force avant", file: "docs/rta/058_jambe-force-avant.jpg" },
    direction: { label: "RTA direction", file: "docs/rta/038_direction-caracteristiques.jpg" },
    echappement: { label: "RTA échappement", file: "docs/rta/025_echappement.jpg" },
    instruments: { label: "RTA instruments", file: "docs/rta/091_schema-instruments-eclairage-commandes.jpg" },
    antibrouillard: { label: "RTA antibrouillard arrière", file: "docs/rta/122_schema-antibrouillard-arriere-degivrage.jpg" },
    essuieGlace: { label: "RTA essuie-glace/lave-glace", file: "docs/rta/118_schema-essuie-glace-lave-glace-pompes.jpg" },
    commandesMoteursOptions: { label: "RTA commandes et moteurs options", file: "docs/rta/121_schema-commandes-et-moteurs-options.jpg" },
    chauffage: { label: "RTA chauffage/ventilation", file: "docs/rta/125_chauffage-ventilation-implantation-faisceaux.jpg" }
  },

  controls: {
    niveauLdr: {
      title: "Contrôler le niveau de liquide de refroidissement",
      tools: ["Lampe", "Gants", "Chiffon"],
      where: "Vase d'expansion du circuit de refroidissement, moteur froid.",
      how: [
        "Laisser refroidir complètement le moteur.",
        "Contrôler le niveau entre les repères mini/maxi du vase.",
        "Regarder la couleur du liquide et chercher huile, boue, dépôt ou bulles.",
        "Contrôler autour du vase, bouchon, durites, radiateur, pompe à eau et habitacle."
      ],
      expected: "Niveau stable, liquide propre, pas de pression excessive à froid, pas de trace de fuite.",
      bad: "Niveau bas ou baisse régulière : rechercher fuite externe, bouchon, pompe à eau, radiateur, durite, chauffage ou joint de culasse.",
      rta: ["refroidissement"]
    },
    thermostatDurites: {
      title: "Tester le thermostat par les durites",
      tools: ["Main protégée", "Thermomètre infrarouge si disponible", "Lampe"],
      where: "Durite supérieure/inférieure du radiateur et boîtier de thermostat côté moteur.",
      how: [
        "Démarrer moteur froid, chauffage habitacle ouvert.",
        "Surveiller la montée en température sans laisser surchauffer.",
        "La durite vers radiateur doit rester plutôt froide au début.",
        "Quand le thermostat s'ouvre, la durite devient rapidement chaude et le radiateur commence à chauffer.",
        "Comparer aussi si le chauffage habitacle chauffe correctement."
      ],
      expected: "Montée progressive puis ouverture nette du circuit radiateur.",
      bad: "Durite radiateur froide alors que moteur chaud : thermostat bloqué fermé ou circulation mauvaise. Durite chaude trop tôt et moteur long à chauffer : thermostat bloqué ouvert.",
      rta: ["refroidissement", "moteurDonnees"]
    },
    ventilateurDeclenchement: {
      title: "Contrôler le déclenchement du ventilateur",
      tools: ["Multimètre", "Lampe", "Fil de pontage avec prudence"],
      where: "Ventilateur de radiateur, connecteur moteur ventilateur, thermocontact sur radiateur.",
      how: [
        "Laisser chauffer au ralenti en surveillant la jauge.",
        "Vérifier si le ventilateur se déclenche avant zone dangereuse.",
        "Si non, couper avant surchauffe.",
        "Contrôler fusible et alimentation au ventilateur.",
        "Tester le ventilateur en alimentation directe sécurisée.",
        "Contrôler le thermocontact et son connecteur."
      ],
      expected: "Ventilateur alimenté et déclenché automatiquement à température élevée.",
      bad: "Ventilateur direct OK mais pas déclenché : thermocontact/connectique/faisceau. Ventilateur direct HS : moteur ventilateur ou masse.",
      rta: ["refroidissement", "fusibles"]
    },
    circulationPompeEau: {
      title: "Contrôler la circulation de pompe à eau",
      tools: ["Lampe", "Gants", "Thermomètre infrarouge si disponible"],
      where: "Pompe à eau côté distribution, durites radiateur, vase d'expansion.",
      how: [
        "Moteur froid, vérifier niveau correct.",
        "Faire chauffer en observant les durites et le retour éventuel au vase.",
        "Chercher bruit de roulement ou fuite au trou de purge de pompe.",
        "Comparer température entrée/sortie radiateur.",
        "Si distribution/pompe récemment remplacée, contrôler purge et niveau après plusieurs cycles."
      ],
      expected: "Durites qui chauffent de façon cohérente, chauffage habitacle présent, pas de bruit ni fuite pompe.",
      bad: "Surchauffe avec radiateur froid, chauffage absent, bruit/fuite pompe : pompe à eau, purge ou thermostat à contrôler.",
      rta: ["refroidissement", "distribution"]
    },
    purgeRefroidissement: {
      title: "Purger et surveiller le circuit de refroidissement",
      tools: ["Liquide adapté", "Entonnoir", "Gants", "Chiffon"],
      where: "Vase d'expansion, durites hautes, chauffage habitacle.",
      how: [
        "Remplir moteur froid jusqu'au niveau correct.",
        "Mettre le chauffage habitacle sur chaud.",
        "Démarrer et laisser chauffer bouchon ouvert seulement si la méthode du véhicule le permet, sans éclaboussures.",
        "Masser doucement les grosses durites pour aider les bulles à sortir.",
        "Fermer, faire un cycle chauffe/refroidissement, puis refaire le niveau à froid."
      ],
      expected: "Niveau stabilisé après quelques cycles, chauffage présent, pas de bulles persistantes.",
      bad: "Bulles continues, durites dures très vite ou niveau qui remonte/déborde : suspecter gaz de combustion, bouchon ou purge impossible.",
      rta: ["refroidissement"]
    },
    sondeTemperatureMesure: {
      title: "Contrôler la sonde de température",
      tools: ["Multimètre", "Lampe", "Nettoyant contact"],
      where: "Sondes de température sur le circuit d'eau moteur. Sur ce dossier, l'emplacement exact doit être confirmé visuellement sur le moteur NE et la RTA.",
      how: [
        "Identifier la sonde concernée : jauge tableau de bord, thermocontact ventilateur ou commande starter selon symptôme.",
        "Contrôler connecteur : broches oxydées, fil cassé, cosse lâche.",
        "Comparer moteur froid : indication tableau proche du froid.",
        "Comparer moteur chaud : durites chaudes, chauffage présent, ventilateur éventuel.",
        "Mesurer résistance de la sonde si les valeurs RTA exactes sont disponibles."
      ],
      expected: "Indication cohérente avec température réelle et connecteur sain.",
      bad: "Indication incohérente avec moteur réellement chaud/froid : sonde, masse, fil ou combiné.",
      rta: ["instruments", "refroidissement"],
      missing: "Je n'ai pas encore une photo annotée fiable de l'emplacement exact de chaque sonde sur cette voiture. À ajouter avec une photo moteur."
    },
    comparerTemperatureReelle: {
      title: "Comparer température réelle : durites, chauffage, ventilateur",
      tools: ["Main protégée", "Thermomètre infrarouge conseillé", "Lampe"],
      where: "Durites radiateur, radiateur, sortie chauffage habitacle et ventilateur.",
      how: [
        "Démarrer moteur froid et noter l'aiguille au tableau.",
        "Après quelques minutes, vérifier que le chauffage habitacle commence à souffler tiède/chaud.",
        "Toucher prudemment les durites avec gant : une durite devient chaude progressivement, le radiateur chauffe après ouverture thermostat.",
        "Si l'aiguille indique chaud mais durites/radiateur restent froids, suspecter indication fausse ou circulation bloquée.",
        "Si durites très chaudes, radiateur chaud et ventilateur ne part pas, suspecter ventilateur/thermocontact.",
        "Si chauffage froid et moteur chauffe, suspecter niveau bas, air dans circuit, pompe ou thermostat."
      ],
      expected: "L'indication tableau, les durites, le chauffage et le ventilateur racontent la même histoire.",
      bad: "Si les signes se contredisent, diagnostiquer d'abord sonde/combiné ou circulation avant de remplacer des pièces.",
      rta: ["refroidissement", "instruments"]
    },
    tensionBatterieCharge: {
      title: "Mesurer la charge alternateur",
      tools: ["Multimètre"],
      where: "Bornes + et - de la batterie.",
      how: [
        "Moteur coupé depuis quelques minutes : mesurer la batterie.",
        "Démarrer le moteur et mesurer au ralenti.",
        "Allumer phares et dégivrage si disponible, mesurer à nouveau.",
        "Accélérer légèrement et vérifier que la tension reste régulée."
      ],
      expected: "Environ 12,4-12,8 V moteur coupé si batterie chargée ; moteur tournant la tension doit monter autour de 13,8-14,5 V.",
      bad: "Pas de montée : alternateur/régulateur/courroie/excitation/masse. Plus de 14,8 V : régulateur suspect.",
      rta: ["alternateur", "masses"]
    },
    fusibleDeuxCotes: {
      title: "Contrôler un fusible alimenté des deux côtés",
      tools: ["Multimètre ou lampe témoin"],
      where: "Boîte à fusibles.",
      how: [
        "Identifier le fusible du circuit avec la RTA.",
        "Mettre la commande du circuit dans l'état où il doit être alimenté.",
        "Mesurer sur les deux languettes supérieures du fusible sans le déposer.",
        "Si tension d'un seul côté : fusible coupé.",
        "Si aucune tension : remonter vers alimentation, relais ou commande."
      ],
      expected: "12 V des deux côtés quand le circuit est alimenté.",
      bad: "Un seul côté alimenté = fusible HS. Aucun côté = circuit non alimenté ou commande amont.",
      rta: ["fusibles"]
    },
    masseChuteTension: {
      title: "Contrôler une masse par chute de tension",
      tools: ["Multimètre"],
      where: "Entre la masse de l'organe testé et la borne - batterie.",
      how: [
        "Mettre le circuit en fonctionnement pour tester sous charge.",
        "Multimètre en volts continu.",
        "Pointe noire sur borne - batterie, pointe rouge sur masse de l'organe.",
        "Lire la tension pendant que l'organe consomme.",
        "Une valeur élevée indique une mauvaise masse."
      ],
      expected: "Chute très faible, idéalement proche de 0 V.",
      bad: "Si la chute dépasse quelques dixièmes de volt, nettoyer/resserrer la masse et contrôler le câble.",
      rta: ["masses"]
    },
    alimentationApresContact: {
      title: "Contrôler l'alimentation après contact",
      tools: ["Multimètre", "Lampe témoin", "Schéma RTA"],
      where: "Sortie après contact du Neiman, borne 15, borne X/accessoires, boîte à fusibles et circuits alimentés contact mis.",
      how: [
        "Mettre le contact sans démarrer.",
        "Vérifier si les voyants du tableau de bord s'allument et si le buzzer réagit quand il devrait.",
        "Vérifier si d'autres consommateurs après contact fonctionnent : ventilation, essuie-glace, clignotants, vitres électriques selon équipement.",
        "Mesurer la tension batterie pour confirmer une alimentation générale correcte.",
        "Mesurer la présence du + après contact sur les fusibles concernés. Pour les instruments, commencer par le fusible instruments indiqué par la RTA.",
        "Comparer contact mis sans démarrer, pendant démarrage, puis moteur tournant.",
        "Si un circuit fonctionne seulement moteur tournant ou seulement moteur arrêté, contrôler la borne X et le contacteur de Neiman avant de remplacer l'organe."
      ],
      expected: "Contact mis, les circuits après contact reçoivent une tension proche de la batterie.",
      bad: "Aucun + après contact : suspecter contacteur de Neiman, alimentation amont, connecteur principal ou coupure dans la boîte à fusibles. Si seuls les accessoires X sont incohérents, contrôler le relais de délestage X/J18.",
      rta: ["fusibles", "instruments", "masses"]
    },
    controleRelaisDelestageX: {
      title: "Tester le relais de délestage X / relais automobile",
      tools: ["Multimètre", "Lampe témoin", "Fil de test protégé par fusible", "Schéma RTA"],
      where: "Platine relais / boîte à fusibles. Le relais de délestage X est le relais J18 sur les schémas VAG ; sa position exacte doit être confirmée sur la platine de la voiture.",
      how: [
        "Ne pas commencer par ce relais si seul le combiné est mort : contrôler d'abord batterie, fusibles instruments, + après contact et masses.",
        "Le tester en priorité si plusieurs accessoires X sont incohérents : vitres électriques, ventilation, essuie-glace, dégivrage ou accessoires qui changent de comportement entre contact mis et moteur tournant.",
        "Sur le relais, repérer les bornes normalisées : 85 et 86 pour la bobine, 30 pour l'alimentation, 87 pour la sortie, 87a si relais 5 broches.",
        "Sur le socle du relais, vérifier que la borne 30 reçoit une alimentation conforme au schéma.",
        "Contact mis sans lancer le démarreur, vérifier que la commande de bobine arrive sur 85/86 et que la sortie 87 alimente les accessoires X.",
        "Pendant l'action démarreur, la sortie X peut être coupée brièvement : c'est le rôle normal du délestage. Elle doit revenir quand la clé revient en position contact/marche.",
        "Relais déposé sur établi : mesurer 85-86, alimenter la bobine en 12 V avec un fil protégé, écouter le clic, puis contrôler que 30 et 87 deviennent passants.",
        "Si un symbole de diode est dessiné sur le relais, respecter la polarité 85/86 pendant le test."
      ],
      expected: "Les accessoires X sont alimentés contact mis, coupés seulement pendant l'action démarreur, puis réalimentés moteur tournant.",
      bad: "Pas d'alimentation sur 30 : circuit amont. Pas de commande sur 85/86 : contacteur de Neiman, borne X ou faisceau. Commande présente mais pas de sortie 87 : relais ou socle suspect.",
      rta: ["fusibles", "commandesMoteursOptions", "essuieGlace", "chauffage"],
      photo: {
        title: "Photo de repère",
        src: "images/automotive-relay.jpg",
        alt: "Relais automobile standard",
        caption: "Relais automobile standard : les numéros de bornes sont souvent moulés sous le relais.",
        source: "https://commons.wikimedia.org/wiki/File:AutomotiveRelay.jpg"
      },
      diagram: "relay5pin"
    },
    alimentationCombine: {
      title: "Contrôler alimentation du combiné d'instruments",
      tools: ["Multimètre", "Lampe témoin", "Schéma RTA"],
      where: "Connecteur arrière du combiné d'instruments, sans tirer brutalement sur le faisceau.",
      how: [
        "Déposer le combiné seulement après avoir contrôlé batterie, + après contact et fusibles.",
        "Identifier sur la RTA les alimentations permanentes, après contact, éclairage et masses du combiné.",
        "Contact mis, mesurer la tension entre alimentation du combiné et borne - batterie.",
        "Mesurer ensuite entre alimentation du combiné et masse locale du combiné.",
        "Comparer les deux mesures pour distinguer perte d'alimentation et mauvaise masse."
      ],
      expected: "Le combiné reçoit son alimentation et sa masse contact mis.",
      bad: "Alimentation absente : fusible, contacteur, faisceau ou connecteur. Alimentation présente mais masse mauvaise : réparer masse/faisceau. Alimentation et masse bonnes mais combiné mort : combiné suspect.",
      rta: ["instruments", "fusibles", "masses"]
    },
    connecteurCombine: {
      title: "Contrôler connecteur et pistes du combiné",
      tools: ["Lampe", "Multimètre", "Nettoyant contact"],
      where: "Arrière du combiné d'instruments et connecteur du faisceau tableau de bord.",
      how: [
        "Débrancher la batterie si une dépose complète est nécessaire.",
        "Déposer le combiné sans forcer le câble de compteur ni le faisceau.",
        "Inspecter broches tordues, oxydation, connecteur mal verrouillé ou piste fissurée.",
        "Nettoyer les contacts si oxydés.",
        "Reposer et tester avant de conclure au combiné HS."
      ],
      expected: "Connecteur bien verrouillé, broches propres, pistes visuellement intactes.",
      bad: "Connecteur mal engagé ou piste fissurée : réparer avant remplacement du combiné.",
      rta: ["instruments", "masses"]
    },
    compteurKilometrique: {
      title: "Contrôler compteur kilométrique et compteur de vitesse",
      tools: ["Lampe", "Tournevis adaptés", "Marqueur ou note kilométrage", "Schéma RTA"],
      where: "Combiné d'instruments, câble de compteur et mécanisme d'odomètre.",
      how: [
        "Noter si l'aiguille de vitesse fonctionne pendant roulage.",
        "Si l'aiguille fonctionne mais que le kilométrage total ou journalier n'avance pas, suspecter d'abord le mécanisme interne de l'odomètre.",
        "Si l'aiguille de vitesse et le kilométrage sont tous les deux morts, contrôler câble de compteur, entraînement côté boîte et fixation derrière le combiné.",
        "Déposer le combiné sans tirer brutalement sur le câble.",
        "Contrôler que le câble est bien verrouillé, non cassé et non arrondi.",
        "Si le câble entraîne bien l'aiguille mais pas les kilomètres, chercher pignon/engrenage d'odomètre fissuré ou mécanisme bloqué."
      ],
      expected: "L'aiguille de vitesse et les rouleaux kilométriques avancent ensemble quand le câble entraîne le compteur.",
      bad: "Vitesse OK mais kilomètres immobiles : panne interne d'odomètre probable. Vitesse et kilomètres morts : câble, entraînement de boîte ou fixation compteur.",
      rta: ["instruments"],
      missing: "Il manque encore une photo interne fiable du compteur ouvert pour identifier précisément le pignon d'odomètre de ce combiné."
    },
    etincelleAllumage: {
      title: "Contrôler l'étincelle d'allumage",
      tools: ["Testeur d'étincelle", "Gants isolants", "Clé à bougie"],
      where: "Bougies, fils HT, tête d'allumeur, bobine.",
      how: [
        "Utiliser un testeur d'étincelle plutôt qu'une bougie tenue à la main.",
        "Tester pendant action démarreur.",
        "Comparer qualité de l'étincelle : régulière, bleue, franche.",
        "Si absente sur tous cylindres, remonter vers bobine, module, capteur Hall, alimentation.",
        "Si absente sur un cylindre, contrôler fil HT, tête, doigt, bougie."
      ],
      expected: "Étincelle régulière sur chaque cylindre.",
      bad: "Absence ou faiblesse : diagnostiquer allumage avant carburateur.",
      rta: ["allumage", "miseAuPoint"]
    },
    priseAirAdmission: {
      title: "Rechercher une prise d'air admission",
      tools: ["Lampe", "Pince", "Produit adapté avec prudence"],
      where: "Semelle carburateur, durites de dépression, collecteur, servo-frein, reniflard.",
      how: [
        "Inspecter visuellement chaque durite : fendue, débranchée, bouchon manquant.",
        "Bouger doucement les durites moteur au ralenti pour voir si le régime change.",
        "Contrôler la semelle du carburateur : fissures, jeu, suintement.",
        "Contrôler la grosse durite de servo-frein et son clapet.",
        "Toute méthode avec produit inflammable doit être faite avec grande prudence, loin de l'échappement."
      ],
      expected: "Ralenti stable, aucune durite craquelée, aucun changement de régime au test.",
      bad: "Régime qui change ou durite fissurée : réparer avant tout réglage carburateur.",
      rta: ["carburateur11", "carburateur12"]
    },
    debitEssence: {
      title: "Contrôler l'arrivée d'essence",
      tools: ["Récipient adapté", "Durite transparente provisoire si disponible", "Extincteur à proximité"],
      where: "Durite d'arrivée carburateur, filtre à essence, pompe mécanique.",
      how: [
        "Travailler moteur froid, loin d'étincelles.",
        "Contrôler durites et filtre : sens, dépôts, pincement.",
        "Débrancher avec prudence l'arrivée carburateur vers un récipient adapté.",
        "Actionner le démarreur brièvement et observer si le débit arrive par impulsions régulières.",
        "Rebrancher avec colliers sûrs et vérifier absence de fuite."
      ],
      expected: "Débit régulier, carburant propre, pas de fuite.",
      bad: "Débit faible/intermittent : filtre, pompe mécanique, crépine, durite pincée ou vapor lock.",
      rta: ["carburateur10", "carburateur12"]
    },
    bougiesLecture: {
      title: "Lire l'état des bougies",
      tools: ["Clé à bougie", "Lampe", "Jauge d'écartement"],
      where: "Quatre bougies sur culasse.",
      how: [
        "Déposer une bougie à la fois pour ne pas inverser les fils.",
        "Observer couleur : beige/gris normal, noir sec riche/allumage faible, noir humide noyade, blanc pauvre/chauffe.",
        "Comparer les quatre cylindres.",
        "Contrôler écartement et usure électrode.",
        "Remonter au couple adapté si connu, sans forcer dans la culasse."
      ],
      expected: "Couleur homogène et électrodes en bon état.",
      bad: "Un cylindre différent : fil, compression, prise d'air locale ou bougie. Toutes noires : richesse/starter/allumage.",
      rta: ["miseAuPoint", "allumage"]
    },
    compressionTest: {
      title: "Faire un test de compression",
      tools: ["Compressiomètre", "Clé à bougie", "Batterie chargée"],
      where: "Puits de bougies.",
      how: [
        "Chauffer le moteur si possible, puis couper allumage/alimentation.",
        "Déposer les bougies.",
        "Ouvrir le papillon en grand.",
        "Mesurer chaque cylindre avec le même nombre de tours moteur.",
        "Comparer les cylindres entre eux."
      ],
      expected: "Valeurs proches entre cylindres. La valeur exacte doit être recoupée avec la RTA.",
      bad: "Un cylindre bas : refaire avec quelques gouttes d'huile pour distinguer segments et soupapes/joint.",
      rta: ["culasse", "moteurDonnees"]
    },
    batterieSousCharge: {
      title: "Mesurer la batterie pendant action sur un consommateur",
      tools: ["Multimètre"],
      where: "Bornes de batterie, puis connecteur de l'organe qui force ou ne fonctionne pas.",
      how: [
        "Mesurer la batterie au repos.",
        "Actionner l'organe en panne pendant la mesure : lève-vitre, démarreur, ventilation, éclairage.",
        "Comparer la tension batterie avec la tension qui arrive à l'organe.",
        "Si la batterie chute fortement, contrôler batterie et charge.",
        "Si la batterie reste correcte mais la tension à l'organe chute, chercher résistance dans fusible, relais, connecteur, masse ou faisceau."
      ],
      expected: "Tension stable et proche de la batterie au niveau de l'organe alimenté.",
      bad: "Grosse chute de tension : batterie faible, mauvais contact, câble oxydé, masse mauvaise ou moteur bloqué.",
      rta: ["fusibles", "masses"]
    },
    commandeInterrupteur: {
      title: "Contrôler interrupteur, relais et alimentation de commande",
      tools: ["Multimètre", "Lampe témoin", "Schéma RTA"],
      where: "Interrupteur de commande, relais éventuel, boîte à fusibles et connecteur de l'organe.",
      how: [
        "Identifier le fusible et l'alimentation avec la RTA.",
        "Contrôler le fusible alimenté des deux côtés.",
        "Actionner l'interrupteur et vérifier si la tension sort vers l'organe.",
        "Si relais présent, écouter/capter son déclenchement puis mesurer entrée et sortie.",
        "Comparer avec un autre côté ou une autre commande si le véhicule en possède."
      ],
      expected: "Alimentation présente en entrée et sortie de commande lorsque l'interrupteur est actionné.",
      bad: "Entrée présente mais pas de sortie : interrupteur/relais suspect. Pas d'entrée : fusible, alimentation ou faisceau amont.",
      rta: ["fusibles", "commandesMoteursOptions"]
    },
    faisceauPorte: {
      title: "Contrôler le faisceau dans le passage de porte",
      tools: ["Multimètre", "Lampe", "Nettoyant contact"],
      where: "Soufflet entre montant de caisse et porte, connecteurs de porte, masse de porte.",
      how: [
        "Ouvrir la porte et inspecter le soufflet de faisceau.",
        "Chercher fil coupé, gaine craquelée, cosse oxydée ou connecteur humide.",
        "Actionner l'organe en bougeant très doucement le faisceau : si le fonctionnement revient, le faisceau est suspect.",
        "Mesurer continuité du fil concerné entre caisse et porte.",
        "Contrôler la masse de porte sous charge, pas seulement à l'ohmmètre."
      ],
      expected: "Continuité stable, aucune coupure intermittente, connecteurs propres.",
      bad: "Fil coupé/intermittent : réparer le conducteur avec section adaptée, gaine et protection mécanique.",
      rta: ["masses", "commandesMoteursOptions"]
    },
    moteurLeveVitre: {
      title: "Contrôler moteur et mécanisme de lève-vitre",
      tools: ["Multimètre", "Lampe", "Garniture de porte déposée si nécessaire"],
      where: "Dans la porte : connecteur moteur, mécanisme, coulisses et fixation de vitre.",
      how: [
        "Identifier si une seule vitre ou toutes les vitres sont concernées.",
        "Comparer contact coupé, contact mis et moteur tournant.",
        "Mesurer la tension au connecteur du moteur pendant action sur l'interrupteur.",
        "Si tension et masse sont bonnes mais rien ne bouge, suspecter moteur ou mécanisme bloqué.",
        "Si le moteur force, contrôler coulisses, câble/bras de mécanisme et points durs de la vitre."
      ],
      expected: "Tension inversée selon montée/descente, moteur qui tourne sans chute excessive ni point dur.",
      bad: "Tension absente : commande/faisceau. Tension présente mais moteur muet : moteur ou masse. Moteur force : mécanisme/coulisses.",
      rta: ["commandesMoteursOptions", "fusibles", "masses"]
    },
    controleAmpouleAlimMasse: {
      title: "Contrôler ampoule, alimentation et masse d'un éclairage",
      tools: ["Multimètre", "Lampe témoin", "Ampoule connue bonne"],
      where: "Optique, feu arrière, porte-ampoule, connecteur, masse locale.",
      how: [
        "Contrôler d'abord l'ampoule et l'état du porte-ampoule.",
        "Mettre la commande en position allumée.",
        "Mesurer la tension entre alimentation du feu et masse batterie.",
        "Mesurer ensuite entre alimentation du feu et masse locale.",
        "Si tension présente mais feu éteint, contrôler masse et porte-ampoule."
      ],
      expected: "Tension batterie au feu, masse correcte, ampoule et porte-ampoule propres.",
      bad: "Pas de tension : fusible/commande/faisceau. Tension présente mais pas d'éclairage : masse, ampoule ou porte-ampoule.",
      rta: ["fusibles", "masses", "instruments"]
    },
    controleEssuieGlace: {
      title: "Contrôler essuie-glace",
      tools: ["Multimètre", "Lampe", "Schéma RTA"],
      where: "Fusible, commodo, moteur d'essuie-glace, masse et mécanisme de tringlerie.",
      how: [
        "Contrôler le fusible alimenté.",
        "Écouter si le moteur tente de tourner.",
        "Mesurer alimentation et masse au moteur pendant commande.",
        "Contrôler que la tringlerie n'est pas bloquée.",
        "Si le moteur tourne mais les bras ne bougent pas, contrôler axes et tringlerie."
      ],
      expected: "Alimentation présente, masse correcte, tringlerie libre.",
      bad: "Alimentation absente : fusible/commande/faisceau. Moteur alimenté mais immobile : moteur ou tringlerie bloquée.",
      rta: ["essuieGlace", "fusibles", "masses"]
    },
    controleLaveGlace: {
      title: "Contrôler lave-glace",
      tools: ["Multimètre", "Lampe", "Aiguille fine pour gicleur"],
      where: "Réservoir, pompe de lave-glace, durites, gicleurs, commande.",
      how: [
        "Vérifier le niveau de lave-glace.",
        "Actionner la commande et écouter la pompe.",
        "Mesurer tension et masse au connecteur de pompe.",
        "Si la pompe tourne, contrôler durite débranchée, pincée ou gicleurs bouchés.",
        "Nettoyer les gicleurs sans agrandir brutalement l'orifice."
      ],
      expected: "Pompe alimentée, durites étanches, jet régulier aux gicleurs.",
      bad: "Pompe muette alimentée : pompe HS. Pompe non alimentée : fusible/commande/faisceau. Pompe tourne sans jet : durite/gicleur.",
      rta: ["essuieGlace", "fusibles"]
    },
    controleVentilationHabitacle: {
      title: "Contrôler ventilation habitacle",
      tools: ["Multimètre", "Lampe", "Schéma RTA"],
      where: "Commande de ventilation, fusible, résistance de vitesses, moteur de soufflante.",
      how: [
        "Tester toutes les vitesses de ventilation.",
        "Si seule la grande vitesse fonctionne, suspecter résistance de ventilation.",
        "Si aucune vitesse ne fonctionne, contrôler fusible, alimentation de commande et masse moteur.",
        "Mesurer la tension au moteur de soufflante pendant commande.",
        "Contrôler que le moteur ne force pas mécaniquement."
      ],
      expected: "Chaque vitesse fonctionne, moteur régulier, pas d'odeur de chaud.",
      bad: "Une vitesse absente : résistance/commande. Toutes absentes : fusible, alimentation, masse ou moteur.",
      rta: ["chauffage", "fusibles", "masses"]
    },
    controleChauffageHabitacle: {
      title: "Contrôler chauffage habitacle",
      tools: ["Main protégée", "Lampe", "Thermomètre infrarouge si disponible"],
      where: "Durites de chauffage au tablier, commande chaud/froid, soufflante, niveau de liquide.",
      how: [
        "Vérifier niveau de liquide de refroidissement moteur froid.",
        "Mettre la commande sur chaud et la ventilation en marche.",
        "Comparer température des deux durites de chauffage au tablier.",
        "Si une durite reste froide, suspecter air dans circuit, radiateur de chauffage bouché ou circulation.",
        "Si les durites sont chaudes mais l'air reste froid, contrôler volet/câble de commande."
      ],
      expected: "Deux durites chaudes et air chaud dans l'habitacle moteur chaud.",
      bad: "Durites froides : circuit/refroidissement. Durites chaudes mais air froid : commande de volet ou boîtier chauffage.",
      rta: ["chauffage", "refroidissement"]
    },
    controleFreinsVisuel: {
      title: "Contrôler disques, plaquettes et flexibles",
      tools: ["Cric", "Chandelles", "Lampe", "Pied à coulisse si disponible"],
      where: "Roues avant/arrière, étriers, flexibles, disques.",
      how: [
        "Lever et sécuriser la voiture sur chandelles.",
        "Déposer la roue.",
        "Observer épaisseur plaquette, usure régulière, disque rayé/voilé/corrodé.",
        "Contrôler flexible : craquelure, torsion, frottement, hernie.",
        "Contrôler fuite étrier/cylindre et état purgeur."
      ],
      expected: "Usure régulière, flexible sain, aucune fuite.",
      bad: "Flexible abîmé ou fuite : réparer/purger avant roulage. Plaquettes/disques usés : remplacer par essieu.",
      rta: ["freins", "plaquettes", "purgeFrein"]
    }
  },

  pieces: {
    thermostat: {
      title: "Thermostat",
      location: "Dans le circuit de refroidissement côté moteur, au boîtier de sortie d'eau. L'emplacement exact doit être confirmé sur la voiture avant dépose.",
      role: "Ferme le passage vers le radiateur à froid puis s'ouvre à chaud pour réguler la température.",
      tests: ["thermostatDurites", "comparerTemperatureReelle"],
      repair: [
        "Vidanger suffisamment le liquide pour ouvrir le boîtier sans déversement important.",
        "Déposer la durite/boîtier concerné.",
        "Remplacer thermostat et joint.",
        "Remplir, purger, contrôler fuites et déclenchement ventilateur."
      ],
      rta: ["refroidissement", "moteurDonnees"]
    },
    pompeEau: {
      title: "Pompe à eau",
      location: "Côté distribution/refroidissement moteur. Sur ce moteur, l'accès est lié à la zone distribution.",
      role: "Fait circuler le liquide de refroidissement dans le moteur, radiateur et chauffage.",
      tests: ["circulationPompeEau", "purgeRefroidissement"],
      repair: [
        "Confirmer fuite/bruit/circulation avant dépose.",
        "Se référer à la RTA distribution/refroidissement avant démontage.",
        "Prévoir liquide, joints et contrôle de calage/tension si la zone distribution est ouverte.",
        "Après remontage : purge, montée en température, contrôle fuite."
      ],
      rta: ["refroidissement", "distribution"]
    },
    radiateur: {
      title: "Radiateur",
      location: "À l'avant du compartiment moteur, derrière la calandre/ventilateur.",
      role: "Refroidit le liquide lorsque le thermostat ouvre le grand circuit.",
      tests: ["thermostatDurites", "ventilateurDeclenchement", "comparerTemperatureReelle"],
      repair: [
        "Contrôler fuite, ailettes bouchées, zones froides/chaudes anormales.",
        "Déposer durites et fixations seulement moteur froid et circuit vidangé.",
        "Remplacer les silentblocs/colliers fatigués si nécessaire.",
        "Remplir, purger, contrôler déclenchement ventilateur."
      ],
      rta: ["refroidissement"]
    },
    thermocontact: {
      title: "Thermocontact de ventilateur",
      location: "Sur le radiateur ou la zone de commande du ventilateur selon montage exact.",
      role: "Ferme le circuit du ventilateur quand le radiateur atteint la température de déclenchement.",
      tests: ["ventilateurDeclenchement", "fusibleDeuxCotes"],
      repair: [
        "Contrôler d'abord fusible, moteur ventilateur et masse.",
        "Débrancher le connecteur et identifier les bornes.",
        "Remplacer si ventilateur fonctionne en direct mais jamais par température.",
        "Prévoir perte de liquide si la sonde est vissée dans le radiateur."
      ],
      rta: ["refroidissement", "fusibles"]
    },
    ventilateur: {
      title: "Ventilateur de radiateur",
      location: "Derrière le radiateur.",
      role: "Force le passage d'air dans le radiateur à basse vitesse ou à l'arrêt.",
      tests: ["ventilateurDeclenchement", "masseChuteTension"],
      repair: [
        "Tester alimentation directe sécurisée.",
        "Contrôler que les pales tournent librement.",
        "Contrôler connecteur et masse.",
        "Remplacer moteur ventilateur si alimentation et masse sont bonnes mais qu'il ne tourne pas."
      ],
      rta: ["refroidissement", "fusibles"]
    },
    bouchonVase: {
      title: "Bouchon de vase d'expansion",
      location: "Sur le vase d'expansion.",
      role: "Maintient la pression correcte du circuit de refroidissement.",
      tests: ["niveauLdr", "purgeRefroidissement"],
      repair: [
        "Contrôler joint et propreté.",
        "Remplacer si pression incohérente, débordements ou doute après autres contrôles.",
        "Utiliser un bouchon de pression adaptée."
      ],
      rta: ["refroidissement"]
    },
    sondeTemperature: {
      title: "Sonde de température",
      location: "Sur le circuit d'eau moteur. La fiche exacte jauge/commande doit être identifiée sur la voiture.",
      role: "Informe la jauge ou un circuit de commande selon la sonde concernée.",
      tests: ["sondeTemperatureMesure", "comparerTemperatureReelle", "masseChuteTension"],
      repair: [
        "Identifier la bonne sonde avant remplacement.",
        "Nettoyer connecteur et vérifier fil.",
        "Remplacer avec joint si mesure/indication confirme la sonde.",
        "Refaire niveau/purge si la dépose ouvre le circuit."
      ],
      rta: ["instruments", "refroidissement"],
      missing: "Besoin d'une photo moteur annotée pour verrouiller l'emplacement exact des sondes sur cette voiture."
    },
    combine: {
      title: "Combiné d'instruments",
      location: "Derrière le volant, dans le tableau de bord.",
      role: "Affiche température, vitesse, témoins, voyants et kilométrage.",
      tests: ["alimentationApresContact", "alimentationCombine", "masseChuteTension", "connecteurCombine", "compteurKilometrique"],
      repair: [
        "Contrôler batterie, + après contact, fusibles et masses avant dépose.",
        "Déposer sans tirer sur le faisceau.",
        "Contrôler connecteur, pistes, régulateur interne et ampoules.",
        "Documenter le kilométrage si intervention sur compteur."
      ],
      rta: ["instruments", "masses"]
    },
    contacteurNeiman: {
      title: "Contacteur de Neiman / + après contact",
      location: "Derrière le barillet de contact, en amont des circuits alimentés contact mis.",
      role: "Distribue l'alimentation après contact et la borne X/accessoires vers les circuits tableau de bord et accessoires.",
      tests: ["alimentationApresContact", "controleRelaisDelestageX", "fusibleDeuxCotes"],
      repair: [
        "Confirmer l'absence de + après contact avant toute dépose.",
        "Comparer la position contact mis, la position démarreur et la position moteur tournant.",
        "Contrôler connecteur et alimentation amont.",
        "Remplacer le contacteur seulement si la sortie après contact ou la sortie X est absente malgré une alimentation correcte."
      ],
      rta: ["fusibles", "instruments"]
    },
    relaisDelestageX: {
      title: "Relais de délestage X / J18",
      location: "Platine relais près de la boîte à fusibles. Sur les documents VAG, il est appelé relais de délestage X ou J18 ; confirmer l'emplacement exact avec le couvercle de platine et la RTA.",
      role: "Coupe temporairement des accessoires pendant l'action démarreur pour soulager la batterie, puis les réalimente en position contact/marche.",
      tests: ["controleRelaisDelestageX", "alimentationApresContact", "fusibleDeuxCotes"],
      repair: [
        "Ne pas le remplacer uniquement parce que le compteur est mort : il n'est pas le relais principal du combiné.",
        "Le suspecter si plusieurs accessoires X changent de comportement entre contact mis, démarrage et moteur tournant.",
        "Tester alimentation, commande et sortie sur le socle avant remplacement.",
        "Contrôler le contacteur de Neiman si la commande du relais n'arrive pas correctement."
      ],
      rta: ["fusibles", "commandesMoteursOptions", "essuieGlace", "chauffage"]
    },
    faisceauTableauBord: {
      title: "Faisceau tableau de bord / boîte à fusibles",
      location: "Entre batterie, Neiman, boîte à fusibles, masses et combiné d'instruments.",
      role: "Distribue les alimentations et masses des instruments, voyants et signaux sonores.",
      tests: ["fusibleDeuxCotes", "alimentationCombine", "masseChuteTension", "connecteurCombine"],
      repair: [
        "Rechercher d'abord un fusible non alimenté, un connecteur mal engagé ou une masse oxydée.",
        "Contrôler continuité seulement après avoir identifié le fil sur la RTA.",
        "Réparer avec section de fil adaptée et protection mécanique correcte."
      ],
      rta: ["fusibles", "instruments", "masses"]
    },
    alternateur: {
      title: "Alternateur / régulateur",
      location: "Avant/latéral moteur, entraîné par courroie accessoire.",
      role: "Recharge la batterie et alimente les consommateurs moteur tournant.",
      tests: ["tensionBatterieCharge", "masseChuteTension"],
      repair: [
        "Contrôler courroie, connecteur excitation et câble de charge.",
        "Contrôler régulateur/charbons si accessible.",
        "Remplacer ou faire tester l'alternateur si la charge est absente malgré câblage correct."
      ],
      rta: ["alternateur", "masses"]
    },
    carburateur: {
      title: "Carburateur Keihin KS2",
      location: "Au-dessus du collecteur d'admission.",
      role: "Dose air/essence, starter, ralenti et reprise.",
      tests: ["priseAirAdmission", "debitEssence", "bougiesLecture"],
      repair: [
        "Ne pas régler avant d'avoir contrôlé allumage et prises d'air.",
        "Nettoyer/contrôler gicleurs, membranes, flotteur et pointeau.",
        "Régler ralenti/richesse moteur chaud, idéalement avec analyseur CO."
      ],
      rta: ["carburateur10", "carburateur11", "carburateur12"]
    },
    leveVitre: {
      title: "Lève-vitre électrique",
      location: "Dans la porte concernée : interrupteur, faisceau de passage de porte, moteur et mécanisme de vitre.",
      role: "Monte et descend la vitre par un moteur électrique et un mécanisme guidé dans la porte.",
      tests: ["batterieSousCharge", "commandeInterrupteur", "faisceauPorte", "moteurLeveVitre"],
      repair: [
        "Identifier si une seule vitre ou toutes les vitres sont touchées.",
        "Ne déposer la garniture de porte qu'après contrôle fusible, commande et tension.",
        "Réparer d'abord faisceau/connecteur si la tension n'arrive pas correctement.",
        "Remplacer ou réparer moteur/mécanisme si l'alimentation est bonne mais que la vitre ne bouge pas ou force."
      ],
      rta: ["commandesMoteursOptions", "fusibles", "masses"]
    },
    eclairage: {
      title: "Éclairage / porte-ampoule",
      location: "Optiques avant, feux arrière, porte-ampoules, commandes, fusibles et masses locales.",
      role: "Assure visibilité, signalisation et conformité au contrôle technique.",
      tests: ["controleAmpouleAlimMasse", "fusibleDeuxCotes", "masseChuteTension"],
      repair: [
        "Remplacer ampoule seulement après contrôle du porte-ampoule et de la masse.",
        "Nettoyer oxydation et resserrer cosses si nécessaire.",
        "Réparer faisceau ou commande si l'alimentation n'arrive pas."
      ],
      rta: ["fusibles", "masses", "instruments", "antibrouillard"]
    },
    essuieLaveGlace: {
      title: "Essuie-glace / lave-glace",
      location: "Commodo, fusible, moteur d'essuie-glace, tringlerie, pompe de lave-glace, durites et gicleurs.",
      role: "Maintient le pare-brise utilisable sous pluie ou salissures.",
      tests: ["controleEssuieGlace", "controleLaveGlace", "fusibleDeuxCotes", "masseChuteTension"],
      repair: [
        "Isoler si la panne est électrique, mécanique ou hydraulique.",
        "Débloquer/remplacer tringlerie ou moteur si alimenté mais immobile.",
        "Remplacer pompe, durite ou gicleur si le lave-glace est alimenté mais ne projette pas."
      ],
      rta: ["essuieGlace", "fusibles", "masses"]
    },
    chauffageVentilation: {
      title: "Chauffage / ventilation habitacle",
      location: "Commande de chauffage, soufflante, résistance de vitesses, durites au tablier et boîtier de chauffage.",
      role: "Chauffe, ventile et désembue l'habitacle.",
      tests: ["controleVentilationHabitacle", "controleChauffageHabitacle", "niveauLdr"],
      repair: [
        "Séparer panne d'air soufflé et panne de chaleur.",
        "Contrôler soufflante/résistance si les vitesses ne fonctionnent pas.",
        "Contrôler circuit de refroidissement et volet chaud/froid si l'air reste froid."
      ],
      rta: ["chauffage", "refroidissement", "fusibles"]
    }
  },

  problems: [
    {
      id: "surchauffe",
      title: "Surchauffe moteur",
      category: "Refroidissement",
      keywords: ["surchauffe", "chauffe", "température haute", "liquide refroidissement", "ventilateur", "thermostat", "pompe eau", "radiateur"],
      symptom: "Température trop haute, voyant, ventilateur qui ne suffit pas ou débordement.",
      controls: ["niveauLdr", "thermostatDurites", "ventilateurDeclenchement", "circulationPompeEau", "purgeRefroidissement"],
      suspects: ["thermostat", "pompeEau", "radiateur", "thermocontact", "ventilateur", "bouchonVase", "sondeTemperature"],
      rta: ["refroidissement", "moteurDonnees"],
      emergency: "Ne pas ouvrir le circuit chaud. Couper le moteur si la température grimpe."
    },
    {
      id: "temperature-fausse",
      title: "Indication température fausse",
      category: "Instruments / refroidissement",
      keywords: ["jauge température", "température fausse", "aiguille", "sonde température", "chauffe pas", "thermostat"],
      symptom: "Aiguille température incohérente, toujours basse/haute ou instable.",
      controls: ["comparerTemperatureReelle", "sondeTemperatureMesure", "masseChuteTension", "fusibleDeuxCotes"],
      suspects: ["sondeTemperature", "combine", "thermostat"],
      rta: ["instruments", "refroidissement"],
      emergency: "Ne pas ignorer une vraie surchauffe sous prétexte d'une jauge suspecte."
    },
    {
      id: "pas-de-charge",
      title: "Alternateur / pas de charge",
      category: "Électricité / charge",
      keywords: ["alternateur", "batterie", "charge", "voyant batterie", "courroie"],
      symptom: "Batterie qui ne recharge pas, voyant batterie ou tension qui ne monte pas moteur tournant.",
      controls: ["tensionBatterieCharge", "masseChuteTension", "fusibleDeuxCotes"],
      suspects: ["alternateur"],
      rta: ["alternateur", "masses"],
      emergency: "Une batterie non chargée peut arrêter le moteur et empêcher le redémarrage."
    },
    {
      id: "ne-demarre-pas",
      title: "Le moteur ne démarre pas",
      category: "Démarrage",
      keywords: ["ne démarre pas", "demarreur", "démarrage", "lance pas", "tourne mais part pas"],
      symptom: "Le démarreur ne lance pas, ou il lance mais le moteur ne part pas.",
      controls: ["tensionBatterieCharge", "etincelleAllumage", "debitEssence", "fusibleDeuxCotes", "masseChuteTension"],
      suspects: ["alternateur", "carburateur"],
      rta: ["alternateur", "allumage", "carburateur10"],
      emergency: "Si odeur d'essence forte, arrêter et ventiler avant de tester l'allumage."
    },
    {
      id: "ralenti-instable",
      title: "Ralenti instable / calage",
      category: "Carburation / allumage",
      keywords: ["ralenti", "cale", "calage", "broute", "instable", "starter"],
      symptom: "Ralenti qui monte/descend, calage au stop ou moteur irrégulier.",
      controls: ["priseAirAdmission", "etincelleAllumage", "bougiesLecture", "debitEssence"],
      suspects: ["carburateur"],
      rta: ["carburateur10", "carburateur11", "allumage"],
      emergency: "Éviter les réglages richesse tant que les prises d'air et l'allumage ne sont pas validés."
    },
    {
      id: "trous-acceleration",
      title: "Trous à l'accélération",
      category: "Carburation / allumage",
      keywords: ["trou", "accélération", "accoup", "broute", "reprise", "puissance"],
      symptom: "Hésitation ou trou quand tu accélères, surtout en reprise.",
      controls: ["priseAirAdmission", "debitEssence", "bougiesLecture", "etincelleAllumage"],
      suspects: ["carburateur"],
      rta: ["carburateur11", "allumage"],
      emergency: "Si le trou arrive avec odeur essence ou fuite, traiter d'abord la fuite."
    },
    {
      id: "pollution-co",
      title: "Pollution CO élevée",
      category: "Carburation / contrôle technique",
      keywords: ["pollution", "co", "contrôle technique", "richesse", "carburateur"],
      symptom: "CO trop haut au contrôle technique, odeur essence ou bougies noires.",
      controls: ["bougiesLecture", "priseAirAdmission", "etincelleAllumage"],
      suspects: ["carburateur"],
      rta: ["carburateur10", "carburateur11", "miseAuPoint"],
      emergency: "Le réglage final de richesse doit se faire avec mesure CO."
    },
    {
      id: "fuite-liquide-refroidissement",
      title: "Fuite de liquide de refroidissement",
      category: "Refroidissement",
      keywords: ["fuite liquide", "liquide refroidissement", "niveau baisse", "pompe eau", "pompe à eau", "radiateur", "thermostat"],
      symptom: "Niveau qui baisse, trace de liquide, odeur chaude ou flaque.",
      controls: ["niveauLdr", "circulationPompeEau", "purgeRefroidissement"],
      suspects: ["pompeEau", "radiateur", "bouchonVase", "thermostat"],
      rta: ["refroidissement"],
      emergency: "Ne pas rouler si le niveau chute vite ou si la température monte."
    },
    {
      id: "pression-huile",
      title: "Voyant pression d'huile",
      category: "Graissage",
      keywords: ["huile", "pression", "voyant huile", "graissage"],
      symptom: "Voyant huile ou doute sur graissage moteur.",
      controls: ["fusibleDeuxCotes", "masseChuteTension"],
      suspects: [],
      rta: ["graissage"],
      emergency: "Si voyant pression d'huile persistant : couper le moteur immédiatement.",
      missing: "Il manque encore un protocole spécifique de mesure de pression d'huile avec manomètre et valeurs RTA exactes."
    },
    {
      id: "freinage",
      title: "Freinage faible, bruit ou vibration",
      category: "Freinage",
      keywords: ["frein", "plaquette", "disque", "pédale", "flexible", "vibration frein"],
      symptom: "Freinage faible, pédale spongieuse, bruit, vibration ou défaut CT sur flexibles/disques.",
      controls: ["controleFreinsVisuel", "masseChuteTension"],
      suspects: [],
      rta: ["freins", "plaquettes", "purgeFrein"],
      emergency: "Ne pas rouler si fuite de liquide, pédale molle ou flexible abîmé."
    },
    {
      id: "antibrouillard-arriere",
      title: "Antibrouillard arrière absent",
      category: "Éclairage / habitacle",
      keywords: ["antibrouillard", "feu arrière", "éclairage", "ampoule"],
      symptom: "Feu antibrouillard arrière défectueux ou absent.",
      controls: ["fusibleDeuxCotes", "masseChuteTension"],
      suspects: [],
      rta: ["antibrouillard", "fusibles"],
      emergency: "Défaut de contrôle technique : réparer avant contre-visite."
    },
    {
      id: "compteur-inactif",
      title: "Tableau de bord / instruments totalement inactifs",
      category: "Instruments / électricité",
      keywords: ["compteur", "instrument", "voyant", "jauge", "combiné", "tableau de bord mort", "aucun voyant", "aucun son", "buzzer", "plus de voyant", "voyants eteints", "contact mis rien", "relais", "j18", "relais x", "délestage", "delestage", "compteur kilométrique", "kilometrage"],
      symptom: "Aucun voyant au contact, aucune jauge, aucun signal sonore ou combiné totalement éteint. Le compteur kilométrique peut aussi avoir une panne interne séparée.",
      controls: ["tensionBatterieCharge", "alimentationApresContact", "fusibleDeuxCotes", "alimentationCombine", "masseChuteTension", "connecteurCombine", "controleRelaisDelestageX"],
      suspects: ["contacteurNeiman", "faisceauTableauBord", "combine", "relaisDelestageX"],
      rta: ["instruments", "masses", "fusibles"],
      emergency: "Traiter la panne totale en premier : alimentation, fusibles et masses. Le compteur kilométrique déjà HS avant la panne totale peut être une deuxième panne du combiné."
    },
    {
      id: "compteur-kilometrique",
      title: "Compteur kilométrique qui n'avance plus",
      category: "Instruments / compteur",
      keywords: ["compteur kilometrique", "compteur kilométrique", "kilometrage", "kilométrage", "odomètre", "odometre", "totalisateur", "journalier", "compteur km", "km ne marche pas", "vitesse fonctionne"],
      symptom: "L'aiguille de vitesse fonctionne encore, mais le kilométrage total ou journalier ne bouge plus.",
      controls: ["compteurKilometrique", "connecteurCombine"],
      suspects: ["combine"],
      rta: ["instruments"],
      emergency: "Noter le kilométrage réel estimé avant toute intervention sur le compteur."
    },
    {
      id: "leve-vitre-electrique",
      title: "Lève-vitre électrique en panne",
      category: "Commandes et moteurs options",
      keywords: ["leve vitre", "lève vitre", "vitre electrique", "vitre électrique", "glace electrique", "moteur vitre", "interrupteur vitre", "faisceau porte", "vitre ne monte pas", "vitre ne descend pas", "contact mis", "moteur eteint", "moteur tournant", "relais x", "j18", "délestage", "delestage"],
      symptom: "Une vitre ne monte/descend plus, fonctionne seulement contact mis moteur arrêté, seulement moteur tournant, force ou reste bloquée.",
      controls: ["alimentationApresContact", "controleRelaisDelestageX", "batterieSousCharge", "commandeInterrupteur", "faisceauPorte", "moteurLeveVitre"],
      suspects: ["contacteurNeiman", "relaisDelestageX", "leveVitre", "faisceauTableauBord"],
      rta: ["commandesMoteursOptions", "fusibles", "masses"],
      emergency: "Si toutes les vitres changent de comportement selon contact/moteur, chercher d'abord alimentation X, relais de délestage et contacteur de Neiman avant de déposer une porte."
    },
    {
      id: "essuie-glace-inactif",
      title: "Essuie-glace inactif ou intermittent",
      category: "Essuie-glace / visibilité",
      keywords: ["essuie glace", "essuie-glace", "balai", "moteur essuie", "commodo essuie", "essuie glace ne marche pas", "essuie glace lent"],
      symptom: "Les essuie-glaces ne bougent pas, s'arrêtent mal, vont lentement ou fonctionnent par intermittence.",
      controls: ["controleEssuieGlace", "fusibleDeuxCotes", "masseChuteTension"],
      suspects: ["essuieLaveGlace"],
      rta: ["essuieGlace", "fusibles", "masses"],
      emergency: "Sans essuie-glace fonctionnel, éviter de rouler sous pluie."
    },
    {
      id: "lave-glace-inactif",
      title: "Lave-glace inactif",
      category: "Lave-glace / visibilité",
      keywords: ["lave glace", "lave-glace", "pompe lave glace", "gicleur", "pas de jet", "reservoir lave glace"],
      symptom: "La pompe ne tourne pas, le jet est faible/absent ou le liquide fuit avant les gicleurs.",
      controls: ["controleLaveGlace", "fusibleDeuxCotes"],
      suspects: ["essuieLaveGlace"],
      rta: ["essuieGlace", "fusibles"],
      emergency: "Si le pare-brise ne peut pas être nettoyé, réparer avant trajet long ou mauvais temps."
    },
    {
      id: "chauffage-ventilation",
      title: "Chauffage ou ventilation habitacle",
      category: "Chauffage / ventilation",
      keywords: ["chauffage", "ventilation", "soufflerie", "ventilateur habitacle", "air froid", "pas de chauffage", "désembuage", "desembuage", "résistance ventilation"],
      symptom: "Pas d'air soufflé, vitesses absentes, air froid moteur chaud ou désembuage insuffisant.",
      controls: ["controleVentilationHabitacle", "controleChauffageHabitacle", "niveauLdr", "fusibleDeuxCotes"],
      suspects: ["chauffageVentilation", "thermostat", "pompeEau"],
      rta: ["chauffage", "refroidissement", "fusibles"],
      emergency: "Sans désembuage, la visibilité peut devenir dangereuse."
    },
    {
      id: "eclairage-defaut",
      title: "Éclairage ou feu défectueux",
      category: "Éclairage / signalisation",
      keywords: ["phare", "feu", "veilleuse", "stop", "feu stop", "feu arriere", "feu arrière", "ampoule", "eclairage", "éclairage", "plaque", "marche arrière"],
      symptom: "Un feu ne s'allume pas, éclaire faiblement, clignote avec un autre feu ou déclenche un défaut CT.",
      controls: ["controleAmpouleAlimMasse", "fusibleDeuxCotes", "masseChuteTension"],
      suspects: ["eclairage"],
      rta: ["fusibles", "masses", "instruments", "antibrouillard"],
      emergency: "Un éclairage de sécurité absent doit être réparé avant roulage de nuit."
    },
    {
      id: "clignotants-warning",
      title: "Clignotants ou feux de détresse",
      category: "Signalisation",
      keywords: ["clignotant", "warning", "detresse", "détresse", "centrale clignotante", "clignote vite", "clignote pas"],
      symptom: "Clignotement trop rapide, absent d'un côté, warnings absents ou voyant incohérent.",
      controls: ["controleAmpouleAlimMasse", "fusibleDeuxCotes", "masseChuteTension"],
      suspects: ["eclairage", "combine"],
      rta: ["fusibles", "masses", "instruments"],
      emergency: "Signalisation absente = risque direct en circulation."
    },
    {
      id: "batterie-se-decharge",
      title: "Batterie qui se décharge à l'arrêt",
      category: "Électricité / batterie",
      keywords: ["batterie vide", "batterie se decharge", "batterie se décharge", "courant fuite", "consommation a l'arret", "consommation à l'arrêt", "ne redemarre pas lendemain"],
      symptom: "Batterie vide après stationnement, démarrage impossible le lendemain ou consommateur qui reste actif.",
      controls: ["tensionBatterieCharge", "batterieSousCharge", "fusibleDeuxCotes", "masseChuteTension"],
      suspects: ["alternateur", "eclairage", "leveVitre"],
      rta: ["alternateur", "fusibles", "masses"],
      emergency: "Débrancher/charger correctement la batterie si elle chute fortement, éviter les essais répétés au démarreur."
    },
    {
      id: "odeur-essence-fuite",
      title: "Odeur d'essence ou fuite carburant",
      category: "Alimentation carburant",
      keywords: ["odeur essence", "fuite essence", "carburant", "durite essence", "pompe essence", "filtre essence", "noyade", "sent l'essence"],
      symptom: "Odeur d'essence, suintement, flaque, démarrage difficile à chaud ou moteur noyé.",
      controls: ["debitEssence", "priseAirAdmission", "bougiesLecture"],
      suspects: ["carburateur"],
      rta: ["carburateur10", "carburateur12"],
      emergency: "Ne pas tester l'allumage près d'une fuite d'essence. Ventiler et supprimer la fuite d'abord."
    },
    {
      id: "fuite-huile",
      title: "Fuite d'huile moteur",
      category: "Graissage / moteur",
      keywords: ["fuite huile", "huile moteur", "suintement", "joint cache culbuteur", "carter huile", "tache huile"],
      symptom: "Trace d'huile au sol, moteur gras, odeur d'huile chaude ou niveau qui baisse.",
      controls: ["fusibleDeuxCotes"],
      suspects: [],
      rta: ["graissage", "moteurDonnees"],
      emergency: "Si le niveau baisse vite ou voyant huile apparaît, couper le moteur.",
      missing: "À détailler avec photos moteur : zones de fuite typiques et méthode de nettoyage/traçage."
    },
    {
      id: "fumee-echappement",
      title: "Fumée anormale à l'échappement",
      category: "Moteur / échappement",
      keywords: ["fumee", "fumée", "fumee blanche", "fumée blanche", "fumee bleue", "fumée bleue", "fumee noire", "échappement", "echappement"],
      symptom: "Fumée blanche, bleue ou noire, odeur anormale ou consommation d'huile/liquide.",
      controls: ["niveauLdr", "bougiesLecture", "compressionTest"],
      suspects: ["carburateur"],
      rta: ["moteurDonnees", "culasse", "echappement"],
      emergency: "Fumée blanche épaisse avec niveau LDR qui baisse : éviter de rouler avant diagnostic."
    },
    {
      id: "vibrations-roulage-pneus",
      title: "Vibrations, tirage ou usure pneus",
      category: "Trains roulants / pneus",
      keywords: ["vibration", "tremblement", "volant vibre", "tirage", "voiture tire", "pneu", "usure pneu", "equilibrage", "équilibrage", "geometrie", "géométrie"],
      symptom: "Vibration au volant, voiture qui tire, usure irrégulière ou bruit de roulement.",
      controls: ["controleFreinsVisuel"],
      suspects: [],
      rta: ["trainAvant", "jambeForce", "direction", "freins"],
      emergency: "Si vibration forte ou jeu ressenti, contrôler roues/trains avant de continuer à rouler.",
      missing: "À détailler : contrôle roulement, rotules, équilibrage et géométrie avec photos/points de levage."
    },
    {
      id: "embrayage-vitesses",
      title: "Vitesses dures / embrayage",
      category: "Transmission / embrayage",
      keywords: ["embrayage", "vitesse", "boite", "pédale", "craque"],
      symptom: "Vitesses qui craquent, pédale molle, embrayage qui patine ou commande dure.",
      controls: [],
      suspects: [],
      rta: ["embrayage"],
      emergency: "Si la pédale ne revient plus ou fuite hydraulique, éviter de rouler.",
      missing: "À détailler : protocole de purge et diagnostic émetteur/récepteur avec photos de la voiture."
    },
    {
      id: "claquement-train-avant",
      title: "Claquement train avant / direction",
      category: "Train avant / direction",
      keywords: ["claquement", "train avant", "rotule", "suspension", "direction", "amortisseur"],
      symptom: "Bruit sur bosses, direction floue, jeu ou usure pneus irrégulière.",
      controls: [],
      suspects: [],
      rta: ["trainAvant", "jambeForce", "direction"],
      emergency: "Jeu important de direction/suspension = sécurité prioritaire.",
      missing: "À détailler : protocole de contrôle rotules/silentblocs avec points de levage et photos."
    }
  ]
};
