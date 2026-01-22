export interface UniverseData {
  id: number;
  title: string;
  tagline: string;
  image: string;
  tags: string[];
  desc: string;
  difficulty: 'Découverte' | 'Initié' | 'Expert';
  // Nouvelles propriétés pour le style "Listing Escape Game"
  stats: {
    search: number; // Sur 5 (Fouille)
    manipulation: number; // Sur 5
    reasoning: number; // Sur 5 (Réflexion)
  };
  specs: {
    surface: string;
    players: string;
    tech: string[]; // ex: "RFID", "Maglocks", "Audio"
  };
  storyHook: string; // Le pitch narratif
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