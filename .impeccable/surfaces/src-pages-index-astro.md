---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/layouts/Layout.astro","src/styles/global.css","src/components/Header.astro","src/components/Hero.astro","src/components/Footer.astro","src/components/ProjectCard.astro","src/components/Sidebar.astro"]
---

# Surface Brief — Homepage (`src/pages/index.astro`)

- **Scope**: `src/pages/index.astro` y sistema compartido del sitio (`Layout.astro`, `global.css`, `Header.astro`, `Hero.astro`, `ProjectCard.astro`, `Sidebar.astro`, `Footer.astro`, `/projects`, `/blog`, `/about`, `/404`).
- **Visitor mode**: `experience` (con conversión técnica directa para reclutadores y clientes 50/50).
- **Build path**: `code` (confirmado en `.impeccable/config.json`).
- **Tema**: Oscuro por defecto (`#0B0F14` vacío mate) con selector oscuro/claro (`ThemeToggle` hacia una variante clara de laboratorio de alto contraste).
- **Prueba real**: `+15M eventos IoT/mes`, `+16M filas PostgreSQL`, `SLA 0% → 95.18%`, 4 proyectos reales (`Siphon`, `Server Provisioning & Security Hardening`, `Cassandra`, `Temply`) y 2 artículos técnicos en portada (reflexión personal queda en `/blog`).

## Direction contract

- **THESIS**: Un portafolio de ingeniería de sistemas operado como un *Collider Event Display* de telemetría real: los 4 sistemas de Diego irradian como trazas seleccionables desde un núcleo Go/Linux/IoT, rechazando tanto la plantilla lúdica de nubes/arcoíris heredada de Josh Comeau como el cliché genérico de terminal verde hacker o tarjetas iguales en gris.
- **OWN-WORLD**: Fondo vacío mate `#0B0F14`, superficies acero `#111822` con divisores finos `#223244` de `1px`, anillos concéntricos en azul acero `#3A5A7A`, traza/acción primaria en amarillo señal `#FFD23A`, traza secundaria en cian `#35D0FF`, barras calorimétricas de impacto real en rojo energía `#FF4D4D`, tinta `#E8EEF5` / `#A7B3C2` (más variante clara de laboratorio `#F4F6F8` / `#0F1722` con azul acero profundo y contraste WCAG AA). Tipografía display técnica geométrica (`Barlow` auto-hospedada), cuerpo sans limpio (`Public Sans` auto-hospedada) y `JetBrains Mono` solo para datos tabulares y código. Sin botones 3D pill, sin texto degradado, sin `border-l-4` decorativos, sin audio.
- **STORY**: En menos de 10 segundos el reclutador o cliente identifica nombre, rol (Backend, Linux e IoT), disponibilidad remota desde Valdivia, 3 métricas reales de producción en barras calorimétricas y los 4 sistemas en el diagrama; selecciona una traza o tarjeta para inspeccionar el caso técnico y contacta sin fricción por `mailto:`, copia de correo o LinkedIn.
- **FIRST VIEWPORT**: Barra superior fija con marca `Diego Soto` + estado `Valdivia, CL · Disponible remoto`, 4 enlaces en español (`Inicio`, `Proyectos`, `Blog`, `Sobre mí`), GitHub y selector de tema. Debajo, Hero asimétrico en 2 columnas (`~42%` / `~58%` en escritorio): izquierda con `<h1>` monumental (*"Sistemas backend, Linux y telemetría IoT."* con contraste acero en el tramo técnico), bio directa, acciones primarias (`contacto@soteiro.dev`, `LinkedIn`, `GitHub`) y 3 barras calorimétricas (`+15M/mes`, `95.18%`, `+16M`); derecha con sección transversal concéntrica interactiva SVG donde seleccionar cualquier traza (clic o teclado) aísla esa pista, atenúa las demás y muestra su ficha rápida + enlace al caso de estudio. Debajo del pliegue: franja de índice rápido de los 4 sistemas, grilla de casos de estudio + 2 artículos técnicos y bloque directo de contacto.
- **FORM**: `scientific-notation-particle-detector-event-display` (challenger competitivo elegido por el usuario en el tablero, boceto `.impeccable/mocks/decision/challenger-event-display.html`), `seed:6485b88a1a41fafb`.
- **FINISH**: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
