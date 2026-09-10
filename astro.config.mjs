// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
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

// https://astro.build/config
export default defineConfig({
  output: 'server',
  ...(isDev ? {} : { adapter: cloudflare({ imageService: 'passthrough' }) }),
  integrations: isDev ? [react(), keystatic()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
