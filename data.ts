
import { UniverseData } from './types';

export const UNIVERSES_DATA: UniverseData[] = [
  {
    id: 1,
    title: "Galactic Wars",
    tagline: "La Force est avec vous",
    image: "/assets/universes/galactic-wars-main.png",
    gallery: ["/assets/universes/galactic-wars-detail-1.png", "/assets/universes/galactic-wars-detail-2.png"],
    tags: ["Sci-Fi", "Space Opera", "Hacking"],
    desc: "Un kit technologique qui transforme une table basse en cockpit. Les joueurs doivent réactiver les systèmes via une console physique avant l'arrivée de l'Empire.",
    fullDescription: "Plongez vos invités au cœur d'un croiseur interstellaire. Le module principal est un caisson 'Console de Vol' qui se pose sur n'importe quel meuble existant. Une fois activé, il projette une interface holographique au mur et déploie des commandes physiques. L'expérience inclut des objets à manipuler : cristaux d'énergie, cartes d'accès magnétiques et un cube de données.",
    difficulty: 'Expert',
    stats: { search: 2, manipulation: 4, reasoning: 5 },
    specs: {
      surface: "30-60m²",
      players: "3 à 6 Joueurs",
      tech: ["Interface Tactile", "Maglocks", "Audio Intégré"]
    },
    storyHook: "Alerte Rouge. Le générateur principal est hors ligne. Vous avez 60 minutes pour pirater le terminal et passer en hyper-espace.",
    gameplayFeatures: [
      "Pirater le terminal (console aluminium anodisé)",
      "Insérer les Cristaux d'Énergie dans le réacteur",
      "Décrypter le Cube de Données (objet physique)",
      "Synchroniser les clés de tir"
    ],
    atmosphere: ["Alerte Rouge", "Fumée Cryogénique", "Synthwave", "Métal Froid"],
    hardwareDetails: "Le kit contient : 1 Console de Commandement (métal & plexiglass), 1 Cube Holocron lumineux, 3 Cristaux d'énergie résine, 1 Projecteur d'ambiance LED.",
    videoUrl: "/assets/videos/galactic-wars.mp4"
  },
  {
    id: 2,
    title: "L'École des Sorciers",
    tagline: "Magie & Sortilèges",
    image: "/assets/universes/magic-school-main.png",
    gallery: ["/assets/universes/magic-school-detail-1.png", "/assets/universes/magic-school-detail-2.png"],
    tags: ["Fantastique", "Château", "Familial"],
    desc: "Une malle ancienne qui recèle des trésors. Baguettes magiques, potions réactives et parchemins invisibles pour une chasse au trésor envoûtante.",
    fullDescription: "Une ode à la magie victorienne livrée dans une véritable malle de voyage en cuir et bois. À l'intérieur : tout le nécessaire pour transformer le salon. Des cadres photo numériques déguisés en tableaux anciens, des fioles de potions qui changent de couleur, et une baguette magique qui interagit réellement avec le coffre principal.",
    difficulty: 'Initié',
    stats: { search: 4, manipulation: 5, reasoning: 3 },
    specs: {
      surface: "20-50m²",
      players: "2 à 5 Joueurs",
      tech: ["Baguettes IR", "Encre E-Ink", "Serrure Magnétique"]
    },
    storyHook: "La Pierre de Lune est cachée dans cette malle scellée par un sortilège. Seuls les sorciers émérites pourront l'ouvrir.",
    gameplayFeatures: [
      "Ouvrir la Malle aux Secrets (mécanisme invisible)",
      "Révéler l'encre invisible avec la Pierre de Lune",
      "Assembler les reliques physiques",
      "Mélanger les potions (chimie sans danger)"
    ],
    atmosphere: ["Bois Ancien", "Parchemin", "Crépitement de Feu", "Mystère"],
    hardwareDetails: "Le kit contient : 1 Malle 'Magique' motorisée (chêne), 2 Baguettes connectées (IR), 1 Grimoire à encre thermique, Set de 5 fioles en verre.",
    videoUrl: "/assets/videos/magic-school.mp4"
  },
  {
    id: 3,
    title: "Pandora",
    tagline: "Connexion Nature",
    image: "/assets/universes/pandora-main.png",
    gallery: ["/assets/universes/pandora-detail-1.png", "/assets/universes/pandora-detail-2.png"],
    tags: ["Bio-Luminescence", "Zen", "Sensoriel"],
    desc: "Un totem végétal interactif qui pulse au rythme de la musique. Une expérience sensorielle zen où il faut rétablir l'harmonie des éléments.",
    fullDescription: "Pandora arrive sous la forme d'une magnifique sculpture en bois flotté et mousse stabilisée : le Totem. Il s'installe dans une chambre ou un salon. Les joueurs doivent manipuler des galets lumineux et toucher certaines zones du totem pour composer une mélodie et illuminer progressivement la pièce aux couleurs d'une aurore boréale.",
    difficulty: 'Découverte',
    stats: { search: 5, manipulation: 3, reasoning: 1 },
    specs: {
      surface: "Chambre - 20m²",
      players: "1 à 3 Joueurs",
      tech: ["Capteurs Capacitifs", "LEDs Adressables", "Audio Bluetooth"]
    },
    storyHook: "Le Coeur de la Forêt s'est éteint. Assemblez les pierres élémentaires sur le Totem pour réveiller la nature.",
    gameplayFeatures: [
      "Disposer les Galets Lumineux sur le socle",
      "Toucher l'écorce capacitive pour jouer des notes",
      "Harmoniser les couleurs du Totem",
      "Méditation guidée finale"
    ],
    atmosphere: ["Zen", "Organique", "Bioluminescence", "Sérénité"],
    hardwareDetails: "Le kit contient : 1 Totem central (Bois flotté & LEDs), 4 Galets en verre dépoli (RFID), 1 Diffuseur d'odeurs programmable, 1 Enceinte Bluetooth camouflée pierre.",
    videoUrl: "/assets/videos/pandora.mp4"
  },
  {
    id: 4,
    title: "Suite Vénus",
    tagline: "Love Room & Sens",
    image: "/assets/universes/suite-venus-main.png",
    gallery: ["/assets/universes/suite-venus-detail-1.png", "/assets/universes/suite-venus-detail-2.png"],
    tags: ["Romantique", "Couple", "Glamour"],
    desc: "Un coffret à bijoux élégant et mystérieux posé sur la commode. Il contient les clés d'une soirée inoubliable, à gagner étape par étape.",
    fullDescription: "Oubliez les installations vulgaires. Suite Vénus est un objet d'art : Un coffret laqué noir et or. Pour l'ouvrir, le couple doit résoudre des énigmes sensorielles disséminées dans la pièce via des petits modules discrets (un miroir à main connecté, un cadenas à code poétique, une plume scellée).",
    difficulty: 'Découverte',
    stats: { search: 2, manipulation: 3, reasoning: 2 },
    specs: {
      surface: "Suite Parentale",
      players: "Couple",
      tech: ["Capteurs Gyro", "Verrouillage Bluetooth", "Miroir Infini"]
    },
    storyHook: "7 plaisirs sont enfermés dans ce coffret. Le premier s'ouvre avec un baiser... Trouvez comment débloquer les suivants.",
    gameplayFeatures: [
      "Manipuler le Cube du Désir (gyroscope)",
      "Décoder le message sur le Miroir à main",
      "Trouver la clé magnétique cachée",
      "Ouverture finale du Coffret (Champagne & Huiles)"
    ],
    atmosphere: ["Velours Rouge", "Or", "Jazz Lounge", "Intimité"],
    hardwareDetails: "Le kit contient : 1 Coffret 'Vénus' à compartiments secrets, 1 Miroir à main connecté, 1 Cube gyroscopique ornementé, Accessoires sensuels (plume, bandeau).",
    videoUrl: "/assets/videos/suite-venus.mp4"
  },
  {
    id: 5,
    title: "Darkness",
    tagline: "Oserez-vous entrer ?",
    image: "/assets/universes/darkness-main.png",
    gallery: ["/assets/universes/darkness-detail-1.png", "/assets/universes/darkness-detail-2.png"],
    tags: ["Horreur", "Adrénaline", "Survivre"],
    desc: "Une antique radio qui se met à grésiller et une boîte à fusibles inquiétante. Un kit compact pour transformer n'importe quelle cave en film d'horreur.",
    fullDescription: "Le module 'Darkness' tient dans une caisse à outils rouillée. À l'intérieur : un vieux tableau électrique factice à recâbler, une radio vintage qui diffuse des messages d'outre-tombe, et une lampe torche qui a 'sa propre volonté' (elle s'éteint et clignote seule). L'angoisse naît des objets eux-mêmes.",
    difficulty: 'Expert',
    stats: { search: 4, manipulation: 2, reasoning: 4 },
    specs: {
      surface: "Cave / Sous-sol",
      players: "2 à 4 Joueurs",
      tech: ["Capteurs de Mouvement", "Audio Spatialisé", "Lumière UV"]
    },
    storyHook: "La radio s'est allumée toute seule. 'Ils arrivent... Coupez le courant !'. Vous avez 10 minutes pour réparer la boîte à fusibles.",
    gameplayFeatures: [
      "Réparer le Tableau Électrique (câbles physiques)",
      "Régler la fréquence de la Radio Maudite",
      "Utiliser la Lampe Torche traîtresse (UV)",
      "Survivre aux bruits spatiaux"
    ],
    atmosphere: ["Industriel", "Clignotements", "Sons 3D", "Angoisse"],
    hardwareDetails: "Le kit contient : 1 Tableau électrique factice (fusibles & câbles), 1 Radio Vintage modifiée (audio + cachette), 1 Lampe Torche connectée, 1 Module Sonore à vibration.",
    videoUrl: "/assets/videos/darkness.mp4"
  }
];
