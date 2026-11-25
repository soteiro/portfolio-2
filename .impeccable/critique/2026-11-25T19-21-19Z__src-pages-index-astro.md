---
target: homepage (src/pages/index.astro)
total_score: 14
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:/home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro"
target_fingerprint: "sha256:f1e84d239b2a3b13985d13bf66fa7b5fabc8086450bb29a0f5f184569d2d37ee"
target_path: /home/soteiro/Escritorio/proyectos/portfolio-2/src/pages/index.astro
timestamp: 2026-11-25T19-21-19Z
slug: src-pages-index-astro
---
Method: dual-agent (A: 8d65b81c-5ff5-4aeb-826b-ab19d3ca8512 · B: 94041d27-331a-4509-8609-f020e09a276e)

# Critique de Diseño — Homepage (`src/pages/index.astro`)

## Design Health Score

*(Superficie evaluada en modo Experience/Persuade — portafolio personal y landing de búsqueda laboral. Las heurísticas 7 y 10 se marcan `n/a`; el máximo aplicable se renormaliza a **32**).*

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | **2** | El filtro de categorías (`Sidebar.astro:104-128`) oculta tarjetas pero deja congelado el contador `{projects.length} proyectos` (`index.astro:69`) y omite `aria-pressed`; `#contact` responde con un `alert()` de desarrollo; `#mobile-menu-btn` no cambia de estado ni expone `aria-expanded`. |
| 2 | Match System / Real World | **2** | Mezcla de inglés en navegación/footer (`Projects`, `About`, `Explore`, `Featured Work`) con español en el cuerpo y voseo en `404.astro`; metáfora cielo/nubes/arcoíris desconectada del dominio Go/Linux/IoT; el primer artículo en portada imprime Markdown crudo (`[*The Senior Engineer Death Spiral*](https://...)`) y typo (`desarollo`). |
| 3 | User Control and Freedom | **2** | `Rainbow.astro` reproduce audio Web Audio por defecto sin control para mutear (`SoundToggle` comentado en `Header.astro:66`); `touch-none` bloquea el scroll táctil en móvil; el drawer móvil no cierra con `Escape` ni clic fuera. |
| 4 | Consistency and Standards | **1** | Clases inválidas de Tailwind v4 (`bg-gradient-b`, `max-w-1100px`, `w-1.125rem`, `h-28.5rem`, `w-90px`, `translate-x-100px`) dejan el footer sin fondo y desalinean header/footer/logo; contraste fallido en modo oscuro (`text-white` sobre `--color-primary` `#809fff` ≈ 2.45:1 en `Sidebar.astro:16-24,89` y `404.astro`); `#contact` en la home es un formulario roto mientras `about.astro:108-128` sí ofrece `mailto:` y LinkedIn; `Projects` enlaza a `/` dejando `/projects` inaccesible desde el menú. |
| 5 | Error Prevention | **2** | `#contact` induce a enviar un email que se descarta en un `alert()`; los tags `#Go`/`#Linux` en `ProjectCard.astro:36-40` imitan el estilo exacto de los chips interactivos del filtro (falsa affordance); los enlaces de categorías en `Footer.astro:199-208` apuntan a `/#skills` sin aplicar filtro. |
| 6 | Recognition Rather Than Recall | **1** | Sin `<h1>` ni titular visible en el Hero (`Hero.astro:16-39`): solo un párrafo gris (`text-text-muted`) sin nombre ni propuesta de valor destacada; `#contact` pide un email con una flecha sin etiqueta (ambiguo entre newsletter y contacto laboral); el correo y LinkedIn no son visibles en header, hero ni `#contact`. |
| 7 | Flexibility and Efficiency | **n/a** | Superficie de portafolio/landing de presentación; atajos de teclado o acciones por lote no aplican a evaluar un candidato y contactarlo. |
| 8 | Aesthetic and Minimalist Design | **2** | Un arcoíris interactivo de 460×260px y ondas de nubes monopolizan el above-the-fold sin comunicar nada del trabajo de Diego; `-mt-40` (`index.astro:64`) comprime el inicio de proyectos sobre el hero; los 2 proyectos destacados se repiten tres veces en la misma página (listado, Sidebar "Destacados" y Footer "Highlights"); 6–8 tags por tarjeta. |
| 9 | Error Recovery | **2** | `404.astro` resuelve bien la recuperación con rutas claras; pero al fallar `#contact` (`Sidebar.astro:78`), el `alert()` no entrega un correo alternativo y un filtro sin resultados dejaría la lista vacía sin botón de reseteo. |
| 10 | Help and Documentation | **n/a** | Portafolio personal que debe ser autoexplicativo sin requerir centro de ayuda ni documentación de uso. |
| **Total** | | **14/32** | **Poor / Deficiente (43.8% — experiencia central rota en identidad inicial y conversión)** |

