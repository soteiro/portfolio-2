---
name: "Diego Soto — soteiro.dev"
description: "Portafolio de ingeniería de sistemas (Backend Go, Linux e IoT) modelado como un Collider Event Display de telemetría real."
colors:
  signal-yellow: "#ffd23a"
  vacuum-ink: "#0b0f14"
  cherenkov-cyan: "#35d0ff"
  calorimeter-red: "#ff4d4d"
  nominal-green: "#2cb67d"
  matte-vacuum: "#0b0f14"
  detector-steel: "#101721"
  elevated-chamber: "#16202d"
  hairline-steel: "#223244"
  ring-steel: "#3a5a7a"
  steel-highlight: "#6e9ac4"
  instrument-ink: "#edf2f7"
  telemetry-slate: "#9fb0c3"
  scrollbar-steel: "#2b3f56"
  light-blueprint-navy: "#0f3d6b"
  light-primary-ink: "#ffffff"
  light-technical-cyan: "#006b8f"
  light-calorimeter-crimson: "#d93030"
  light-amber-signal: "#b87300"
  light-nominal-forest: "#0f7a4d"
  light-blueprint-paper: "#f3f6f9"
  light-lab-white: "#ffffff"
  light-blueprint-tint: "#e7eef5"
  light-drafting-line: "#c7d4e2"
  light-deep-ring-steel: "#2a5075"
  light-drafting-ring: "#91aac4"
  light-steel-accent: "#1d5387"
  light-graphite-ink: "#0b131e"
  light-muted-blueprint: "#425468"
  light-scrollbar-slate: "#b4c4d4"
typography:
  display:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.03em"
  page-title:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  button:
    fontFamily: "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  label:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  tabular-data:
    fontFamily: "JetBrains Mono, Menlo, Monaco, Consolas, Liberation Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum"
rounded:
  spectrum: "1px"
  bar: "2px"
  code: "3px"
  sm: "4px"
  md: "6px"
  status-dot: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  card: "24px"
  section-gap: "40px"
  stack: "64px"
  viewport-padding: "clamp(1.25rem, 3vw, 2.5rem)"
  container-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.vacuum-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.detector-steel}"
    textColor: "{colors.instrument-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.elevated-chamber}"
    textColor: "{colors.instrument-ink}"
  chip-filter:
    backgroundColor: "{colors.detector-steel}"
    textColor: "{colors.instrument-ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "44px"
  chip-filter-active:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.vacuum-ink}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "44px"
  card-project:
    backgroundColor: "{colors.detector-steel}"
    textColor: "{colors.instrument-ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  callout-technical:
    backgroundColor: "{colors.detector-steel}"
    textColor: "{colors.telemetry-slate}"
    rounded: "{rounded.md}"
    padding: "24px"
  nav-header:
    backgroundColor: "{colors.matte-vacuum}"
    textColor: "{colors.instrument-ink}"
    height: "72px"
  copy-email-control:
    backgroundColor: "{colors.matte-vacuum}"
    textColor: "{colors.instrument-ink}"
    typography: "{typography.tabular-data}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
    height: "44px"
---

# Design System: Diego Soto — soteiro.dev

## Overview

**Creative North Star: "Collider Event Display"**

El sistema visual de `soteiro.dev` opera como un instrumento de visualización científica para ingeniería de sistemas en producción (Go, Linux e IoT). En lugar de recurrir a metáforas decorativas lúdicas (nubes, arcoíris o botones tridimensionales tipo píldora) o al cliché de consola verde fosforescente, la interfaz trata cada proyecto como una traza reconstruida sobre un vacío mate oscuro, con anillos concéntricos de acero, barras calorimétricas de impacto real y retículas de 1px que organizan los datos sin ruido visual.

El modo predeterminado es el tema oscuro **Matte Vacuum & Detector Steel** (`html[data-color-mode="dark"]`), concebido para lectura técnica sostenida y contraste nítido en escritorio y móvil; un selector persistente (`localStorage: saved-color-theme`) alterna hacia la variante clara **Laboratory Blueprint Paper** (`:root`), que preserva exactamente las mismas relaciones jerárquicas y cumplimiento WCAG AA sobre papel técnico de plano.

