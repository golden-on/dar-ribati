import ical from 'node-ical';
import { ROOMS } from './rooms';
import type { RoomId, CalendarSyncResponse } from '../types';

/**
 * Convertit un objet Date en chaîne 'YYYY-MM-DD' au format local ISO.
 */
function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Génère le tableau de toutes les dates occupées entre startDate (inclus) et endDate (exclus).
 * Note : La date de checkout n'est pas incluse car la chambre est libérée ce jour-là.
 */
function expandDateRange(startDate: Date, endDate: Date): string[] {
  const dates: string[] = [];
  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0);

  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  while (current < end) {
    dates.push(formatDateToYYYYMMDD(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

/**
 * Télécharge et parse un flux iCal distant.
 */
async function fetchAndParseIcal(url: string): Promise<string[]> {
  if (!url || !url.startsWith('http')) return [];

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'DarRibati-CalendarSync/1.0',
      },
    });

    if (!response.ok) {
      console.error(`[iCal Sync Error] Échec de téléchargement (${response.status}): ${url}`);
      return [];
    }

    const icsText = await response.text();
    const events = ical.parseICS(icsText);
    const bookedDates: string[] = [];

    for (const key in events) {
      if (Object.prototype.hasOwnProperty.call(events, key)) {
        const event = events[key];

        if (event && event.type === 'VEVENT' && event.start && event.end) {
          const start = new Date(event.start);
          const end = new Date(event.end);

          // Ignorer les événements passés (optionnel mais plus léger)
          const now = new Date();
          now.setHours(0, 0, 0, 0);
          if (end < now) continue;

          const dates = expandDateRange(start, end);
          bookedDates.push(...dates);
        }
      }
    }

    return bookedDates;
  } catch (error) {
    console.error(`[iCal Sync Error] Erreur lors du parsing de ${url}:`, error);
    return [];
  }
}

/**
 * Fonction principale : Récupère et fusionne les calendriers d'une chambre.
 */
export async function getRoomOccupiedDates(roomId: RoomId): Promise<CalendarSyncResponse> {
  const room = ROOMS.find((r) => r.id === roomId);

  if (!room) {
    throw new Error(`Chambre introuvable : ${roomId}`);
  }

  const { airbnb, booking } = room.iCalUrls;

  // Téléchargement en parallèle des flux Booking et Airbnb
  const [airbnbDates, bookingDates] = await Promise.all([
    airbnb ? fetchAndParseIcal(airbnb) : Promise.resolve([]),
    booking ? fetchAndParseIcal(booking) : Promise.resolve([]),
  ]);

  // Fusion et dédoublonnage des dates occupées
  const allOccupiedSet = new Set<string>([...airbnbDates, ...bookingDates]);
  const sortedBookedDates = Array.from(allOccupiedSet).sort();

  return {
    roomId,
    lastUpdated: new Date().toISOString(),
    bookedDates: sortedBookedDates,
  };
}
