import { getCollection } from 'astro:content';

export interface Highlight {
  title: string;
  url: string;
  category: string;
  /** Marca los enlaces que salen del sitio, para aplicarles target y rel. */
  external: boolean;
}

/**
 * Destacados a partir de los proyectos con `featured: true` en la colección,
 * enlazando a su página interna. Devuelve una lista vacía si no hay ninguno,
 * y quien la consume oculta la sección.
 */
export async function getHighlights(limit = 4): Promise<Highlight[]> {
  const featured = (await getCollection('projects')).filter(
    (project) => project.data.featured
  );

  return featured.slice(0, limit).map((project) => ({
    title: project.data.title,
    url: `/projects/${project.id}`,
    category: project.data.category,
    external: false,
  }));
}
