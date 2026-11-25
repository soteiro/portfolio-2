---
target: homepage (src/pages/index.astro)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro"
target_fingerprint: "sha256:8d54063984316f7b99878825af10ee628ddd6f4eed6e3b93a391165afd31bed9"
target_path: /home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro
timestamp: 2026-11-25T21-02-10Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: e5af0b47-520a-44e7-9cd6-f0875628dd29 · B: 66a833e1-e508-4ffc-aa4b-a63e25b69619)

# Critique de Diseño — Homepage (`src/pages/index.astro`)

## Design Health Score

*(Superficie evaluada en modo Experience/Persuade — portafolio personal y landing técnica. Las heurísticas 7 y 10 se marcan `n/a`; el máximo aplicable se renormaliza a **32**).*

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | **3** | Navegación activa, readout en vivo, contador y estado de copia funcionan bien. Brechas: trazas/etiquetas SVG sin feedback en `:hover`; `mailto:` del Hero sin confirmación; filtro no persiste en URL. |
| 2 | Match System / Real World | **2** | Métricas positivas en barras rojas (`#ff4d4d`) con `+15M/mes` (`92%`) más ancho que `+16M` (`84%`) en `Hero.astro:90-94`; sección de blog titulada "Casos de estudio técnicos" chocando con "Ver caso" de proyectos; icono de diana en lugar de sobre en CTA de correo del Hero. |
| 3 | User Control and Freedom | **3** | Salida clara al inicio, reset de filtro vacío con foco, cierre de drawer móvil y cambio de tema reversible. Brechas: `#mobile-drawer` sin backdrop ni trampa de foco; volver atrás pierde filtro; `mailto:` en Hero sin copia inline bloquea webmail. |
| 4 | Consistency and Standards | **2** | Orden distinto entre Hero (`Siphon` 1.º) y grilla (`Cassandra` 1.º); categorías de filtro ≠ etiquetas en tarjetas; 3 diseños de CTA de correo; hover de tarjeta completa sin stretched-link; `src/lib/og.ts` aún usa `Inter`; encabezados mono en `about.astro` y `404.astro`. |
| 5 | Error Prevention | **3** | Sin formularios riesgosos y con fallback de portapapeles. Brechas: `mailto:` único en Hero propicia clics muertos; filtrado acoplado a coincidencia literal entre `slug` y `category`. |
| 6 | Recognition Rather Than Recall | **3** | Navegación clara en español. Brechas: `TRK-01..04` no aparecen en `ProjectCard.astro`; `demoUrl` de Temply oculta; en móvil (`<1024px`) desaparecen ubicación y disponibilidad del primer pantallazo. |
| 7 | Flexibility and Efficiency | **n/a** | Superficie de portafolio editorial y persuasión sin flujos repetitivos ni edición masiva. |
| 8 | Aesthetic and Minimalist Design | **2** | Superficies planas, tipografía y contraste muy logrados, pero los mismos 4 proyectos se repiten 3–4 veces seguidas, hay 5 chips de filtro para 4 ítems, `LinkedIn` salta huérfano en 1440px, `Estado: Sistema destacado` duplica el espectro vertical y móvil llega a `6,749px`. |
| 9 | Error Recovery | **3** | Recuperación clara en fallo de portapapeles, estado vacío de filtro y `/404`. Brecha menor: sin respaldo si `mailto:` no responde en Hero. |
| 10 | Help and Documentation | **n/a** | Portafolio informativo autoexplicativo. |
| **Total** | | **21/32** | **Acceptable / Aceptable (65.6% — +7 puntos y 0 P0; base visual sólida que pide poda estructural y honestidad en telemetría)** |

## Design Specificity Verdict

