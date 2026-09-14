/**
 * Genera las imágenes sociales del sitio en public/og/ antes de `astro build`.
 *
 * Por qué un script y no un endpoint de Astro: el adaptador de Cloudflare
 * ejecuta el prerender dentro de workerd, un entorno sin filesystem, sin
 * módulos nativos y con WebAssembly deshabilitado. satori y resvg necesitan
 * las tres cosas, así que la única forma de tenerlas es correrlas en Node
 * fuera del pipeline de Astro. Como contrapartida, los PNG terminan siendo
 * assets estáticos servidos desde el edge, que es lo ideal para un og:image.
 *
 * Se ejecuta con `node --experimental-strip-types` (ver package.json) para
 * poder importar directamente los módulos .ts del proyecto y no duplicar ni
 * la plantilla ni los datos del portfolio.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { renderOgImage, type OgCardInput } from '../src/lib/og.ts';
import { portfolioData } from '../src/data/portfolio.ts';

const root = process.cwd();
const outDir = path.join(root, 'public/og');

interface Entry {
  slug: string;
  data: Record<string, unknown>;
}

/** Lee una colección de contenido y descarta los borradores. */
async function readCollection(name: string): Promise<Entry[]> {
  const dir = path.join(root, 'src/content', name);
  let files: string[];
  try {
    files = (await fs.readdir(dir)).filter((file) => file.endsWith('.md'));
  } catch {
    return [];
  }

  const entries = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), 'utf8');
      return { slug: file.replace(/\.md$/, ''), data: matter(raw).data as Record<string, unknown> };
    })
  );

  return entries.filter((entry) => entry.data.draft !== true);
}

function str(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

async function main() {
  const [posts, projects] = await Promise.all([
    readCollection('blog'),
    readCollection('projects'),
  ]);

  // Las claves espejan las rutas del sitio, que es lo que construye
  // `ogImageUrl()` en src/lib/seo.ts: /blog/mi-post → /og/blog/mi-post.png.
  const cards = new Map<string, OgCardInput>([
    [
      'home',
      {
        eyebrow: 'Portfolio',
        // El nombre ya aparece en el pie de la tarjeta: el titular se aprovecha
        // para decir qué hace, que es la información que falta.
        title: 'Software Engineer — Backend, Linux & IoT',
        subtitle: portfolioData.tagline,
        meta: 'Valdivia, Chile',
      },
    ],
    [
      'about',
      {
        eyebrow: 'Sobre mí',
        title: 'Trayectoria & Filosofía de Ingeniería',
        subtitle: portfolioData.bio,
        meta: 'Backend · Linux · IoT',
      },
    ],
    [
      'blog',
      {
        eyebrow: 'Blog',
        title: 'Artículos & Casos de Estudio',
        subtitle:
          'Ingeniería de sistemas backend en Go, telemetría IoT, Linux y bases de datos en producción.',
        meta: `${posts.length} ${posts.length === 1 ? 'artículo' : 'artículos'}`,
      },
    ],
    [
      'projects',
      {
        eyebrow: 'Proyectos',
        title: 'Sistemas backend, infraestructura y telemetría',
        subtitle:
          'Daemons concurrentes, pipelines IoT a gran escala y automatización de infraestructura Linux.',
        meta: `${projects.length} ${projects.length === 1 ? 'proyecto' : 'proyectos'}`,
      },
    ],
    [
      '404',
      {
        eyebrow: 'Error 404',
        title: 'Esta página no existe',
        subtitle: 'La dirección es incorrecta o el contenido se movió.',
      },
    ],
  ]);

  for (const post of posts) {
    cards.set(`blog/${post.slug}`, {
      eyebrow: str(post.data.category) ?? 'Artículo',
      title: str(post.data.title) ?? post.slug,
      subtitle: str(post.data.excerpt),
      meta: str(post.data.readTime),
    });
  }

  for (const project of projects) {
    cards.set(`projects/${project.slug}`, {
      eyebrow: str(project.data.category) ?? 'Proyecto',
      title: str(project.data.title) ?? project.slug,
      subtitle: str(project.data.subtitle) ?? str(project.data.description),
      meta: str(project.data.year),
    });
  }

  // Se regenera todo en cada build: son ~10 imágenes y evita PNG huérfanos de
  // entradas renombradas o pasadas a borrador.
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const started = Date.now();
  for (const [route, card] of cards) {
    const file = path.join(outDir, `${route}.png`);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, await renderOgImage(card));
  }

  console.log(
    `[og] ${cards.size} imágenes generadas en public/og/ (${Date.now() - started} ms)`
  );
}

await main();
