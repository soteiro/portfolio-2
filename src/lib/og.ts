import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { portfolioData } from '../data/portfolio.ts';

/**
 * Generación de imágenes sociales (1200×630) con satori + resvg.
 *
 * Lo usa `scripts/generate-og.ts`, que corre en Node **antes** de `astro
 * build` y deja los PNG en public/og/.
 *
 * No puede ser un endpoint de Astro, ni siquiera prerenderizado: el adaptador
 * de Cloudflare ejecuta el prerender dentro de workerd, donde no hay
 * filesystem ni módulos nativos ni WebAssembly. Generarlas antes del build
 * mantiene a satori y a resvg completamente fuera del grafo del Worker.
 */

const WIDTH = 1200;
const HEIGHT = 630;

// Paleta tomada de global.css (tema oscuro), para que la previsualización se
// vea como el sitio y no como una plantilla genérica.
const COLORS = {
  bg: '#0d0f12',
  surface: '#13171b',
  border: 'rgba(255, 255, 255, 0.10)',
  text: '#f2f5f7',
  muted: '#9ca8b4',
  primary: '#809fff',
  secondary: '#ff1981',
};

// Las rutas se resuelven desde la raíz del proyecto: durante el build el cwd
// es el proyecto, mientras que `import.meta.url` apunta al chunk compilado.
const root = process.cwd();

let fontCache: Array<{ name: string; data: Buffer; weight: 400 | 600 | 700; style: 'normal' }> | null = null;

function loadFonts() {
  if (fontCache) return fontCache;
  const dir = path.join(root, 'src/assets/fonts');
  fontCache = [
    { name: 'Inter', data: fs.readFileSync(path.join(dir, 'Inter-Regular.ttf')), weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: fs.readFileSync(path.join(dir, 'Inter-SemiBold.ttf')), weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: fs.readFileSync(path.join(dir, 'Inter-Bold.ttf')), weight: 700 as const, style: 'normal' as const },
  ];
  return fontCache;
}

let avatarCache: string | null | undefined;