**LLM assessment**: Genuinamente autoral y reconocible (ya no es intercambiable por categoría). El sistema Collider Event Display comunica autoridad técnica real en Go, Linux e IoT y borró la herencia lúdica anterior. Quedan dos fricciones: telemetría simulada (`+15M/mes` 92% > `+16M` 84% en rojo `#ff4d4d` y cuñas SVG estáticas) y redundancia de portafolio (repetir 4 sistemas 3–4 veces con 5 chips de filtro).

**Deterministic scan**: `impeccable detect --json src` terminó con código `2` (17 hallazgos: 0 `error`, 1 `warning`, 16 `advisory`; cero slop/a11y/contraste). Hallazgo real: `src/lib/og.ts:120` usa `Inter` heredado (no declarado en `DESIGN.md`). Los 16 `design-system-font-size` (`0.9375rem`, `1.0625rem`, `0.6875rem`) son falsos positivos de UI (están documentados en prosa de `DESIGN.md`) que revelan desincronización del frontmatter YAML de `DESIGN.md` (y confirman que `Hero.astro:323` usa `11px` con `opacity-80`).

**Visual overlays**: No hay herramienta mutable de automatización de navegador expuesta en esta sesión; overlays `[Human]` omitidos.

## Overall Impression

Salto importante (+7 puntos, 0 P0). Para pasar a Bueno/Excelente (30+/32) toca podar la repetición del catálogo, hacer 100% honesta la telemetría del Hero y llevar la fricción cero de contacto (`Copiar correo` + disponibilidad móvil) arriba del pliegue.

## What's Working

1. Identidad visual propia y disciplinada (`global.css`, `Hero.astro`).
2. Bloque de contacto de alta conversión (`Sidebar.astro:8-82`).
3. Cimientos técnicos, dual-theme y accesibilidad base (`Layout.astro`, `Hero.astro:276-291`).

## Priority Issues

### 1. [P1] Redundancia 3×/4× de los mismos 4 proyectos, filtro de 5 chips innecesario y orden invertido
- **What**: Los 4 proyectos se repiten en diagrama + readout, franja inferior (`Hero.astro:368-390`) y grilla con 5 chips de filtro (`index.astro:89-108`); Hero prioriza `Siphon` pero grilla pone primero a `Cassandra`.
- **Why it matters**: Genera 5/8 fallos de carga cognitiva, móvil de `6,749px` y desplaza el proyecto flagship Backend/Linux/IoT.
- **Fix**: Eliminar franja duplicada, retirar filtro en portada mientras haya ≤6 proyectos, unificar orden poniendo `Siphon` #1 y mostrar `TRK-01..04` en `ProjectCard`.
- **Suggested command**: `/impeccable distill`

### 2. [P1] Barras calorimétricas con porcentajes arbitrarios en rojo de alerta y cuñas SVG estáticas
- **What**: `Hero.astro:90-94,176-186` grafica `+15M/mes` al 92% y `+16M` al 84% en `#ff4d4d` y cuñas SVG estáticas al cambiar de pista.
- **Why it matters**: Escalas inventadas en rojo alerta contradicen el rigor verificable ante perfiles técnicos.
- **Fix**: Reemplazar por 3 KPI tabulares limpios con divisores `1px`, barra real solo para `95.18%` (en verde/cian) y cuñas vinculadas a la pista activa o atenuadas en `--color-ring`.
- **Suggested command**: `/impeccable clarify`

### 3. [P1] CTA principal del Hero con fricción (`mailto:` sin copia inline), botón huérfano en 1440px y disponibilidad oculta en móvil
- **What**: `Hero.astro:144-173` usa `mailto:` con icono de diana sin copia rápida y rompe `LinkedIn` a segunda línea en 1440px; `Header.astro:41` oculta la disponibilidad en `<1024px`.
- **Why it matters**: Clics muertos en webmail de escritorio y ausencia de señal remota arriba del pliegue en móvil.
- **Fix**: Una fila en Hero (`Escribir correo` con sobre + `Copiar correo` inline + `Proyectos`) y disponibilidad compacta visible en `<1024px`.
- **Suggested command**: `/impeccable layout`

