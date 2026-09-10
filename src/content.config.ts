import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      excerpt: z.string().default(''),
      date: z.union([z.string(), z.date()]),
      readTime: z.string().default('5 min de lectura'),
      category: z.string().default('Frontend'),
    })
    // `date` se expone como etiqueta legible ("feb 2025"), que es lo que
    // renderizan las páginas. Esa cadena pierde el día y no sirve para
    // ordenar, así que se conserva aparte el valor original en `dateValue`.
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