Todas las superficies son planas por defecto, con jerarquía resuelta mediante capas tonales, divisores finos de 1px y tipografía técnica auto-hospedada (`Barlow`, `Public Sans` y `JetBrains Mono`). El movimiento usa una única curva desacelerada de alta precisión (`cubic-bezier(0.16, 1, 0.3, 1)`), respetando siempre `prefers-reduced-motion: reduce`.

**Key Characteristics:**
- **Instrumento sobre vacío mate:** fondo `#0b0f14` por defecto con diagrama concéntrico SVG sin caja envolvente y micro-trama de puntos acotada al detector.
- **Dualidad térmica y editorial:** modo oscuro *Matte Vacuum* por defecto y modo claro *Laboratory Blueprint* con paridad semántica completa vía variables CSS.
- **Planimetría estricta de 1px:** separación por tonalidad y líneas capilares (`hairline grids`), sin sombras en tarjetas ni bordes decorativos `border-l-4`.
- **Tipografía auto-hospedada con roles cerrados:** `Barlow` para jerarquía display y títulos, `Public Sans` para lectura prolongada y `JetBrains Mono` restringida a datos tabulares y código.
- **Accesibilidad operativa real:** contraste WCAG AA (≥4.5:1 texto, ≥3:1 controles), objetivos táctiles mínimos de 44×44px, `skip-link`, `focus-visible` de 2px y cero audio.

## Colors

Una paleta de instrumentación científica de bajo croma estructural (aceros y vacíos) puntuada por señales funcionales de alta visibilidad que se invierten con disciplina a tintas de plano técnico en modo claro.

*(Nota de calibración frente al brief inicial: el build final ajustó sutilmente las superficies oscuras a `#101721`, las tintas oscuras a `#edf2f7` / `#9fb0c3` y el papel claro a `#f3f6f9` / `#0b131e` para maximizar el contraste AA en todos los componentes.)*

### Primary
- **Signal Yellow** (`#ffd23a` — `--color-primary`, `--color-signal` en oscuro): Acción primaria (`.telemetry-btn-primary`), traza líder `TRK-01`, métricas numéricas principales, enlaces activos, estado `:focus-visible` y texto destacado de navegación. En claro se traduce a **Blueprint Navy** (`#0f3d6b` — `--color-primary`) para acciones y énfasis de alto contraste, acompañado por **Amber Signal** (`#b87300` — `--color-signal`) para la señal de traza líder y núcleo del detector.
- **Vacuum Ink / Primary Ink** (`#0b0f14` en oscuro / `#ffffff` en claro — `--color-primary-ink`): Tinta exclusiva sobre superficies rellenas con `--color-primary` (botones primarios y chips de filtro activos).

### Secondary
- **Cherenkov Cyan** (`#35d0ff` en oscuro / **Technical Cyan** `#006b8f` en claro — `--color-secondary`): Trazas secundarias (`TRK-02`, `TRK-04`), etiquetas de especialidad/categoría en tarjetas y metadatos, nombres de stack en lectura en vivo y callouts informativos (`type="info"`).

### Tertiary
- **Calorimeter Red** (`#ff4d4d` en oscuro / **Calorimeter Crimson** `#d93030` en claro — `--color-energy`): Relleno de barras calorimétricas de métricas reales (`+15M/mes`, `95.18%`, `+16M`), cuñas radiales del arco exterior del detector, segmento inferior del espectro vertical y callouts de advertencia (`type="warning"`).
- **Nominal Green** (`#2cb67d` en oscuro / **Nominal Forest** `#0f7a4d` en claro — `--color-status-ok`): Reservado exclusivamente al indicador circular de disponibilidad remota (`8×8px`) en cabecera, menú móvil y bloque de contacto.

