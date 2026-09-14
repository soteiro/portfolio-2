import { SITE_URL, SITE_NAME, LOCALE_TAGS, DEFAULT_LOCALE, type Locale } from '../config/site';
import { portfolioData } from '../data/portfolio';

/** URL absoluta a partir de una ruta del sitio. Toda salida SEO debe serlo. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

/**
 * URL de la imagen de previsualización de una ruta. El endpoint
 * `/og/[...route].png` genera un PNG por página en tiempo de build.
 */
export function ogImageUrl(route: string): string {
  const clean = route.replace(/^\/+|\/+$/g, '') || 'home';
  return absoluteUrl(`/og/${clean}.png`);
}

/** `@id` estables para que los distintos bloques JSON-LD se referencien. */
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Entidad de autor. Es el bloque más importante para el objetivo del sitio:
 * le dice a Google quién sos, qué sabés hacer y dónde más estás, de modo que
 * pueda asociar el dominio con la persona en el Knowledge Graph.
 */
export function personSchema() {
  const { name, role, bio, social, skills } = portfolioData;

  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: name.display,
    givenName: name.first,
    familyName: name.last,
    url: SITE_URL,
    image: absoluteUrl(portfolioData.avatar),
    jobTitle: role,
    description: bio,
    email: `mailto:${social.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valdivia',
      addressRegion: 'Los Ríos',
      addressCountry: 'CL',
    },
    knowsAbout: [
      ...skills.languages,
      ...skills.frameworks,
      ...skills.specialties,
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    sameAs: [social.github, social.linkedin].filter(Boolean),
  };
}

/** El sitio como entidad, atado a la persona como autor y editor. */
export function websiteSchema(locale: Locale = DEFAULT_LOCALE) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: portfolioData.tagline,
    inLanguage: LOCALE_TAGS[locale],
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };
}

export interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  section?: string;
  keywords?: string[];
  wordCount?: number;
  locale?: Locale;
}

export function blogPostingSchema(post: BlogPostingInput) {
  return {
    '@type': 'BlogPosting',
    '@id': `${post.url}#article`,
    headline: post.title,
    description: post.description,
    url: post.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    image: post.image,
    datePublished: post.datePublished.toISOString(),
    dateModified: (post.dateModified ?? post.datePublished).toISOString(),
    inLanguage: LOCALE_TAGS[post.locale ?? DEFAULT_LOCALE],
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(post.section ? { articleSection: post.section } : {}),
    ...(post.keywords?.length ? { keywords: post.keywords.join(', ') } : {}),
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
  };
}

export interface ProjectInput {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  year?: string;
  demoUrl?: string;
  githubUrl?: string;
  locale?: Locale;
}

/**
 * Los proyectos se modelan como `SoftwareSourceCode` cuando hay repositorio y
 * como `CreativeWork` cuando no, que es lo que mejor describe un caso de
 * estudio de ingeniería frente a un cliente potencial.
 */
export function projectSchema(project: ProjectInput) {
  return {
    '@type': project.githubUrl ? 'SoftwareSourceCode' : 'CreativeWork',
    '@id': `${project.url}#project`,
    name: project.title,
    headline: project.title,
    description: project.description,
    url: project.url,
    image: project.image,
    inLanguage: LOCALE_TAGS[project.locale ?? DEFAULT_LOCALE],
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    keywords: project.tags.join(', '),
    ...(project.year ? { dateCreated: project.year } : {}),
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.tags.length ? { programmingLanguage: project.tags } : {}),
    ...(project.demoUrl ? { sameAs: [project.demoUrl] } : {}),
  };
}

/**
 * Migas de pan. Google las usa para reemplazar la URL cruda en los resultados
 * por una ruta legible, lo que sube el CTR.
 */
export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Envuelve varios bloques en un único `@graph`, que es lo que Google prefiere. */
export function jsonLdGraph(...nodes: Array<object | null | undefined>) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  });
}
