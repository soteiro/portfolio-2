import { DEFAULT_LOCALE, LOCALES, type Locale } from '../config/site';

const LOCALE_SET = new Set<string>(LOCALES);

export function isLocale(value: string): value is Locale {
  return LOCALE_SET.has(value);
}

/**
 * Idioma de una URL a partir de su primer segmento. El idioma por defecto se
 * sirve sin prefijo (`prefixDefaultLocale: false`), así que `/blog` es `es` y
 * `/en/blog` es `en`.
 */
export function getLocale(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const first = pathname.split('/').filter(Boolean)[0];
  return first && isLocale(first) ? first : DEFAULT_LOCALE;
}

/** Ruta sin el prefijo de idioma: `/en/blog/x` → `/blog/x`. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] && isLocale(segments[0])) segments.shift();
  return '/' + segments.join('/');
}

/** Misma ruta en otro idioma: `('/blog', 'en')` → `/en/blog`. */
export function localizePath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return base;
  return base === '/' ? `/${locale}/` : `/${locale}${base}`;
}

/**
 * Normaliza una ruta a su forma canónica: una sola barra inicial, sin barra
 * final (salvo la raíz) y sin `index.html`. Evita que `/blog` y `/blog/`
 * compitan como URLs distintas.
 */
export function canonicalPath(pathname: string): string {
  const clean = pathname.replace(/index\.html?$/i, '').replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}