## Design Specificity Verdict

**LLM assessment**: No es simplemente intercambiable — es un clon literal y a medio desmantelar del blog de Josh W. Comeau, en contradicción directa con el perfil de Diego. El código lo delata en comentarios y clases (`Josh W. Comeau Design Tokens` en `global.css:65`, `.josh-button`, `.josh-card`, `CloudWavesTop`, `Rainbow`). Esa estética lúdica (nubes, arcoíris neón que suena como xilófono, botones 3D "boopables") encaja con un educador creativo de CSS/React, pero frente a un Ingeniero de Software en Go, Linux Network Namespaces, hardening SELinux/iptables y telemetría IoT (+15M eventos/mes) genera disonancia inmediata. Al intentar adaptarla se comentaron piezas estructurales sin reemplazo —el `<h1>` visible, la pill de disponibilidad, la mascota y el `SoundToggle`— dejando una sensación de plantilla inacabada.

**Deterministic scan**: `impeccable detect --json src` terminó con código `2` y reportó 7 hallazgos (`0 error`, `1 warning`, `6 advisory`; `0` directos en `src/pages/index.astro` aislado):
- En archivos renderizados en la homepage (6 `advisory` — `bounce-easing`):
  - `src/components/Header.astro:101` (`cubic-bezier(0.17, 0.67, 0.39, 1.2)` en `#mobile-drawer`): hallazgo real — overshoot elástico en un drawer estructural de navegación que también anima `opacity`; reemplazar por `ease-out` exponencial.
  - `src/components/ThemeToggle.astro:18,26,30,43` y `src/styles/global.css:315`: falsos positivos de contexto / baja prioridad como micro-interacciones heredadas, aunque confirman la herencia Comeau y revelan `transition-all` innecesario en `ThemeToggle.astro:30,43`.
- Fuera de la homepage (1 `warning` — `side-tab`):
  - `src/components/Callout.astro:26` (`border-l-4`, usado solo en `about.astro:49,99`): fuera de alcance de la homepage y parcialmente falso positivo al ser una admonición `<aside>`.

**Visual overlays**: No hay herramienta de automatización de navegador expuesta en esta sesión; se omitieron la inspección en navegador en vivo y los overlays `[Human]`. No existe un overlay visible para el usuario.

## Overall Impression

El contenido de ingeniería es genuinamente bueno (daemons en Go con Linux Network Namespaces, hardening Ansible/iptables, pipelines IoT de +15M eventos/mes), pero el envoltorio sabotea esa autoridad desde el primer segundo y rompe la conversión en el último. La mayor oportunidad es devolverle a la homepage una identidad sobria y propia de ingeniería de sistemas con un `<h1>` contundente, evidencia técnica inmediata y un contacto real funcional.

## What's Working

1. Sustancia técnica real en los casos de estudio (`src/content/projects/*.md`, `ProjectCard.astro`).
2. Base técnica sólida de SEO, FOUC y accesibilidad estructural (`Layout.astro:55-107`, `404.astro`).
3. Tokens semánticos light/dark bien separados (`src/styles/global.css:5-205`).

