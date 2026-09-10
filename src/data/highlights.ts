import { getCollection } from 'astro:content';
import { portfolioData } from './portfolio';

export interface Highlight {
  title: string;
  url: string;
  category: string;
  /** Marca los enlaces que salen del sitio, para aplicarles target y rel. */
  external: boolean;
}

/**
 * Destacados a partir de los proyectos con `featured: true` en la colección,
 * enlazando a su página interna. Si la colección está vacía se cae a la lista
 * estática de portfolioData, igual que hace index.astro con los proyectos.
 */
export async function getHighlights(limit = 4): Promise<Highlight[]> {
  const featured = (await getCollection('projects')).filter(
    (project) => project.data.featured
  );

  if (featured.length === 0) {
    return portfolioData.popularHighlights.slice(0, limit).map((item) => ({
      title: item.title,
      url: item.url,
      category: item.category,
      external: /^https?:\/\//.test(item.url),
    }));
  }

  return featured.slice(0, limit).map((project) => ({
    title: project.data.title,
    url: `/projects/${project.id}`,
    category: project.data.category,
    external: false,
  }));
}
