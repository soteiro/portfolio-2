/**
 * Configuración canónica del sitio. Fuente única de verdad para todo lo que
 * afecta al SEO: dominio, idiomas, textos por defecto y verificaciones.
 *
 * `SITE_URL` se repite en `astro.config.mjs` (la opción `site`) porque el
 * config de Astro se evalúa antes de que exista el alias `~`/`astro:content`,
 * y Astro necesita la URL literal. Si cambiás el dominio, cambialo en ambos.
 */
export const SITE_URL = 'https://soteiro.dev';

/** Idioma por defecto: se sirve sin prefijo (`/blog`, no `/es/blog`). */
export const DEFAULT_LOCALE = 'es' as const;

/** Idiomas con rutas propias. `en` está preparado pero todavía sin contenido. */
export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

/** Código completo para `og:locale` y `<html lang>`. */
export const LOCALE_TAGS: Record<Locale, string> = {
  es: 'es-CL',
  en: 'en-US',
};

/** Nombre corto del sitio, para `og:site_name` y sufijo de títulos. */
export const SITE_NAME = 'Diego Soto';

/**
 * Los títulos se construyen como `${title} — ${SITE_NAME}`, salvo la home,
 * que usa `HOME_TITLE` tal cual. El límite práctico en Google son ~60
 * caracteres; más largo se trunca con puntos suspensivos.
 */
export const TITLE_SEPARATOR = ' — ';

/**
 * Verificaciones de propiedad. Se leen de variables de entorno para no
 * versionar los códigos; si están vacías, el meta tag no se emite.
 * Search Console también se puede verificar por DNS en Cloudflare, en cuyo
 * caso no hace falta definir nada acá.
 */
export const VERIFICATION = {
  google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION ?? '',
};

/**
 * Cloudflare Web Analytics: token del sitio (Dashboard → Analytics → Web
 * Analytics). Sin cookies y sin banner de consentimiento. Si está vacío no se
 * inyecta el script.
 */
export const CLOUDFLARE_ANALYTICS_TOKEN =
  import.meta.env.PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN ?? '';

/** Rutas que nunca deben indexarse ni aparecer en el sitemap. */
export const NOINDEX_PATHS = ['/keystatic', '/api/'];