### Neutral
- **Matte Vacuum / Blueprint Paper** (`#0b0f14` oscuro / `#f3f6f9` claro — `--color-background`): Lienzo base de la página y fondo del control de copia de correo.
- **Detector Steel / Lab White** (`#101721` oscuro / `#ffffff` claro — `--color-surface`): Superficie estándar de tarjetas (`ProjectCard`, artículos, `Sidebar`, `Callout`, `Footer`, botones secundarios y cabecera móvil).
- **Elevated Chamber / Blueprint Tint** (`#16202d` oscuro / `#e7eef5` claro — `--color-surface-elevated`, `--color-code-bg`): Estados hover de superficies interactivas, pista activa en el selector del diagrama y fondo de código en línea (`<code>`).
- **Hairline Steel / Drafting Line** (`#223244` oscuro / `#c7d4e2` claro — `--color-border`): Bordes estándar de 1px en tarjetas, retículas `gap-px`, divisores horizontales y rejilla de referencia SVG.
- **Ring Steel / Deep Ring Steel** (`#3a5a7a` oscuro / `#2a5075` claro — `--color-border-strong`): Bordes enfatizados en tarjetas en hover, bloques de contacto, callouts, botones secundarios y menú móvil.
- **Detector Ring / Drafting Ring** (`#3a5a7a` oscuro / `#91aac4` claro — `--color-ring`): Trazos concéntricos principales del diagrama SVG y tercer segmento del indicador de espectro.
- **Steel Highlight / Steel Accent** (`#6e9ac4` oscuro / `#1d5387` claro — `--color-ring-text`): Contraste tipográfico del tramo técnico en `<h1>` (`Linux y telemetría IoT.`, `Sobre Diego Soto`), traza `TRK-03` y callouts de cita (`type="quote"`).
- **Instrument Ink / Graphite Ink** (`#edf2f7` oscuro / `#0b131e` claro — `--color-text`): Tinta principal de encabezados, cuerpo de lectura y controles.
- **Telemetry Slate / Muted Blueprint** (`#9fb0c3` oscuro / `#425468` claro — `--color-text-muted`): Tinta secundaria para bios, extractos, metadatos, fechas y etiquetas inactivas.
- **Header Glass & Selection** (`rgba(11, 15, 20, 0.88)` / `rgba(255, 210, 58, 0.25)` en oscuro; `rgba(243, 246, 249, 0.88)` / `rgba(15, 61, 107, 0.18)` en claro — `--color-header-bg`, `--selection-bg`, `--scrollbar-thumb`: `#2b3f56` / `#b4c4d4`): Translúcido de cabecera fija con `backdrop-blur-md`, selección de texto y barra de desplazamiento fina.

### Named Rules
**The Signal Scarcity Rule.** El color primario (`--color-primary`) se reserva para un CTA principal por zona, el estado activo de selección y la traza líder; nunca se usa como fondo de secciones extensas ni de párrafos decorativos.

**The Dual-Theme Parity Rule.** Ningún componente puede fijar colores hexadecimales literales en el marcado; todo relleno, trazo SVG y borde debe resolver a través de las variables semánticas de `global.css` para garantizar contraste WCAG AA en ambos modos (`dark` y `light`).

**The Contrast Floor on SVG Labels Rule.** Al atenuar trazas no seleccionadas en el diagrama (`opacity: 0.26–0.3`), el atenuado se aplica únicamente a las curvas y nodos geométricos; las etiquetas `<text>` permanecen siempre a `opacity: 1` alternando entre `--color-text` y `--color-text-muted`.

## Typography

