// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Keystatic se usa solo en local: escribe los .md directamente en src/content/,
// lo que necesita un filesystem y por tanto el runtime Node.
//
// De ahí las dos condiciones de abajo:
//   - El adaptador de Cloudflare ejecuta el dev server dentro de workerd, donde
//     no hay filesystem y los <script> de Astro no resuelven. En `dev` usamos
//     Node; el build sigue siendo para Cloudflare Workers.
//   - Keystatic queda fuera del build, así /keystatic y /api/keystatic/* no se
//     publican en producción. React se va con él: su UI es `client:only="react"`,
//     de modo que el renderer hace falta en dev, pero nada más lo usa en el
//     sitio (no hay componentes .tsx propios). Si agregás uno, sacá react() de
//     la condición y dejalo siempre activo.
const isDev = process.argv.includes('dev');

// Debe coincidir con SITE_URL en src/config/site.ts. Astro necesita la URL
// literal acá porque este archivo se evalúa antes que el resto del proyecto.
const SITE_URL = 'https://soteiro.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Canonical sin barra final: /blog, nunca /blog/. Una sola forma por URL
  // evita que Google reparta autoridad entre dos versiones de la misma página.
  trailingSlash: 'never',

  // Base de i18n lista para el inglés. `prefixDefaultLocale: false` mantiene
  // el español en la raíz (/blog) y reserva /en/* para las traducciones, de
  // modo que agregarlas no obliga a redirigir ninguna URL existente.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  output: 'server',
  ...(isDev ? {} : { adapter: cloudflare({ imageService: 'passthrough' }) }),

  integrations: isDev
    ? [react(), keystatic()]
    : [
        sitemap({
          // El sitemap solo debe listar páginas indexables: /keystatic y las
          // rutas de API quedan fuera (en producción ni siquiera existen, pero
          // el filtro documenta la intención y protege ante un cambio futuro).
          filter: (page) => !/\/(keystatic|api)(\/|$)/.test(page),
          i18n: {
            defaultLocale: 'es',
            locales: { es: 'es-CL', en: 'en-US' },
          },
        }),
      ],

  vite: {
    plugins: [tailwindcss()],
  },
});
