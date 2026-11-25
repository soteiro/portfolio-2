import type { CollectionEntry } from 'astro:content';

function latestYear(year?: string | null): number {
  const matches = year?.match(/\d{4}/g);
  return matches ? Math.max(...matches.map(Number)) : 0;
}

/**
 * Orden determinístico compartido entre Hero, portada y /projects:
 * 1) Proyecto flagship Siphon primero (Go + Linux Network Namespaces + IoT)
 * 2) Resto de proyectos destacados por año más reciente
 * 3) Resto del catálogo por año más reciente y orden alfabético en español
 */
export function sortProjects(entries: CollectionEntry<'projects'>[]): CollectionEntry<'projects'>[] {
  return [...entries].sort((a, b) => {
    const aFlagship = a.id.startsWith('siphon') ? -1 : 0;
    const bFlagship = b.id.startsWith('siphon') ? -1 : 0;
    if (aFlagship !== bFlagship) return aFlagship - bFlagship;

    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;

    const yearDiff = latestYear(b.data.year) - latestYear(a.data.year);
    if (yearDiff !== 0) return yearDiff;

    return a.data.title.localeCompare(b.data.title, 'es');
  });
}

export function trackCode(index: number): string {
  return `TRK-${String(index + 1).padStart(2, '0')}`;
}
