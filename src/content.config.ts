import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Campos comunes de SEO. `seoTitle` y `seoDescription` existen porque el
 * título que funciona en la página (largo, con matices) rara vez es el que
 * funciona en Google (~60 caracteres, con la palabra clave al principio);
 * cuando no se definen, se cae al título y al extracto normales.
 */
const seoFields = {
  seoTitle: z.string().optional().nullable(),
  seoDescription: z.string().optional().nullable(),
  /** Excluye la entrada del sitio, del sitemap y del RSS sin borrarla. */
  draft: z.boolean().default(false),
  /** Imagen social propia. Si falta, se genera una con el título. */
  ogImage: z.string().optional().nullable(),
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().default(''),
    category: z.string().default('Frontend'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    demoUrl: z.string().optional().nullable(),
    githubUrl: z.string().optional().nullable(),
    year: z.string().optional().nullable(),
    // `lastmod` en el sitemap: le dice a Google que vuelva a rastrear una
    // ficha que cambió, en vez de asumir que sigue igual desde el primer
    // rastreo.
    updated: z.coerce.date().optional().nullable(),
    ...seoFields,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      excerpt: z.string().default(''),
      date: z.union([z.string(), z.date()]),
      /** Fecha de la última edición de fondo, no de un retoque tipográfico. */
      updated: z.coerce.date().optional().nullable(),
      readTime: z.string().default('5 min de lectura'),
      category: z.string().default('Frontend'),
      /** Términos concretos del artículo; alimentan `keywords` en el JSON-LD. */
      tags: z.array(z.string()).default([]),
      ...seoFields,
    })
    // `date` se expone como etiqueta legible ("feb 2025"), que es lo que
    // renderizan las páginas. Esa cadena pierde el día y no sirve para
    // ordenar ni para las fechas ISO que exige el JSON-LD, así que se
    // conserva aparte el valor original en `dateValue`.
    .transform((data) => ({
      ...data,
      dateValue: data.date instanceof Date ? data.date : new Date(data.date),
      date:
        data.date instanceof Date
          ? data.date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
          : data.date,
    })),
});

export const collections = { projects, blog };