## Priority Issues

### 1. [P0] Formulario de contacto roto con `alert()` de plantilla y canales de contacto ausentes en la homepage
- **What**: El CTA "Contactar" (`Hero.astro:50`) lleva a `#contact` (`Sidebar.astro:72-99`), donde el único control es un `<form>` de 1 campo que dispara `alert('¡Gracias por tu interés! Configura tu servicio de formularios...')`. Ni `contacto@soteiro.dev` ni LinkedIn aparecen en Header, Hero ni `#contact`.
- **Why it matters**: Bloquea por completo la conversión laboral justo en el pico de intención y proyecta descuido técnico.
- **Fix**: Reemplazar el `<form>` ficticio en `Sidebar.astro:72-99` por una tarjeta de contacto real (botón `mailto:contacto@soteiro.dev` + "Copiar correo" inline, LinkedIn, GitHub y disponibilidad) o conectarlo a un endpoint real con campo de mensaje y estados inline.
- **Suggested command**: `/impeccable harden`

### 2. [P0] Hero sin `<h1>` visible, identidad visual prestada de Josh Comeau y audio Web Audio sin forma de silenciar
- **What**: En `Hero.astro:10-39`, el `<h1>` visible y la pill de disponibilidad están comentados; arriba del pliegue solo hay un párrafo gris y `Rainbow.astro` (460×260px), que reproduce sonido por defecto sin `SoundToggle` y usa `touch-none` bloqueando el scroll en móvil.
- **Why it matters**: No comunica nombre ni rol en los primeros 3 segundos, contradice el perfil Backend/Linux/IoT y dispara audio inesperado sin mute.
- **Fix**: Restaurar `<h1>` visible de alto contraste en `Hero.astro`, reactivar disponibilidad + 2–3 métricas reales de producción, retirar `Rainbow.astro` y construir una estética propia de ingeniería de sistemas respetando `prefers-reduced-motion`.
- **Suggested command**: `/impeccable shape`

### 3. [P1] Clases inválidas de Tailwind v4 y fallos de contraste WCAG AA en modo oscuro
- **What**: Clases inválidas en Tailwind v4 (`bg-gradient-b`, `max-w-1100px`, `w-1.125rem`, `mx-1px`, `left-2px`, `left-6px`, `h-28.5rem`, `w-90px`, `translate-x-100px`) dejan el footer sin fondo y desalinean header/footer/logo. En dark mode (defecto), `text-white` sobre `--color-primary` `#809fff` en `Sidebar.astro:16,24,89` y `404.astro` falla WCAG AA (~2.45:1).
- **Why it matters**: Rompe alineación y fondo del footer y hace ilegibles controles primarios en el tema por defecto.
- **Fix**: Cambiar `bg-gradient-b` a `bg-linear-to-b`, usar `.site-container` en Header/Footer, corregir valores arbitrarios con corchetes y aplicar `dark:text-page` sobre `bg-primary`.
- **Suggested command**: `/impeccable audit`

### 4. [P1] Inconsistencia de idioma, navegación engañosa y Markdown crudo en el primer artículo de portada
- **What**: Header y Footer en inglés sobre sitio en español (+ voseo en `404.astro`); `Projects` apunta a `/` dejando `/projects` huérfana; categorías del footer no filtran; `2-anos-en-desarollo-de-software.md` muestra Markdown crudo en `excerpt`, typo `desarollo` y abre contradiciendo la autoridad técnica del Hero.
- **Why it matters**: Transmite falta de rigor y debilita la evaluación inicial de un recruiter.
- **Fix**: Unificar todo a español, apuntar "Proyectos" a `/projects`, limpiar `excerpt` a texto plano, corregir typo y curar portada para casos de estudio técnicos.
- **Suggested command**: `/impeccable clarify`

