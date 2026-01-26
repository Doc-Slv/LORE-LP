
export interface UniverseData {
  id: number;
  title: string;
  tagline: string;
  image: string;
  tags: string[];
  desc: string; // Description courte pour les cards
  fullDescription?: string; // Description longue pour la page de détail
  difficulty: 'Découverte' | 'Initié' | 'Expert';
  stats: {
    search: number;
    manipulation: number;
    reasoning: number;
  };
  specs: {
    surface: string;
    players: string;
    tech: string[];
  };
  storyHook: string;
  // Nouveaux champs pour le détail
  gameplayFeatures?: string[]; // Liste des interactions clés
  atmosphere?: string[]; // Mots clés d'ambiance
  hardwareDetails?: string; // Description technique B2B
  gallery?: string[]; // Images additionnelles pour l'immersion
  videoUrl?: string; // Teaser vidéo optionnel
}

export interface LeadFormData {
  name: string;
  company: string;
  projectType: string;
  email: string;
  phone: string;
  message: string;
}

export type ButtonVariant = 'solid' | 'outline';
export type ButtonSize = 'normal' | 'large';
