import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_URL, LOCALE_TAGS, DEFAULT_LOCALE } from '../config/site';
import { portfolioData } from '../data/portfolio';

export const prerender = true;

/**
 * Feed del blog. El Footer ya lo enlazaba, así que hasta ahora era un enlace
 * roto. Más allá de los lectores RSS, el feed es la vía por la que agregadores
 * técnicos y newsletters descubren artículos nuevos: enlaces entrantes que
 * son, en la práctica, la mitad del SEO de un blog personal.
 */
export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.dateValue.valueOf() - a.data.dateValue.valueOf()
  );

  return rss({
    title: `${SITE_NAME} — Artículos & Casos de Estudio`,
    description:
      'Ingeniería de sistemas backend en Go, telemetría IoT a gran escala, Linux y optimización de bases de datos en producción.',
    site: context.site ?? SITE_URL,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.dateValue,
      link: `/blog/${post.id}`,
      categories: [post.data.category, ...post.data.tags],
      author: `${portfolioData.social.email} (${portfolioData.name.display})`,
    })),
    customData: [
      `<language>${LOCALE_TAGS[DEFAULT_LOCALE]}</language>`,
      `<copyright>© ${new Date().getFullYear()} ${portfolioData.name.display}</copyright>`,
    ].join(''),
  });
};