**Display Font:** `Barlow` (auto-hospedada con `@fontsource/barlow` en pesos `500`, `600`, `700`, `800`; respaldo `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Body Font:** `Public Sans` (auto-hospedada con `@fontsource/public-sans` en pesos `400`, `500`, `600`, `700`; respaldo `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Label/Mono Font:** `JetBrains Mono` (auto-hospedada con `@fontsource/jetbrains-mono` en pesos `400`, `500`, `600`; respaldo `Menlo, Monaco, Consolas, "Liberation Mono", monospace`)

**Character:** Emparejamiento industrial y editorial de alta legibilidad: `Barlow` aporta hombros geométricos ligeramente condensados con autoridad técnica en titulares y botones, `Public Sans` sostiene párrafos extensos y documentación sin fatiga visual, y `JetBrains Mono` aporta alineación tabular estricta a cifras, códigos de pista y fragmentos de código.

### Hierarchy
- **Display** (`800`, `clamp(2.25rem, 5vw, 3.5rem)` — `text-4xl` / `sm:text-5xl` / `lg:text-[3.5rem]`, line-height `1.03`, letter-spacing `-0.03em`, `text-wrap: balance`): Exclusivo para el `<h1>` del Hero en portada.
- **Page Title** (`800`, `clamp(1.875rem, 4vw, 2.75rem)` — `text-3xl sm:text-4xl md:text-[2.75rem]`, line-height `1.15`, letter-spacing `-0.025em`): Titular `<h1>` de páginas interiores (`/about`, `/projects/[slug]`, `/blog/[slug]`).
- **Headline** (`700`, `clamp(1.5rem, 2.5vw, 1.875rem)` — `text-2xl sm:text-3xl`, line-height `1.2`, letter-spacing `-0.025em`): Encabezados de sección `<h2>` (`Proyectos en producción`, `Casos de estudio técnicos`).
- **Title** (`700`, `clamp(1.25rem, 2vw, 1.5rem)` — `text-xl sm:text-2xl`, line-height `1.375`): Títulos `<h3>` de `ProjectCard`, artículos y bloques de `Sidebar`.
- **Body** (`400`, `0.9375rem`–`1.0625rem` / `15px`–`17px`, line-height `1.6`–`1.625`): Prosa general, bios (`max-w-[54ch]` en Hero) y artículos/casos de estudio (`max-w-[68ch]` en lectura larga).
- **Label** (`500`–`600`, `0.75rem`–`0.9375rem` / `12px`–`15px`): Enlaces de navegación (`0.9375rem`), encabezados de `<dt>`/`<dd>` (`0.75rem`), estado de disponibilidad y nombres de categorías.
- **Tabular Data** (`500`–`600`, `0.6875rem`–`0.875rem` / `11px`–`14px`, `.tabular-data` con `font-variant-numeric: tabular-nums`): Códigos `TRK-01`..`TRK-04`, métricas calorimétricas, contadores de proyectos, años, tiempos de lectura, listas de stack separadas por `·`, correos electrónicos y código en línea (`0.875em`).

### Named Rules
**The Mono-Only-For-Data Rule.** `JetBrains Mono` se utiliza únicamente para datos tabulares, códigos identificadores (`TRK-xx`), métricas numéricas, etiquetas de stack técnico, direcciones de correo y bloques o fragmentos de código; nunca para prosa narrativa, bios ni botones de navegación general.

**The No-Kicker Rule.** Ninguna tarjeta ni sección lleva un kicker o eyebrow decorativo en mayúsculas por encima del titular principal. Los metadatos (especialidad, periodo, estado, fecha) viven siempre debajo del título en una tabla `<dl>` o franja secundaria estructurada.

## Layout

El sitio usa un contenedor centrado `.site-container` con ancho máximo de `1200px` (`--max-width: 75rem`) y relleno lateral fluido `clamp(1.25rem, 3vw, 2.5rem)` (`--viewport-padding`). Las páginas de lectura larga (`/about`, `/projects/[slug]`, `/blog/[slug]`) estrechan el contenedor a `52rem` (`832px`) con medida de prosa acotada a `68ch`.

- **Breakpoints activos (Tailwind v4):** `sm` (`640px`), `md` (`768px` — transición de menú móvil a navegación horizontal y columnas de footer), `lg` (`1024px` — activación de retículas asimétricas de portada y barra de disponibilidad en cabecera).
- **Composición del Hero:** grilla de 2 columnas en escritorio (`lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)]`, brecha `40px` / `gap-10`) alineada verticalmente al centro, seguida por una franja continua de índice de 4 sistemas (`grid-cols-2 lg:grid-cols-4`) construida con divisores de 1px (`gap-px bg-card-border`).
- **Portada bajo el pliegue:** ritmo vertical principal de `64px` (`gap-16`, `py-14 sm:py-16`). Sección 1 muestra encabezado + filtros inmediatos sobre una grilla de proyectos de `1` columna en móvil y `2` columnas desde `1024px` (`gap-5` / `20px`). Sección 2 equilibra artículos técnicos y barra lateral mediante `lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]` (`gap-10`).
- **Footer:** grilla de 3 columnas desde `768px` (`md:grid-cols-[1.6fr_1fr_1fr]`, brecha `40px`) sobre superficie elevada respecto al fondo (`bg-surface`) separada por borde superior de 1px.
- **Ritmo de espaciado base:** escala de `4px` (`xs`), `8px` (`sm`), `16px` (`md`), `24px` (`p-6`, estándar interno de paneles y tarjetas), `40px` (`gap-10`, separación entre columnas mayores) y `64px` (`gap-16`, separación entre secciones).

## Elevation & Depth

El sistema es estrictamente **plano por defecto**: la profundidad no se simula con sombras difusas ni relieves 3D, sino mediante cuatro planos tonales bien diferenciados (`--color-background` → `--color-surface` → `--color-surface-elevated` → `--color-header-bg` con `backdrop-blur-md`) delimitados por bordes sólidos de `1px` (`--color-border` en reposo y `--color-border-strong` o `--color-primary` en interacción).

La única sombra permitida en el sistema existe en el cajón de navegación móvil flotante (`#mobile-drawer`, `shadow-2xl`), justificada exclusivamente porque se superpone con `position: fixed` sobre el contenido desplazable.

### Motion Grammar
- **Curva única de precisión:** `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`.
- **Duraciones reales observadas:** `150ms` para cambios de color/borde en enlaces y chips, `180ms` en botones (`.telemetry-btn-primary` con micro-elevación `translateY(-1px)` en hover), `200ms` en tarjetas, `ThemeToggle` y apertura del cajón móvil (`@keyframes drawerReveal` con `translateY(-6px)` → `0`), `240ms` en cambio de tema (`--color-swap-duration`) y `300ms` en transiciones de opacidad y grosor de trazo (`stroke-width`) en el diagrama SVG.
- **Reducción de movimiento:** `@media (prefers-reduced-motion: reduce)` colapsa todas las animaciones y transiciones a `0.01ms` y restaura `scroll-behavior: auto`.

### Named Rules
**The Flat-By-Default Rule.** Tarjetas, botones, callouts y bloques de contenido nunca llevan `box-shadow` en reposo ni en hover; la respuesta interactiva se comunica reforzando el borde (`--color-border` → `--color-border-strong` / `--color-primary`) o desplazando la superficie al plano `--color-surface-elevated`.

## Shapes

Geometría instrumental sobria basada en rectángulos precisos de esquinas contenidas, líneas continuas de `1px` y círculos reservados únicamente a la geometría del detector o indicadores puntuales de estado.

- **Contenedores y tarjetas (`6px` / `rounded-md`):** `ProjectCard`, artículos, `Sidebar`, `Callout`, panel de lectura del detector, menú móvil y bloques `<pre>`.
- **Controles interactivos (`4px` / `rounded`):** `.telemetry-btn-primary`, `.telemetry-btn-secondary`, chips de filtro, enlaces de navegación, botones de icono (`44×44px`) y botón de copia de correo.
- **Micro-elementos técnicos (`1px`–`3px`):** segmentos del espectro vertical (`1px`), carriles de barras calorimétricas (`2px`) y código en línea `<code>` (`3px`).
- **Círculos (`9999px` / SVG `<circle>`):** restringidos exclusivamente al punto de disponibilidad (`8×8px`), los anillos/nodos del diagrama concéntrico y el isotipo de cabecera. Nunca se usan botones pill (`rounded-full`).
- **Bordes uniformes:** todos los contenedores usan borde perimetral uniforme de `1px`; se prohíben franjas laterales gruesas (`border-l-4`) o acentos asimétricos decorativos.

## Components

Los componentes responden con precisión táctil e inmediata: objetivos mínimos de `44px` en controles primarios, bordes nítidos de `1px`, tipografía `Barlow` para comandos y `JetBrains Mono` para lecturas técnicas.

### Buttons
- **Shape:** Esquinas técnicas contenidas (`4px` / `rounded`), altura mínima garantizada de `44px` (`min-h-[2.75rem]`) y borde sólido de `1px`.
- **Primary (`.telemetry-btn-primary`):** Fondo `--color-primary` (`#ffd23a` oscuro / `#0f3d6b` claro), tinta `--color-primary-ink` (`#0b0f14` / `#ffffff`), `Barlow` `700` `0.9375rem`, padding `0.625rem 1.25rem` (`10px 20px`), `gap: 0.5rem`.
- **Hover / Active / Focus:** Hover aplica `opacity: 0.92` y `translateY(-1px)` en `180ms var(--ease-out-expo)`; Active vuelve a `translateY(0)`; `:focus-visible` dibuja `outline: 2px solid var(--color-primary)` con `outline-offset: 3px`.
- **Secondary (`.telemetry-btn-secondary`):** Fondo `--color-surface`, borde `1px solid var(--color-border-strong)`, texto `--color-text`, `Barlow` `600` `0.9375rem`, padding `0.625rem 1.125rem` (`10px 18px`). En hover cambia el borde a `--color-primary` y el fondo a `--color-surface-elevated`.
- **Icon Actions (`ThemeToggle`, GitHub, menú móvil):** Cuadrados de `44×44px` (`w-11 h-11`), radio `4px`, fondo `--color-surface`, borde `1px solid var(--color-border)`, transición hacia borde y trazo `--color-primary`.

### Chips
- **Style (`.category-chip`):** Botones de filtro inmediato sobre la grilla de proyectos (`min-h-11`, padding `8px 14px`, radio `4px`, `Public Sans` `500` `0.875rem`). En reposo usan `--color-surface`, borde `--color-border` y texto `--color-text`.
- **State:** En hover refuerzan borde a `--color-border-strong`. En estado activo (`.active` y `aria-pressed="true"`) invierten a fondo `--color-primary`, tinta `--color-primary-ink` y borde `--color-primary`.

### Cards / Containers
- **Corner Style:** Radio técnico `6px` (`rounded-md`).
- **Background:** `--color-surface` (`#101721` oscuro / `#ffffff` claro).
- **Shadow Strategy:** Cero sombras en reposo y hover (ver *Elevation & Depth*).
- **Border:** `1px solid var(--color-border)` en tarjetas de proyecto y artículos (transición a `--color-border-strong` en hover); `1px solid var(--color-border-strong)` en bloques destacados de contacto y `Callout`.
- **Internal Padding:** `24px` (`p-6`) uniforme.
- **Anatomía de `ProjectCard`:** Titular `<h3>` + subtítulo a la izquierda y, solo en proyectos destacados, indicador vertical de espectro de 4 segmentos (`6px` de ancho, colores `--color-signal`, `--color-secondary`, `--color-ring`, `--color-energy`) a la derecha; tabla `<dl>` de 3 metadatos (`Especialidad`, `Periodo`, `Estado`) debajo del título con bordes superior e inferior `1px`; descripción en prosa; y franja inferior con stack en `.tabular-data` (máximo 4 etiquetas + contador `+N`) y enlaces con iconos SVG uniformes.

### Inputs / Fields
- **Copy Email Control (`#copy-email-btn`):** Campo interactivo de solo lectura (`min-h-11`, padding `8px 14px`, radio `4px`, fondo `--color-background`, borde `1px solid var(--color-border)`). Muestra la dirección en `JetBrains Mono` `0.75rem` a la izquierda y acción `Copiar` / `Copiado` en `--color-primary` con icono SVG a la derecha, anunciando el estado en vivo mediante `role="status" aria-live="polite"`. En hover refuerza el borde a `--color-primary`.

### Navigation
- **Desktop Header:** Barra fija (`sticky top-0 z-50`, altura `72px` / `4.5rem`), fondo translúcido `--color-header-bg` con `backdrop-blur-md` y borde inferior `1px solid var(--color-border)`. Izquierda: isotipo concéntrico SVG (`22×22px`) + nombre en `Barlow` `800` + divisor vertical e indicador de disponibilidad (`hidden lg:inline-flex`). Centro: 4 enlaces en español (`Inicio`, `Proyectos`, `Blog`, `Sobre mí`) con altura `44px`, radio `4px` y estado activo con `aria-current="page"`, texto `--color-primary`, fondo `--color-surface` y borde `--color-border-strong`. Derecha: enlace GitHub y `ThemeToggle`.
- **Mobile Drawer:** Botón hamburguesa `44×44px` bajo `768px`; abre panel flotante (`top-[4.75rem]`, `inset-x-4`, radio `6px`, borde `--color-border-strong`, `shadow-2xl`, animación `drawerReveal 200ms`) con cierre por botón, tecla `Escape`, clic fuera o cambio de viewport a escritorio, devolviendo el foco al disparador.

### Collider Event Display & Calorimeter Metrics (Signature Components)
- **Diagrama Concéntrico SVG (`Hero.astro`):** `viewBox="0 0 640 460"` flotando directamente sobre el vacío sin marco exterior. Contiene micro-trama circular (`#vacuum-dots`), ejes cartesianos de `1px`, 5 anillos concéntricos (`r=34, 70, 108, 142, 174`) con 12 marcas angulares cada 30°, 5 cuñas calorimétricas radiales en `--color-energy`, 4 trazas cúbicas Bézier con curvas fantasma discontinuas y núcleo central (`r=9` + `r=3.5` en `--color-signal`). Al seleccionar una pista (clic en botón, curva o etiqueta), la pista activa pasa a `opacity: 1`, `stroke-width: 3.25`, nodo `r=6` y halo `r=11`, mientras las inactivas bajan a `opacity: 0.26` y `stroke-width: 1.5` sin atenuar las etiquetas de texto.
- **Selector de Pistas + Readout en Vivo:** Panel de borde `1px` y radio `6px` con cabecera en rejilla capilar (`grid-cols-2 sm:grid-cols-4 gap-px bg-card-border`) de 4 botones `min-h-11` (`aria-pressed`) sobre una franja `aria-live="polite"` que actualiza título, resumen, código `TRK-0x`, categoría, stack y enlace `Abrir caso`.
- **Barras Calorimétricas:** Filas de 3 columnas (`valor tabular --color-primary` | carril `10px` de alto con relleno `--color-energy` según porcentaje real | descripción en `--color-text-muted`) separadas del bloque de acciones por un divisor `1px`.
- **Callout Técnico (`Callout.astro`):** Contenedor `rounded-md` sobre `--color-surface` con borde perimetral uniforme `1px solid var(--color-border-strong)` e icono SVG semántico de `20×20px` coloreado según variante (`info`: `--color-secondary`, `tip`: `--color-primary`, `warning`: `--color-energy`, `quote`: `--color-ring-text`).

## Do's and Don'ts

### Do:
- **Do** usar exclusivamente las variables CSS semánticas de `src/styles/global.css` (`--color-background`, `--color-surface`, `--color-primary`, `--color-secondary`, `--color-energy`, etc.) para que tanto el tema oscuro predeterminado como el claro de laboratorio cumplan WCAG AA sin código duplicado.
- **Do** mantener los metadatos de proyectos y artículos debajo de su titular (`<dl>` o línea secundaria) y respetar el uso estricto de `Barlow` para títulos/acciones, `Public Sans` para prosa y `JetBrains Mono` solo para datos tabulares y código.
- **Do** garantizar objetivos interactivos mínimos de `44×44px` (`min-h-11`), foco visible de `2px solid var(--color-primary)` con `outline-offset: 3px`, iconos SVG inline uniformes (`stroke-width="2"`) y degradación total bajo `prefers-reduced-motion: reduce`.
- **Do** separar jerarquía visual mediante capas tonales (`#0b0f14` → `#101721` → `#16202d` en oscuro; `#f3f6f9` → `#ffffff` → `#e7eef5` en claro) y retículas capilares de `1px` (`gap-px bg-card-border`).
- **Do** mantener la curva `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)` para cualquier transición de estado, apertura de panel o énfasis de traza SVG.

### Don't:
- **Don't** añadir kickers o eyebrows en mayúsculas sobre encabezados `<h1>`, `<h2>` o títulos de tarjetas.
- **Don't** introducir botones pill (`rounded-full`), botones 3D con sombras duras, texto con degradado (`bg-clip-text`), sombras en tarjetas en reposo ni bordes laterales decorativos (`border-l-4`) en callouts o tarjetas.
- **Don't** atenuar la opacidad de texto o etiquetas SVG (`<text>`) cuando se atenúan trazas inactivas; reducir opacidad en texto rompe el contraste WCAG AA.
- **Don't** emplear `JetBrains Mono` para párrafos narrativos, encabezados editoriales o botones de navegación general, ni cargar fuentes externas de Google Fonts en tiempo de ejecución (todas las familias deben servirse auto-hospedadas vía `@fontsource`).
- **Don't** incorporar efectos sonoros automáticos, métricas inventadas, testimonios ficticios ni elementos de la plantilla lúdica anterior (nubes, arcoíris o ilustraciones infantiles).
