import { UniverseData } from './types';

export const UNIVERSES_DATA: UniverseData[] = [
  {
    id: 1,
    title: "Galactic Wars",
    tagline: "La Force est avec vous",
    image: "https://images.unsplash.com/photo-1546443046-7a269f102dc9?q=80&w=2000&auto=format&fit=crop",
    tags: ["Sci-Fi", "Space Opera", "Hacking"],
    desc: "Un décor futuriste aux panneaux blancs immaculés et néons bleutés. Les joueurs doivent réactiver les boucliers du vaisseau avant l'arrivée de l'Empire.",
    difficulty: 'Expert',
    stats: { search: 2, manipulation: 4, reasoning: 5 },
    specs: {
      surface: "30-60m²",
      players: "3 à 6 Joueurs",
      tech: ["Serrure Biométrique", "Holo-Projecteurs", "Portes Automatiques"]
    },
    storyHook: "Alerte Rouge. Le générateur principal est hors ligne. Vous avez 60 minutes pour pirater le terminal de commande et passer en hyper-espace."
  },
  {
    id: 2,
    title: "L'École des Sorciers",
    tagline: "Magie & Sortilèges",
    image: "https://images.unsplash.com/photo-1507842217121-fe23a3ee3692?q=80&w=2000&auto=format&fit=crop",
    tags: ["Fantastique", "Château", "Familial"],
    desc: "Transformez votre bien en dortoir d'école de magie. Tableaux qui bougent, cheminée secrète et potions fumantes au programme.",
    difficulty: 'Initié',
    stats: { search: 4, manipulation: 5, reasoning: 3 },
    specs: {
      surface: "20-50m²",
      players: "2 à 5 Joueurs",
      tech: ["Baguettes IR", "Bibliothèque Pivotante", "Bougies Lévitation"]
    },
    storyHook: "La légende raconte que la Pierre de Lune est cachée dans ce bureau. Seuls ceux qui maîtrisent le sortilège de 'Revelio' pourront ouvrir le coffre."
  },
  {
    id: 3,
    title: "Pandora",
    tagline: "Connexion Nature",
    image: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2000&auto=format&fit=crop",
    tags: ["Bio-Luminescence", "Zen", "Sensoriel"],
    desc: "Une immersion totale dans une jungle bioluminescente. Idéal pour une chambre relaxante qui se transforme en forêt enchantée la nuit.",
    difficulty: 'Découverte',
    stats: { search: 5, manipulation: 3, reasoning: 1 },
    specs: {
      surface: "Chambre - 20m²",
      players: "1 à 3 Joueurs",
      tech: ["Fibre Optique", "Plantes Tactiles", "Diffuseur d'Odeurs"]
    },
    storyHook: "La forêt vous parle. Connectez votre esprit à l'arbre des âmes (votre tête de lit interactive) pour rétablir l'harmonie dans la pièce."
  },
  {
    id: 4,
    title: "Suite Vénus",
    tagline: "Love Room & Sens",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2000&auto=format&fit=crop",
    tags: ["Romantique", "Couple", "Glamour"],
    desc: "Une expérience conçue spécifiquement pour les couples. Un jeu de piste sensuel qui déverrouille des surprises (champagne, huiles) au fil de la soirée.",
    difficulty: 'Découverte',
    stats: { search: 2, manipulation: 3, reasoning: 2 },
    specs: {
      surface: "Suite Parentale",
      players: "Couple",
      tech: ["Lumières Tamisées", "Lit Suspendu", "Audio Sync"]
    },
    storyHook: "Retrouvez les 7 clés du désir cachées dans la suite pour ouvrir le coffret secret. Une aventure intime où la communication est la clé."
  },
  {
    id: 5,
    title: "Darkness",
    tagline: "Oserez-vous entrer ?",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2000&auto=format&fit=crop",
    tags: ["Horreur", "Adrénaline", "Survivre"],
    desc: "Pour les amateurs de frissons forts. Une ambiance pesante, des lumières qui vacillent et des bruits inexpliqués. Déconseillé aux âmes sensibles.",
    difficulty: 'Expert',
    stats: { search: 4, manipulation: 2, reasoning: 4 },
    specs: {
      surface: "Cave / Sous-sol",
      players: "2 à 4 Joueurs",
      tech: ["Stroboscopes", "Air Blasts", "Capteurs de Mouvement"]
    },
    storyHook: "Vous êtes enfermés. L'électricité est coupée. Quelque chose respire dans le noir avec vous. Trouvez le disjoncteur avant qu'il ne vous trouve."
  }
];