### 5. [P2] Carga cognitiva alta (6/8 fallos), redundancia de proyectos y ruido de filtros/tags para solo 4 proyectos
- **What**: 5 chips de filtro para 4 proyectos (contador `4 proyectos` congelado), 2 destacados repetidos en Sidebar y Footer, y 6–8 chips monospace por `ProjectCard` que imitan botones.
- **Why it matters**: Dispara la carga cognitiva (6/8 fallos) y hace parecer escaso un catálogo de 4 proyectos sólidos.
- **Fix**: Eliminar listas duplicadas de destacados, reenfocar sidebar a stack/disponibilidad/contacto, reducir tags de tarjeta a 3–4 con estilo no interactivo y sincronizar contador + `aria-pressed` si se mantienen filtros.
- **Suggested command**: `/impeccable distill`

## Cognitive Load & Emotional Journey

- Carga cognitiva: ALTA (6/8 fallos). Puntos de decisión >4 opciones: Header (5 enlaces + 2 iconos), filtros (5 chips), `ProjectCard` (6–8 tags), Footer (16 enlaces).
- Viaje emocional (Peak-End): Entrada sin titular sobre arcoíris sonoro → ascenso con proyectos reales → valle con Markdown crudo/tono del primer artículo → pico negativo en conversión (`alert()` de plantilla sobre footer sin fondo).

## Persona Red Flags

- **Jordan (First-Timer / Recruiter)**: Sin `<h1>` visible en `Hero.astro`; navegación en inglés sobre contenido en español; tags de `ProjectCard` con falsa affordance de botón; `#contact` ambiguo con `alert()` técnico y sin email visible.
- **Riley (Stress Tester / Tech Lead)**: `#contact` falso vs `mailto:` en `/about`; contador `4 proyectos` congelado al filtrar; `Projects` apunta a `/` y categorías del footer no filtran; audio Web Audio sin mute y posible acumulación de `requestAnimationFrame` en `Rainbow.astro`; Markdown crudo, typo `desarollo` y `bg-gradient-b`.
- **Casey (Mobile User)**: `touch-none` en `#rainbow-wrapper` bloquea scroll táctil; botones bajo 44×44px (`w-9 h-9` en Header/ThemeToggle, `w-8 h-8` en submit de `#contact`); drawer móvil sin X ni cierre al tocar fuera; contacto enterrado al final del scroll.

## Minor Observations

- `Header.astro:101`: reemplazar easing con overshoot en `#mobile-drawer` por `ease-out` exponencial; acotar `transition-all` en `ThemeToggle.astro`.
- `prefers-reduced-motion` ignorado en `Rainbow.astro`, `global.css:368-415` y `Header.astro:19,28`.
- ARIA incompleto (`aria-expanded`/`aria-controls` en `#mobile-menu-btn`, `type="button"`/`aria-pressed` en filtros, `aria-label` genérico en `ProjectCard.astro:83`).
- `getHighlights()` (`highlights.ts:16-19`) no excluye `draft`; `index.astro` no ordena proyectos y `projects/index.astro:18` produce `NaN` con `"2024 – 2025"`; `portfolio.ts` tiene `count` desactualizados.
- Chevrons invisibles en táctil (`ProjectCard.astro:50-74`); RSS en `Footer.astro:119` sin `rel="noopener noreferrer"`; triple analítica corriendo en `dev` (`Layout.astro:65-103`); `SoundToggle.astro` sin usar; espacio antes del punto en `about.astro:105`.

## Questions to Consider

1. Si quitaras todo el texto de esta portada y se la mostraras a un CTO, ¿adivinaría que construís daemons en Go, namespaces Linux y telemetría IoT, o pensaría que vendés un curso de animaciones CSS?
2. ¿Qué pasaría si la homepage asumiera un único trabajo sin distracciones: conseguir una entrevista técnica en 60 segundos?
3. ¿Debería una reflexión personal vulnerable ("recién nacido en el mundo del software") abrir la sección de artículos en tu landing laboral justo debajo del pitch de +15M eventos/mes, o conviene reservar la portada para casos de estudio técnicos?
