import type { Room } from '../types';

export const ROOMS: Room[] = [
  {
    id: 'chambre-triple-confort',
    slug: 'chambre-triple-confort',
    name: {
      fr: 'Chambre Triple Confort',
      en: 'Comfort Triple Room',
    },
    shortDescription: {
      fr: 'Chambre spacieuse et lumineuse idéale pour les petites familles ou groupes.',
      en: 'Spacious and bright room ideal for small families or groups.',
    },
    bedConfiguration: {
      fr: '1 grand lit double + 2 lits simples',
      en: '1 large double bed + 2 single beds',
    },
    capacity: { adults: 4 },
    pricePerNight: 90,
    amenities: [
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
      { fr: 'Salle de bain privée', en: 'Private Bathroom' },
    ],
    mainImage: {
      src: '/images/rooms/triple-confort.jpg',
      alt: { fr: 'Chambre Triple Confort Dar Ribati', en: 'Comfort Triple Room Dar Ribati' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-quadruple-confort',
    slug: 'chambre-quadruple-confort',
    name: {
      fr: 'Chambre Quadruple Confort',
      en: 'Comfort Quadruple Room',
    },
    shortDescription: {
      fr: 'Espace généreux alliant tradition et confort moderne pour 4 personnes.',
      en: 'Generous space combining tradition and modern comfort for 4 guests.',
    },
    bedConfiguration: {
      fr: '1 grand lit double + 2 lits simples',
      en: '1 large double bed + 2 single beds',
    },
    capacity: { adults: 4 },
    pricePerNight: 100,
    amenities: [
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
      { fr: 'Salle de bain privée', en: 'Private Bathroom' },
    ],
    mainImage: {
      src: '/images/rooms/quadruple-confort.jpg',
      alt: { fr: 'Chambre Quadruple Confort', en: 'Comfort Quadruple Room' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-double-patio',
    slug: 'chambre-double-patio',
    name: {
      fr: 'Chambre Double avec Patio',
      en: 'Double Room with Patio Access',
    },
    shortDescription: {
      fr: 'Accès direct au patio central du riad, idéale pour profiter de la sérénité du lieu.',
      en: 'Direct access to the central patio, perfect to enjoy the riad’s serenity.',
    },
    bedConfiguration: {
      fr: '1 lit double',
      en: '1 double bed',
    },
    capacity: { adults: 2 },
    pricePerNight: 75,
    amenities: [
      { fr: 'Accès direct Patio', en: 'Direct Patio Access' },
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
    ],
    mainImage: {
      src: '/images/rooms/double-patio.jpg',
      alt: { fr: 'Chambre Double avec accès Patio', en: 'Double Room Patio Access' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-double-superieure',
    slug: 'chambre-double-superieure',
    name: {
      fr: 'Chambre Double Supérieure',
      en: 'Superior Double Room',
    },
    shortDescription: {
      fr: 'Plus spacieuse et raffinée, offrant un niveau de confort supérieur.',
      en: 'More spacious and refined, offering a superior level of comfort.',
    },
    bedConfiguration: {
      fr: '1 lit double',
      en: '1 double bed',
    },
    capacity: { adults: 2 },
    pricePerNight: 85,
    amenities: [
      { fr: 'Espace lounge', en: 'Lounge area' },
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
    ],
    mainImage: {
      src: '/images/rooms/double-superieure.jpg',
      alt: { fr: 'Chambre Double Supérieure', en: 'Superior Double Room' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-triple-deluxe',
    slug: 'chambre-triple-deluxe',
    name: {
      fr: 'Chambre Triple Deluxe',
      en: 'Deluxe Triple Room',
    },
    shortDescription: {
      fr: 'Allie charme traditionnel marocain et prestations haut de gamme.',
      en: 'Blends traditional Moroccan charm with high-end amenities.',
    },
    bedConfiguration: {
      fr: '1 grand lit double + 1 lit simple',
      en: '1 large double bed + 1 single bed',
    },
    capacity: { adults: 3 },
    pricePerNight: 95,
    amenities: [
      { fr: 'Finition Tadelakt', en: 'Tadelakt Finish' },
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
    ],
    mainImage: {
      src: '/images/rooms/triple-deluxe.jpg',
      alt: { fr: 'Chambre Triple Deluxe', en: 'Deluxe Triple Room' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-double',
    slug: 'chambre-double',
    name: {
      fr: 'Chambre Double Standard',
      en: 'Standard Double Room',
    },
    shortDescription: {
      fr: 'Chambre intime et accueillante avec deux lits simples.',
      en: 'Cozy and welcoming room with two single beds.',
    },
    bedConfiguration: {
      fr: '2 lits simples',
      en: '2 single beds',
    },
    capacity: { adults: 2 },
    pricePerNight: 65,
    amenities: [
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
    ],
    mainImage: {
      src: '/images/rooms/double-standard.jpg',
      alt: { fr: 'Chambre Double Standard', en: 'Standard Double Room' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
  {
    id: 'chambre-lits-jumeaux',
    slug: 'chambre-lits-jumeaux',
    name: {
      fr: 'Chambre Lits Jumeaux',
      en: 'Twin Room',
    },
    shortDescription: {
      fr: 'Idéale pour deux voyageurs cherchant confort et autonomie.',
      en: 'Ideal for two travelers looking for comfort and flexibility.',
    },
    bedConfiguration: {
      fr: '2 lits simples',
      en: '2 single beds',
    },
    capacity: { adults: 2 },
    pricePerNight: 65,
    amenities: [
      { fr: 'Climatisation', en: 'Air Conditioning' },
      { fr: 'Wi-Fi Haut Débit', en: 'High-Speed Wi-Fi' },
    ],
    mainImage: {
      src: '/images/rooms/lits-jumeaux.jpg',
      alt: { fr: 'Chambre Lits Jumeaux', en: 'Twin Room' },
    },
    gallery: [],
    iCalUrls: { airbnb: '', booking: '' },
  },
];