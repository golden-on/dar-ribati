// --- Multilingue (FR / EN) ---
export type SupportedLang = 'fr' | 'en';

export type LocalizedText = {
  [key in SupportedLang]: string;
};

// --- Identifiants stricts des chambres ---
export type RoomId =
  | 'chambre-triple-confort'
  | 'chambre-quadruple-confort'
  | 'chambre-double-patio'
  | 'chambre-double-superieure'
  | 'chambre-triple-deluxe'
  | 'chambre-double'
  | 'chambre-lits-jumeaux'
  | 'riad-complet';

export interface Room {
  id: RoomId;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  bedConfiguration: LocalizedText;
  capacity: {
    adults: number;
    children?: number;
  };
  pricePerNight: number; // En EUR (à ajuster selon saison)
  amenities: LocalizedText[];
  mainImage: {
    src: string;
    alt: LocalizedText;
  };
  gallery: Array<{
    src: string;
    alt: LocalizedText;
  }>;
  // Liens iCal spécifiques par chambre pour la synchronisation
  iCalUrls: {
    airbnb?: string;
    booking?: string;
  };
}
