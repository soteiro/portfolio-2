import type { APIRoute } from 'astro';
import { SITE_URL, NOINDEX_PATHS } from '../config/site';

export const prerender = true;

/**
 * robots.txt generado desde la config para que el sitemap apunte siempre al
 * dominio canónico. Todo se permite salvo el editor y las rutas de API, que
 * no existen en producción pero conviene bloquear por si eso cambia.
 *
 * No se bloquea ningún bot de IA: para un portfolio cuyo objetivo es que
 * reclutadores y clientes te encuentren, aparecer en respuestas de ChatGPT,
 * Perplexity o Google AI Overviews juega a favor.
 */
export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    ...NOINDEX_PATHS.map((path) => `Disallow: ${path}`),
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', SITE_URL).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
