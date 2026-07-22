import type { APIRoute } from 'astro';
import { getRoomOccupiedDates } from '../../../lib/ical';
import { ROOMS } from '../../../lib/rooms';
import type { RoomId } from '../../../types';

export const prerender = false; // Mode dynamique / Serverless

export const GET: APIRoute = async ({ params }) => {
  const roomId = params.roomId as RoomId;

  // Validation de l'ID de la chambre
  const isValidRoom = ROOMS.some((r) => r.id === roomId);
  if (!isValidRoom) {
    return new Response(
      JSON.stringify({ error: 'Chambre non trouvée' }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const data = await getRoomOccupiedDates(roomId);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cache CDN / Vercel : Cache pendant 10 min (600s), puis sert du stale jusqu'à 20 min
        'Cache-Control': 'public, max-age=600, s-maxage=600, stale-while-revalidate=1200',
      },
    });
  } catch (error) {
    console.error('API Calendar Error:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur lors de la synchronisation du calendrier' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
