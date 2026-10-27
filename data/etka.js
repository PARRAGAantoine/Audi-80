window.AUDI80_DATA = window.AUDI80_DATA || {};

/**
 * Catalogue Technique Officiel ETKA - Audi 80 B3 (Type 89) 1.8S NE (1988/1989)
 * Groupe Principal 9 : Équipement Électrique (Elektrische Anlage)
 * Planches d'atelier officielles, références OEM VAG et éclatés isométriques.
 */
window.AUDI80_DATA.etka = {
  plates: {
    "937-00": {
      id: "937-00",
      title: "Centrale Électrique, Porte-Fusibles & Relais",
      subtitle: "Zentral-Elektrik, Sicherungs- und Relaiskasten",
      zone: "auvent",
      svg: "docs/etka/937-00_centrale-electrique-fusibles-relais.svg",
      location: "Baie d'auvent pare-brise, côté conducteur sous déflecteur d'eau plastique.",
      rtaRef: ["fusibles", "ventilateurPressionHuile", "commandesMoteursOptions", "masses"],
      parts: [
        { rep: 1, ref: "893 941 823", name: "Couvercle de protection transparent", de: "Deckel für Zentralelektrik", note: "Étanche avec clips de verrouillage" },
        { rep: 2, ref: "893 941 825", name: "Joint profilé silicone d'étanchéité", de: "Dichtung Gummi", note: "Empêche l'eau de baie d'inonder le tablier" },
        { rep: 3, ref: "443 937 105 A", name: "Boîtier porte-fusibles et relais", de: "Zentral-Elektrik Kasten", note: "Platine principale câblée sous auvent" },
        { rep: 4, ref: "N 017 131 11", name: "Fusible enfichable 15A (Bleu)", de: "Flachsicherung 15A", note: "S1 (antibrouillard), S4 (horloge/radio), S12 (combiné), S13" },
        { rep: 4, ref: "N 017 131 12", name: "Fusible enfichable 30A (Vert)", de: "Flachsicherung 30A", note: "S5 (motoventilateur V7), S16 (dégivrage AR), S17 (lève-vitres)" },
        { rep: 4, ref: "N 017 131 16", name: "Fusible enfichable 10A (Rouge)", de: "Flachsicherung 10A", note: "S7 à S11 (feux de croisement et route D/G)" },
        { rep: 4, ref: "N 017 131 5", name: "Fusible enfichable 5A (Marron)", de: "Flachsicherung 5A", note: "S6, S14 (éclairage cadrans combiné & plaque)" },
        { rep: 5, ref: "111 953 227 D", name: "Relais antibrouillard (Emplacement I)", de: "Relais für Nebelscheinwerfer", note: "Repère 215 / Contact travail 40A" },
        { rep: 5, ref: "443 951 253 AA", name: "Relais ventilateur radiateur V7 (Emplacement II)", de: "Relais für Kühlerlüfter", note: "Commandé par thermocontact F18" },
        { rep: 5, ref: "431 955 531", name: "Relais essuie-glace intermittent (Emplacement V)", de: "Wisch-Wasch Intervall Relais", note: "Repère 229" },
        { rep: 5, ref: "141 951 253 B", name: "Relais avertisseur sonore (Emplacement VI)", de: "Relais für Doppeltonhorn", note: "Repère 53" },
        { rep: 6, ref: "893 937 549", name: "Pince plastique pour extraction fusibles", de: "Sicherungsabzieher rot", note: "Logée dans le socle" },
        { rep: 8, ref: "443 971 971", name: "Connecteur multibroches 16 broches (Jaune)", de: "Steckergehäuse 16-polig gelb", note: "Départ faisceau habitacle et tableau" }
      ]
    },
    "919-00": {
      id: "919-00",
      title: "Combiné d'Instruments (VDO / UN4) & Stabilisateur J6",
      subtitle: "Schalttafeleinsatz, Leiterfolie, Spannungskonstanter",
      zone: "planche",
      svg: "docs/etka/919-00_combine-instruments-compteur-t26.svg",
      location: "Planche de bord, face au conducteur, maintenu par 2 vis inférieures sous cache comodos.",
      rtaRef: ["instruments", "projecteursEssuieCombine", "masses"],
      parts: [
        { rep: 1, ref: "893 919 059", name: "Façade et visière de combiné noire", de: "Blende für Schalttafeleinsatz", note: "Avec vitres antireflet et poussoirs RAZ" },
        { rep: 3, ref: "893 919 033", name: "Compteur de vitesse mécanique (0-220 km/h)", de: "Geschwindigkeitsmesser", note: "Avec rouleaux totalisateurs et engrenage souple" },
        { rep: 4, ref: "893 919 034", name: "Compte-tours électronique (0-7000 tr/min)", de: "Drehzahlmesser 4-Zylinder", note: "Signal borne 1 bobine / module TSZ-H" },
        { rep: 5, ref: "893 919 045", name: "Jauge essence & thermomètre eau combinés", de: "Kraftstoff- und Kühlmittelanzeige", note: "Alimentés par la tension régulée 10.0V de J6" },
        { rep: 6, ref: "893 907 385", name: "Stabilisateur de tension 10V J6 (TCA700Y)", de: "Spannungskonstanter 10V (J6)", note: "TO-220 3 pattes. Si défaillant, jauge essence et eau tombent à zéro !" },
        { rep: 7, ref: "893 919 053", name: "Nappe souple imprimée flexible (PCB flex)", de: "Leiterfolie gedruckte Schaltung", note: "Pistes cuivre pour ampoules et galvanomètres" },
        { rep: 8, ref: "893 971 979", name: "Connecteur 26 broches JAUNE (T26)", de: "Flachkontaktgehäuse 26-polig gelb", note: "Alimentation +15 (S12), +30 (S4), masse (32), compte-tours" },
        { rep: 9, ref: "893 971 980", name: "Connecteur 26 broches BLEU (T26a)", de: "Flachkontaktgehäuse 26-polig blau", note: "Témoins huile, charge D+, plein phare, clignotants" },
        { rep: 10, ref: "N 017 751 2", name: "Ampoules 12V 1.2W culot plastique B8.5d", de: "Glühlampe 12V 1.2W B8.5d", note: "Éclairage vert cadrans et témoins d'alerte (x12)" }
      ]
    },
    "959-00": {
      id: "959-00",
      title: "Interrupteurs Console Centrale & Connecteurs",
      subtitle: "Schalter in Mittelkonsole, Warnlicht, Nebelschluss, Heckscheibe",
      zone: "planche",
      svg: "docs/etka/959-00_interrupteurs-console-e18-e15.svg",
      location: "Console centrale sous les aérateurs centraux, au-dessus de l'autoradio.",
      rtaRef: ["commandesMoteursOptions", "antibrouillard", "feuxReculClignotants"],
      parts: [
        { rep: 1, ref: "893 857 231", name: "Cadre support de console centrale", de: "Rahmen für Schalter Konsole", note: "Pour 4 interrupteurs à bascule" },
        { rep: 2, ref: "893 941 563", name: "Interrupteur feux antibrouillard AR (E18)", de: "Schalter für Nebelschlussleuchte", note: "Avec voyant témoin intégré ambre. Relie S1 à T10b/5 puis L20" },
        { rep: 3, ref: "893 941 503", name: "Interrupteur dégivrage lunette AR (E15)", de: "Schalter für heizbare Heckscheibe", note: "Commande la résistance chauffante Z1 via fusible S16" },
        { rep: 4, ref: "893 953 235", name: "Interrupteur de signal de détresse / warning (E3)", de: "Warnlichtschalter rot", note: "Avec triangle rouge rétroéclairé" },
        { rep: 5, ref: "443 971 984", name: "Connecteur femelle 6 broches (T6b)", de: "Steckergehäuse T6b schwarz", note: "Enfiché au dos de l'interrupteur antibrouillard E18" }
      ]
    },
    "905-00": {
      id: "905-00",
      title: "Allumage Transistorisé TSZ-H (NE 1.8S)",
      subtitle: "Transistorzündanlage TSZ-H, Hallgeber, Zündspule",
      zone: "moteur",
      svg: "docs/etka/905-00_allumage-tszh-allumeur-bobine.svg",
      location: "Compartiment moteur (allumeur sur bloc, bobine sur joue d'aile droite) et module TSZ-H sous tableau côté gauche.",
      rtaRef: ["allumage", "carburateur10", "miseAuPoint"],
      parts: [
        { rep: 1, ref: "026 905 205 AA", name: "Allumeur distributeur avec capteur Hall", de: "Zündverteiler Hallgeber (Bosch)", note: "Avec capsule d'avance à dépression double effet" },
        { rep: 2, ref: "052 905 225 C", name: "Doigt d'allumeur (rotor)", de: "Verteilerläufer 1kΩ", note: "Résistance intégrée antiparasitage 1kΩ" },
        { rep: 3, ref: "026 905 207", name: "Tête d'allumeur (tête de delco)", de: "Verteilerkappe", note: "4 sorties cylindres + 1 centrale bobine" },
        { rep: 5, ref: "867 905 104 A", name: "Bobine d'allumage cylindrique HT", de: "Zündspule zylindrisch", note: "Borne 15 (+12V APC ro/sw) et borne 1 (signal rupteur gn)" },
        { rep: 6, ref: "191 905 351 B", name: "Module d'allumage électronique TSZ-H (7 broches)", de: "Schaltgerät für Transistorzündung", note: "Fixé sur dissipateur alu contre le montant A sous le tableau de bord" },
        { rep: 7, ref: "030 905 327", name: "Connecteur 3 broches capteur Hall", de: "Stecker 3-polig Hallgeber", note: "Broches +, 0 (signal), - étanches" },
        { rep: 8, ref: "026 998 031", name: "Faisceau d'allumage haute tension silicone", de: "Zündleitungssatz", note: "4 câbles bougies + câble haute tension bobine" }
      ]
    },
    "945-00": {
      id: "945-00",
      title: "Feux Arrière, Malle, Antibrouillard L20 & Masse (98)",
      subtitle: "Schlussleuchten, Heckklappe, Nebelschlussleuchte L20",
      zone: "coffre",
      svg: "docs/etka/945-00_feux-arriere-malle-antibrouillard.svg",
      location: "Coffre arrière, aile AR gauche et couvercle de coffre articulé.",
      rtaRef: ["antibrouillard", "masses", "commandesMoteursOptions"],
      parts: [
        { rep: 1, ref: "893 945 217", name: "Feu arrière extérieur gauche (sur aile)", de: "Schlussleuchte links Kotflügel", note: "Feux de position, stop, clignotant" },
        { rep: 2, ref: "893 945 223", name: "Feu arrière intérieur gauche (sur malle)", de: "Schlussleuchte links Heckdeckel", note: "Contient le feu antibrouillard AR (L20) et feu de recul (M16)" },
        { rep: 3, ref: "893 945 231", name: "Platine porte-lampes gauche de malle", de: "Lampenträger Heckklappe links", note: "Pistes conductrices estampées" },
        { rep: 4, ref: "N 017 732 2", name: "Ampoule 12V 21W culot BA15s (P21W)", de: "Glühlampe 12V 21W", note: "Pour feu antibrouillard L20 et recul" },
        { rep: 5, ref: "893 971 840", name: "Soufflet caoutchouc passe-fils de malle", de: "Faltenbalg für Leitungsstrang", note: "Zone d'usure critique par pliage répété à l'ouverture du coffre" },
        { rep: 6, ref: "893 971 976", name: "Connecteur 6 broches noir (T6a)", de: "Steckergehäuse T6a schwarz", note: "Sur flanc intérieur d'aile AR gauche près de la masse" },
        { rep: 7, ref: "811 971 848", name: "Point de masse étoile caisse (98)", de: "Massepunkt Sternbolzen Heck (98)", note: "Goujon M6 soudé à la caisse d'aile AR gauche" }
      ]
    }
  }
};