/** El avatar se incrusta como data URI: satori no resuelve rutas del sitio. */
function loadAvatar(): string | null {
  if (avatarCache !== undefined) return avatarCache;
  try {
    const file = path.join(root, 'public', portfolioData.avatar.replace(/^\//, ''));
    avatarCache = `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;
  } catch {
    // Sin avatar la tarjeta sigue siendo válida; solo pierde la foto.
    avatarCache = null;
  }
  return avatarCache;
}

type Style = Record<string, string | number>;
type Node = { type: string; props: Record<string, unknown> };

/** Mini constructor de elementos: satori acepta el mismo árbol que produce JSX. */
function el(type: string, style: Style, children?: Array<Node | false | null> | string): Node {
  return {
    type,
    props: {
      style,
      ...(children === undefined
        ? {}
        : { children: Array.isArray(children) ? children.filter(Boolean) : children }),
    },
  };
}

/**
 * Tamaño de fuente en función del largo del título. Sin esto, un título de
 * dos palabras se ve perdido y uno de quince se sale de la tarjeta.
 */
function titleSize(length: number): number {
  if (length <= 34) return 68;
  if (length <= 60) return 58;
  if (length <= 95) return 48;
  return 40;
}

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1).trimEnd()}…`;
}

export interface OgCardInput {
  /** Etiqueta superior: categoría del artículo, sección o rol. */
  eyebrow: string;
  title: string;
  /** Línea de apoyo bajo el título. Opcional. */
  subtitle?: string;
  /** Pie derecho: fecha, tiempo de lectura, año del proyecto… */
  meta?: string;
}

function card({ eyebrow, title, subtitle, meta }: OgCardInput): Node {
  const avatar = loadAvatar();
  const heading = truncate(title, 120);

  return el(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: COLORS.bg,
      fontFamily: 'Inter',
      position: 'relative',
    },
    [
      // Halo diagonal: rompe el fondo plano sin competir con el texto.
      el('div', {
        position: 'absolute',
        top: -240,
        right: -180,
        width: 760,
        height: 760,
        borderRadius: 760,
        backgroundImage: `radial-gradient(circle at center, ${COLORS.primary}26 0%, ${COLORS.bg}00 70%)`,
      }),
      // Barra de acento superior.
      el('div', {
        position: 'absolute',
        top: 0,
        left: 0,
        width: WIDTH,
        height: 10,
        backgroundImage: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
      }),

      el(
        'div',
        {
          display: 'flex',
          flexDirection: 'column',
          width: WIDTH,
          height: HEIGHT,
          padding: '72px 72px 60px 72px',
        },
        [
          // Fila superior: sección a la izquierda, dominio a la derecha.
          el(
            'div',
            { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
            [
              el(
                'div',
                {
                  display: 'flex',
                  fontSize: 22,
                  fontWeight: 600,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: COLORS.secondary,
                },
                truncate(eyebrow, 40)
              ),
              el('div', { display: 'flex', fontSize: 22, fontWeight: 400, color: COLORS.muted }, 'soteiro.dev'),
            ]
          ),

          el('div', { display: 'flex', flexGrow: 1 }),

          el(
            'div',
            { display: 'flex', flexDirection: 'column', width: '100%' },
            [
              el(
                'div',
                {
                  display: 'flex',
                  fontSize: titleSize(heading.length),
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: -1,
                  color: COLORS.text,
                },
                heading
              ),
              subtitle
                ? el(
                    'div',
                    {
                      display: 'flex',
                      marginTop: 22,
                      fontSize: 26,
                      fontWeight: 400,
                      lineHeight: 1.4,
                      color: COLORS.muted,
                    },
                    truncate(subtitle, 130)
                  )
                : null,
            ]
          ),

          el('div', { display: 'flex', flexGrow: 1 }),

          // Pie: autoría a la izquierda, metadato a la derecha.
          el(
            'div',
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: 30,
              borderTop: `1px solid ${COLORS.border}`,
            },
            [
              el('div', { display: 'flex', alignItems: 'center' }, [
                avatar
                  ? ({
                      type: 'img',
                      props: {
                        src: avatar,
                        width: 64,
                        height: 64,
                        style: {
                          width: 64,
                          height: 64,
                          borderRadius: 64,
                          border: `2px solid ${COLORS.primary}`,
                          objectFit: 'cover',
                        },
                      },
                    } as Node)
                  : null,
                el(
                  'div',
                  { display: 'flex', flexDirection: 'column', marginLeft: avatar ? 20 : 0 },
                  [
                    el(
                      'div',
                      { display: 'flex', fontSize: 26, fontWeight: 600, color: COLORS.text },
                      portfolioData.name.display
                    ),
                    el(
                      'div',
                      { display: 'flex', fontSize: 20, fontWeight: 400, color: COLORS.muted, marginTop: 4 },
                      truncate(portfolioData.role, 52)
                    ),
                  ]
                ),
              ]),
              meta
                ? el(
                    'div',
                    {
                      display: 'flex',
                      fontSize: 20,
                      fontWeight: 400,
                      color: COLORS.muted,
                      padding: '10px 18px',
                      borderRadius: 999,
                      backgroundColor: COLORS.surface,
                      border: `1px solid ${COLORS.border}`,
                    },
                    truncate(meta, 42)
                  )
                : null,
            ]
          ),
        ]
      ),
    ]
  );
}

/** Renderiza la tarjeta a PNG. Devuelve el buffer listo para la respuesta. */
export async function renderOgImage(input: OgCardInput): Promise<Uint8Array> {
  const svg = await satori(card(input) as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: loadFonts(),
  });

  return new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
    font: { loadSystemFonts: false },
  })
    .render()
    .asPng();
}

export { WIDTH as OG_WIDTH, HEIGHT as OG_HEIGHT };