### 4. [P2] Affordance engañosa en tarjetas, objetivos táctiles `<44px`, `demoUrl` oculta y etiquetas SVG diminutas en móvil
- **What**: Hover de tarjeta completa sin stretched-link; enlaces de `ProjectCard`/`Footer`/`index.astro:145` bajo `44px`; `demoUrl` de Temply oculta; wrap desalineado en `Cassandra`; rótulos SVG a ~7.4px en `390px`.
- **Why it matters**: Clics muertos, errores táctiles en móvil, pérdida de evidencia de demo en vivo e ilegibilidad en teléfono.
- **Fix**: Stretched-link en tarjetas, `min-h-11` en todos los enlaces, `ml-auto` + `demoUrl` en `ProjectCard`, y ajustar `viewBox`/ocultar rótulos SVG en `<640px`.
- **Suggested command**: `/impeccable adapt`

### 5. [P2] Derivas frente a `DESIGN.md` (`og.ts` con `Inter`, frontmatter YAML y taxonomía/encabezados)
- **What**: `src/lib/og.ts:120` usa `Inter`; frontmatter YAML de `DESIGN.md` omite `0.6875rem`/`0.9375rem`/`1.0625rem`; `index.astro:141` llama "Casos de estudio técnicos" al blog; `Hero.astro:323` usa `opacity-80` en 11px; `about.astro`/`404.astro` usan mono uppercase en encabezados; `Estado` duplica el espectro en `ProjectCard`.
- **Why it matters**: Desalinea OG cards, especificación formal y taxonomía interna.
- **Fix**: Renombrar blog a "Artículos técnicos", simplificar `<dl>` a 2 columnas, quitar `opacity-80`, corregir encabezados en `about.astro`/`404.astro`, migrar `og.ts` a `Barlow`/`Public Sans` y sincronizar YAML de `DESIGN.md`.
- **Suggested command**: `/impeccable polish`

## Cognitive Load & Emotional Journey

- Carga cognitiva: ALTA (5/8 fallos). Excesos: 5 chips de filtro para 4 proyectos y 16 controles simultáneos en la zona del Hero.
- Viaje emocional: Entrada fuerte → fricción en barras rojas (`15M > 16M`) y repetición del catálogo → cierre muy confiable en `Sidebar.astro`.

## Persona Red Flags

- **Jordan**: CTA `mailto:` con icono de diana ambiguo; colisión "Casos de estudio" vs "Ver caso"; barras rojas leídas como alerta; repetición de los mismos 4 nombres.
- **Riley**: `15M` (92%) > `16M` (84%) y cuñas estáticas; clic muerto en tarjetas; `demoUrl` ausente; desalineación en wrap de `Cassandra`; orden/nombres inconsistentes; pérdida de filtro al volver atrás.
- **Casey**: Disponibilidad oculta en `<1024px`; rótulos SVG ~7.4px en `390px`; scroll `6,749px`; objetivos táctiles `min-h-9` (36px).
- **Sam**: `#mobile-drawer` sin backdrop ni trampa de foco; `TRK-01..04` en 11px con `opacity-80`.

## Minor Observations

- `global.css:100`: separar `color-scheme: light` / `dark` por tema.
- `Sidebar.astro:49`: `min-h-4` deja hueco vacío antes de copiar.
- `ThemeToggle.astro:10`: `aria-pressed` estático en SSR.
- `/projects` sin filtros vs `/` con filtros; `about.astro` sin botón `Copiar`; `Footer.astro` ("Blog técnico") vs `Header.astro` ("Blog"); `src/data/highlights.ts` sin uso.

## Questions to Consider

1. ¿Qué pasaría si eliminaras la franja inferior del Hero y los 5 chips de filtro en portada?
2. ¿Las barras y cuñas calorimétricas son telemetría real o decoración?
3. ¿Por qué tu proyecto #1 en "Proyectos en producción" es `Cassandra` y no `Siphon`?
