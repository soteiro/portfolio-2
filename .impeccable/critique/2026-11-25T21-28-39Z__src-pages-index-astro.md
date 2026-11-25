---
target: homepage (src/pages/index.astro)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro"
target_fingerprint: "sha256:5ff6647984177914fbd99f0302b0495920f2004c45b27e63caa20319d0631bcf"
target_path: /home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro
timestamp: 2026-11-25T21-28-39Z
slug: src-pages-index-astro
---
Method: dual-agent (A: 6d4c04ba-0b55-4212-b6bd-f6efc15e5672 · B: 6a7dea9d-986f-4f7a-8120-46a9931e7521)

# Critique de Diseño — Homepage (`src/pages/index.astro`)

## Design Health Score

*(Superficie evaluada en modo Experience/Persuade — portafolio personal y landing técnica. Las heurísticas 7 y 10 se marcan `n/a`; el máximo aplicable se renormaliza a **32**).*

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | **3** | Feedback sólido (`aria-current`, `aria-live`, halo/arco reactivo). Brechas: pestaña activa del selector sin borde estructural distintivo; `#hero-copy-status` con `empty:hidden` causa salto vertical. |
| 2 | Match System / Real World | **3** | Español técnico preciso y métricas reales. Brechas: barra vertical de 4 colores en `ProjectCard` y `TRK-01..04` sin leyenda; en móvil `<640px`, SVG sin etiquetas desconectado del selector 2×2. |
| 3 | User Control and Freedom | **3** | Navegación sticky limpia, drawer móvil con `Escape`/backdrop/trampa de foco y `ThemeToggle` reversible. Brechas: `#mobile-drawer` sin `max-h`/`overflow-y-auto` ni bloqueo de scroll en *landscape*; *stretched-link* impide seleccionar texto en tarjetas. |
| 4 | Consistency and Standards | **2** | Cian marca stack en Hero readout pero especialidad en `ProjectCard`; `Copiar correo` oculta dirección en Hero/`/about` vs visible en Sidebar; Header escritorio (GitHub) vs cajón móvil (LinkedIn); `Abrir proyecto` vs `Ver proyecto`; `bg-status-ok` decorativo en `ProjectCard:43`. |
| 5 | Error Prevention | **3** | Fallback de portapapeles, iconos SVG consistentes y objetivos ≥44px. Brechas: curvas SVG clicables (`1.6px`–`3px`) sin área invisible de captura; `Índice de proyectos` lleva a los mismos 4 proyectos sin filtros. |
| 6 | Recognition Rather Than Recall | **3** | Navegación clara y contadores explícitos. Brechas: `contacto@soteiro.dev` y LinkedIn no visibles *above the fold*; en móvil, curvas SVG sin rótulos ni vínculo de color con `TRK-01..04`. |
| 7 | Flexibility and Efficiency | **n/a** | Portafolio editorial/persuasivo sin flujos repetitivos ni operaciones por lote. |
| 8 | Aesthetic and Minimalist Design | **3** | Contención visual y planimetría `1px` muy logradas. Brechas: middot huérfano (`TRK-01 · Backend ·`) en Hero readout; altura móvil `6,440px`; hueco de ~180px bajo el segundo artículo en escritorio. |
| 9 | Error Recovery | **3** | `404.astro` claro y fallback `execCommand` al copiar. Menor: `404.astro:21` antepone `404 —` al titular. |
| 10 | Help and Documentation | **n/a** | Superficie autoexplicativa. |
| **Total** | | **23/32** | **Good / Bueno (71.9% — 0 P0, 2/8 carga cognitiva y 0 hallazgos en detector)** |

## Design Specificity Verdict

**LLM assessment**: Genuinamente diseñado para este producto (Authored — con fugas puntuales de consistencia). El lenguaje Collider Event Display pertenece de forma inequívoca a un ingeniero de sistemas Go/Linux/IoT. Pierde filo solo en tres detalles: SVG móvil sin rótulos ni vínculo cromático, inversión de rol del cian entre Hero readout y `ProjectCard`, y `/projects` repitiendo los mismos 4 proyectos sin filtros.

**Deterministic scan**: `impeccable detect --json src` y `src/pages/index.astro` devolvieron código `0` y `[]` (0 hallazgos, incluso con `--no-config`). Nota del CLI: archivos `.astro`/`.css`/`.ts` se escanean por regex (sin reglas DOM de página renderizada).

**Visual overlays**: No hay herramienta mutable de automatización de navegador expuesta en esta sesión; overlays `[Human]` omitidos.

## Overall Impression

Cruza a **Bueno (23/32 · 72%)** con 0 P0, 0 hallazgos de detector y carga cognitiva reducida a 2/8. Faltan ajustes quirúrgicos (middot huérfano, vínculo SVG móvil, email/LinkedIn *above the fold*, scroll en drawer *landscape* y semántica de color) para alcanzar Excelente.

## What's Working

1. Dirección artística genuina y disciplinada (*Collider Event Display*, fuentes auto-hospedadas, planimetría `1px`).
2. Accesibilidad real (`skip-link`, foco 2px, táctiles ≥44px, `prefers-reduced-motion`, trampa de foco en drawer).
3. Prueba técnica honesta y curación editorial (`+15M/mes`, `+16M`, `95.18%` real, blog separado y contacto sin fricción).

## Priority Issues

