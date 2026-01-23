
import { UniverseData } from './types';

export const UNIVERSES_DATA: UniverseData[] = [
  {
    id: 1,
    title: "Galactic Wars",
    tagline: "La Force est avec vous",
    image: "/assets/universes/galactic-wars-main.png",
    gallery: ["/assets/universes/galactic-wars-detail-1.png", "/assets/universes/galactic-wars-detail-2.png"],
    tags: ["Sci-Fi", "Space Opera", "Hacking"],
    desc: "Un décor futuriste aux panneaux blancs immaculés et néons bleutés. Les joueurs doivent réactiver les boucliers du vaisseau avant l'arrivée de l'Empire.",
    fullDescription: "Plongez vos invités au cœur d'un croiseur interstellaire en perdition. 'Galactic Wars' transforme une pièce standard en cockpit futuriste grâce à un habillage mural modulaire blanc laqué et rétro-éclairé. L'expérience commence dès l'entrée : l'éclairage passe au rouge, une alarme sourde retentit. Les joueurs ne sont plus des locataires, ce sont des pilotes rebelles.",
    difficulty: 'Expert',
    stats: { search: 2, manipulation: 4, reasoning: 5 },
    specs: {
      surface: "30-60m²",
      players: "3 à 6 Joueurs",
      tech: ["Serrure Biométrique", "Holo-Projecteurs", "Portes Automatiques"]
    },
    storyHook: "Alerte Rouge. Le générateur principal est hors ligne. Vous avez 60 minutes pour pirater le terminal de commande et passer en hyper-espace.",
    gameplayFeatures: [
      "Pirater le terminal de commande (tablette tactile encastrée)",
      "Réparer le circuit de refroidissement (puzzles magnétiques physiques)",
      "Synchroniser les clés de tir (coopération simultanée)",
      "Activer l'Hyper-Drive (levier industriel)"
    ],
    atmosphere: ["Alerte Rouge", "Fumée Cryogénique", "Synthwave", "Métal Froid"],
    hardwareDetails: "Le kit inclut 4 panneaux muraux 'SpaceHull' avec LEDs adressables intégrées, un module 'Console Centrale' remplaçant un bureau standard, et un système audio 5.1 dissimulé."
  },
  {
    id: 2,
    title: "L'École des Sorciers",
    tagline: "Magie & Sortilèges",
    image: "/assets/universes/magic-school-main.png",
    gallery: ["/assets/universes/magic-school-detail-1.png", "/assets/universes/magic-school-detail-2.png"],
    tags: ["Fantastique", "Château", "Familial"],
    desc: "Transformez votre bien en dortoir d'école de magie. Tableaux qui bougent, cheminée secrète et potions fumantes au programme.",
    fullDescription: "Une ode à la magie victorienne et aux mystères ancestraux. Cet univers s'intègre parfaitement dans les immeubles anciens ou haussmanniens. Le mobilier en chêne massif cache des compartiments secrets qui ne s'ouvrent qu'avec des baguettes magiques (fournies et sécurisées). L'ambiance est chaleureuse, feutrée, mais pleine de surprises technologiques invisibles.",
    difficulty: 'Initié',
    stats: { search: 4, manipulation: 5, reasoning: 3 },
    specs: {
      surface: "20-50m²",
      players: "2 à 5 Joueurs",
      tech: ["Baguettes IR", "Bibliothèque Pivotante", "Bougies Lévitation"]
    },
    storyHook: "La légende raconte que la Pierre de Lune est cachée dans ce bureau. Seuls ceux qui maîtrisent le sortilège de 'Revelio' pourront ouvrir le coffre.",
    gameplayFeatures: [
      "Lancer des sorts avec une baguette connectée (technologie IR)",
      "Décrypter les grimoires à l'encre sympathique (UV)",
      "Ouvrir la bibliothèque secrète en trouvant le bon livre",
      "Préparer une potion (colorimétrie liquide)"
    ],
    atmosphere: ["Bois Ancien", "Parchemin", "Crépitement de Feu", "Mystère"],
    hardwareDetails: "Bibliothèque en chêne avec servomoteurs silencieux. Cadres numériques dissimulés dans des miroirs sans tain. Système de diffusion d'odeur 'Vieux Livre' et 'Cire'."
  },
  {
    id: 3,
    title: "Pandora",
    tagline: "Connexion Nature",
    image: "/assets/universes/pandora-main.png",
    gallery: ["/assets/universes/pandora-detail-1.png", "/assets/universes/pandora-detail-2.png"],
    tags: ["Bio-Luminescence", "Zen", "Sensoriel"],
    desc: "Une immersion totale dans une jungle bioluminescente. Idéal pour une chambre relaxante qui se transforme en forêt enchantée la nuit.",
    fullDescription: "Pandora est une expérience contemplative avant d'être un jeu. Le jour, c'est une chambre design aux accents végétaux. La nuit, la pièce s'éveille : les plantes artificielles s'illuminent, le plafond devient une canopée étoilée. Le but n'est pas de s'échapper, mais de rétablir l'harmonie en connectant les flux d'énergie (lumière) à travers la pièce.",
    difficulty: 'Découverte',
    stats: { search: 5, manipulation: 3, reasoning: 1 },
    specs: {
      surface: "Chambre - 20m²",
      players: "1 à 3 Joueurs",
      tech: ["Fibre Optique", "Plantes Tactiles", "Diffuseur d'Odeurs"]
    },
    storyHook: "La forêt vous parle. Connectez votre esprit à l'arbre des âmes (votre tête de lit interactive) pour rétablir l'harmonie dans la pièce.",
    gameplayFeatures: [
      "Toucher les plantes pour activer les sons (capacitif)",
      "Orienter les cristaux de lumière",
      "Méditation guidée par l'audio spatialisé",
      "Séquence musicale collaborative"
    ],
    atmosphere: ["Zen", "Organique", "Bioluminescence", "Sérénité"],
    hardwareDetails: "Tête de lit avec fibre optique tissée. Capteurs capacitifs invisibles sous des surfaces en bois brut. Projecteur laser ciel étoilé intégré aux corniches."
  },
  {
    id: 4,
    title: "Suite Vénus",
    tagline: "Love Room & Sens",
    image: "/assets/universes/suite-venus-main.png",
    gallery: ["/assets/universes/suite-venus-detail-1.png", "/assets/universes/suite-venus-detail-2.png"],
    tags: ["Romantique", "Couple", "Glamour"],
    desc: "Une expérience conçue spécifiquement pour les couples. Un jeu de piste sensuel qui déverrouille des surprises (champagne, huiles) au fil de la soirée.",
    fullDescription: "La Suite Vénus redéfinit le concept de Love Room en y ajoutant de l'élégance et de la narration. Pas de vulgarité ici, mais un jeu de séduction orchestré par la domotique. L'intensité lumineuse, la musique et même la température s'adaptent à la progression du couple dans leur découverte des '7 Péchés Capitaux' cachés dans la pièce.",
    difficulty: 'Découverte',
    stats: { search: 2, manipulation: 3, reasoning: 2 },
    specs: {
      surface: "Suite Parentale",
      players: "Couple",
      tech: ["Lumières Tamisées", "Lit Suspendu", "Audio Sync"]
    },
    storyHook: "Retrouvez les 7 clés du désir cachées dans la suite pour ouvrir le coffret secret. Une aventure intime où la communication est la clé.",
    gameplayFeatures: [
      "Chasse au trésor sensorielle",
      "Quiz de couple sur tablette miroir",
      "Déverrouillage progressif du minibar (Champagne)",
      "Scénario lumière 'Crescendo'"
    ],
    atmosphere: ["Velours Rouge", "Or", "Jazz Lounge", "Intimité"],
    hardwareDetails: "Coffre-fort à ouverture décalée. Miroir connecté. Lit à baldaquin avec structure renforcée et éclairage LED indirect. Isolation phonique renforcée."
  },
  {
    id: 5,
    title: "Darkness",
    tagline: "Oserez-vous entrer ?",
    image: "/assets/universes/darkness-main.png",
    gallery: ["/assets/universes/darkness-detail-1.png", "/assets/universes/darkness-detail-2.png"],
    tags: ["Horreur", "Adrénaline", "Survivre"],
    desc: "Pour les amateurs de frissons forts. Une ambiance pesante, des lumières qui vacillent et des bruits inexpliqués. Déconseillé aux âmes sensibles.",
    fullDescription: "Transformez une cave ou un sous-sol inexploité en attraction majeure. Darkness joue sur la privation sensorielle et la peur suggérée. Grâce à un système audio 3D binaural et des jets d'air comprimé, la pièce semble 'vivante'. C'est notre module le plus technique, capable de détecter le rythme cardiaque des joueurs pour adapter l'intensité des effets.",
    difficulty: 'Expert',
    stats: { search: 4, manipulation: 2, reasoning: 4 },
    specs: {
      surface: "Cave / Sous-sol",
      players: "2 à 4 Joueurs",
      tech: ["Stroboscopes", "Air Blasts", "Capteurs de Mouvement"]
    },
    storyHook: "Vous êtes enfermés. L'électricité est coupée. Quelque chose respire dans le noir avec vous. Trouvez le disjoncteur avant qu'il ne vous trouve.",
    gameplayFeatures: [
      "Réactiver le courant (tableau électrique complexe)",
      "Échapper aux caméras de surveillance",
      "Déchiffrer les messages UV sur les murs",
      "Survivre au 'Blackout' total"
    ],
    atmosphere: ["Industriel", "Clignotements", "Sons 3D", "Angoisse"],
    hardwareDetails: "Système de jets d'air (Air Blasts) dans les plinthes. Éclairage stroboscopique DMX. Haut-parleurs vibrants dans le sol. Verrouillage magnétique de sécurité 'Panic Release'."
  }
];
