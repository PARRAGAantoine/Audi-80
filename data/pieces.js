export const pieces = {
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
  };