### 1. [P1] Fricción de conversión *above the fold* y redundancia en `Índice de proyectos`
- **What**: `Escribir correo` y `Copiar correo` no muestran `contacto@soteiro.dev` antes del clic; LinkedIn está ausente en el primer pantallazo; `Índice de proyectos` lleva a los mismos 4 proyectos sin filtros.
- **Why it matters**: Reclutadores en webmail o LinkedIn no ven el canal arriba y `Índice de proyectos` crea un falso rastro.
- **Fix**: Exponer LinkedIn en Header/Hero, mostrar `contacto@soteiro.dev` o reservar altura en `#hero-copy-status`, y retirar `Índice de proyectos` o agregar filtros reales en `/projects`.
- **Suggested command**: `/impeccable distill`

### 2. [P1] Defectos tipográficos, móviles y de interacción en el *Collider Event Display* del Hero
- **What**: Middot huérfano (`TRK-01 · Backend ·`); SVG sin etiquetas ni vínculo cromático en `<640px` + KPIs en 1 columna; curvas SVG clicables de `1.6px` sin trazo transparente dentro de `<svg role="img">` y pestaña activa sutil en modo claro.
- **Why it matters**: Contradice el rigor instrumental en la pieza protagonista y dificulta interacción en móvil/puntero.
- **Fix**: Separar `TRK-01 · Backend` y stack en dos líneas sin middot; añadir punto de color + `border-t-2` en `TRK-01..04`, códigos `01`–`04` en móvil y KPIs `grid-cols-2`; añadir `<path stroke="transparent" stroke-width="18">`, `aria-hidden="true"` en SVG y `tablist`/`tab`.
- **Suggested command**: `/impeccable adapt`

### 3. [P2] Inconsistencia semántica de color, espectro sin leyenda y microcopy divergente
- **What**: Cian cambia de rol entre Hero readout (stack) y `ProjectCard` (especialidad); barra de 4 colores en 3/4 tarjetas sin leyenda usando `bg-status-ok`; `Abrir proyecto` vs `Ver proyecto`.
- **Why it matters**: Rompe la coherencia instrumental del sistema de diseño.
- **Fix**: Unificar especialidad en `text-secondary` y stack en `text-text-muted`, limpiar/reservar la insignia de destacado a los 2 flagship con `bg-energy`, unificar microcopy y extraer `<CopyEmailControl />`.
- **Suggested command**: `/impeccable clarify`

### 4. [P2] Cajón móvil recortado en orientación *landscape* y sin bloqueo de scroll
- **What**: `#mobile-drawer` (`Header.astro:121`) tiene `overflow-hidden` sin `max-h`/`overflow-y-auto` y no bloquea scroll del `body`.
- **Why it matters**: En móvil horizontal o zoom 200%, los CTAs de contacto al pie del menú quedan inaccesibles.
- **Fix**: Añadir `max-h-[calc(100dvh-5.75rem)] overflow-y-auto overscroll-contain` y bloquear/restaurar `body` scroll al abrir/cerrar.
- **Suggested command**: `/impeccable harden`

### 5. [P3] Desbalance vertical en Sección 2 de escritorio y peso redundante de `Stack en producción`
- **What**: En `desktop.png`, los 2 artículos terminan ~180px por encima de `Sidebar.astro`, dejando espacio vacío junto a `Stack en producción`.
- **Why it matters**: Desequilibra el cierre en escritorio y suma ~220px al móvil.
- **Fix**: Equilibrar columnas moviendo `Stack en producción` a una franja horizontal compacta o enlazando a `/about`.
- **Suggested command**: `/impeccable layout`

## Cognitive Load & Emotional Journey

- Carga cognitiva: MODERADA-BAJA (2/8 fallos — *One thing at a time* y *Working memory*).
- Viaje emocional: Entrada fuerte en escritorio → fricción leve por middot/cian/índice redundante → cierre sólido en contacto y footer.

## Persona Red Flags

- **Jordan**: Barra de 4 colores y `TRK-01..04` sin leyenda; `contacto@soteiro.dev` oculto y LinkedIn ausente arriba; `404 —` técnico en 404.
- **Riley**: Falso rastro en `Índice de proyectos`; middot huérfano; inversión de cian; drawer cortado en *landscape*; curvas SVG `1.6px`; salto vertical y mensaje de copia persistente.
- **Casey**: SVG ~260px sin rótulos ni vínculo de color en 390px; `Proyectos ↓` huérfano y KPIs en 1 columna (`6,440px`).
- **Sam**: `<svg role="img">` con `<g>` clicables sin teclado; *stretched-link* bloquea selección de texto; pestaña activa sutil en claro.

## Minor Observations

- Unificar `(+15M filas)` en `portfolio.ts:59` con `+16M` de Hero/`/about`.
- Usar `<time datetime>` en tarjetas de artículos de portada (`index.astro:135`).
- `Feed RSS` en `Footer.astro:119` es interno pero usa `target="_blank"` y flecha externa.
- Limpiar texto de `#hero-copy-status` / `#copy-email-status` tras 2.5s.
- Referenciar `/about` junto a la métrica `95.18%`.

## Questions to Consider

1. ¿Quitamos `Índice de proyectos →` de la portada o convertimos `/projects` en un archivo técnico filtrable real?
2. ¿Exponemos `contacto@soteiro.dev` visible y LinkedIn arriba del pliegue para cerrar la conversión sin scroll?
3. Con `23/32` (Bueno, 0 P0, 0 hallazgos), ¿aplicamos una última pasada quirúrgica antes de guardar en Cassandra y commitear, o ya lo dejamos listo para publicar?
