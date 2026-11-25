# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

1. **Reclutadores técnicos y hiring managers** evaluando a Diego Soto para roles remotos de Software Engineer (Backend, Linux e IoT). Llegan habitualmente desde LinkedIn o un CV, con poco tiempo (30–60 segundos en el primer escaneo) para validar experiencia real en producción y decidir si coordinan una entrevista.
2. **Clientes técnicos y responsables de ingeniería/operaciones** buscando resolver cuellos de botella en backend concurrente (Go), infraestructura Linux, automatización o telemetría IoT por proyecto o consultoría.

El sitio atiende a ambas audiencias en equilibrio 50/50.

## Product Purpose

Portafolio profesional y blog técnico de Diego Ignacio Soto (`soteiro.dev`, repositorio `portfolio-2`). Reúne casos de estudio de sistemas construidos y sostenidos en producción junto con artículos técnicos de ingeniería. El éxito de la portada se mide por lograr que un visitante valide rigor técnico en el primer recorrido y dé el paso de contacto directo por correo (`contacto@soteiro.dev`) o LinkedIn.

## Positioning

Ingeniería de sistemas orientada a producción en la intersección entre software backend y mundo físico: daemons concurrentes en Go con aislamiento a nivel de kernel (Linux Network Namespaces), hardening declarativo de servidores Linux (Ansible, iptables, SELinux) y pipelines de telemetría IoT a gran escala (+15M eventos/mes), complementado con paneles operativos en Angular cuando el sistema lo requiere.

## Operating Context

- Visitantes llegan desde LinkedIn, GitHub, CV o búsqueda orgánica (`soteiro.dev`), tanto desde escritorio en horario laboral como desde móvil.
- El contenido se redacta y versiona en Markdown local mediante Keystatic (`pnpm dev` → `/keystatic`), sin CMS expuesto en producción.
- El sitio se publica en Cloudflare Workers con páginas públicas prerenderizadas (`export const prerender = true`), sitemap, RSS y tarjetas Open Graph pregeneradas en Node.

## Capabilities and Constraints

- **Stack existente**: Astro 7, Tailwind CSS v4, `@astrojs/cloudflare`, `wrangler`, Keystatic local en `dev`.
- **Rutas activas**: `/` (portada), `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/404`, `/rss.xml`, `/robots.txt`, `/sitemap-index.xml`.
- **Idioma**: Español (`es-CL`) como idioma principal sin prefijo de ruta; estructura i18n preparada para inglés (`/en/*`) aún sin traducciones publicadas.
- **Curación de portada**: La portada se reserva para proyectos y casos de estudio técnicos; las reflexiones personales y artículos de opinión viven en `/blog`.
- **Indeciso explícitamente**: Fecha de lanzamiento de la versión en inglés (`/en/*`) y si el contacto futuro añadirá un endpoint de formulario backend o permanecerá con canales directos (`mailto:`, copiar correo y LinkedIn).

## Brand Commitments

- **Nombre y dominio**: Diego Soto — `soteiro.dev`.
- **Ubicación y disponibilidad**: Valdivia, Chile (Disponible para roles remotos y proyectos técnicos).
- **Canales reales**: `contacto@soteiro.dev`, `https://github.com/soteiro`, `https://www.linkedin.com/in/diego-ignacio-soto/`.
- **Dirección de marca confirmada**: El rediseño reemplaza la plantilla lúdica heredada de Josh W. Comeau (nubes y arcoíris sonoro) por una presencia sobria, técnica y editorial alineada con ingeniería de sistemas (Go, Linux, IoT).

## Evidence on Hand

- **Proyectos documentados (`src/content/projects/`)**:
  - `siphon-daemon-concurrente-en-go-con-linux-network-namespaces.md` — Daemon concurrente en Go con Linux Network Namespaces para sensores 3D Hella APS y gateways Milesight tras VPNs con IPs conflictivas (destacado).
  - `cassandra.md` — Sistema integral de comando personal con binario único en Go, SPA en Angular 22, PostgreSQL y Capacitor (destacado).
  - `server-hardening-ansible.md` — Playbook modular en Ansible para CentOS 9/10 Stream con iptables política DROP, hardening SSH, mitigación SYN flood, Fail2ban y SELinux.
  - `temply-iot.md` — Monitoreo IoT ambiental end-to-end con ESP32 (C++/PlatformIO), Hono en Cloudflare Workers, Astro y PostgreSQL/Prisma (demo y repo públicos).
- **Artículos técnicos (`src/content/blog/`)**:
  - `aislamiento-vpn-network-namespaces-go.md`
  - `hardening-servidores-linux-ansible.md`
  - `2-anos-en-desarollo-de-software.md` (reflexión personal; pertenece a `/blog`, no a portada).
- **Métricas reales documentadas en el repo (`src/data/portfolio.ts`, `src/pages/about.astro`)**: +15M eventos IoT mensuales, tablas PostgreSQL con +16M filas, recuperación de cumplimiento de SLA del 0% al 95.18%.
- **Activos gráficos existentes**: `src/assets/logo-portfolio.svg`, `public/images/avatar.png`, `public/favicon.ico`.
- **Ausencias que no se deben fabricar**: No existen testimonios de clientes, logos de empleadores autorizados, tarifas publicadas ni métricas distintas a las documentadas arriba.

## Product Principles

1. **La ingeniería real lidera desde el primer pantallazo**: Los casos de estudio en producción y resultados medibles deben ser evidentes en segundos, nunca ocultos bajo adorno de plantilla.
2. **Solo verdad verificable**: Mantener exclusivamente métricas, proyectos y capacidades reales documentadas; no inventar testimonios, clientes ni cifras.
3. **Portada enfocada en conversión técnica**: Reservar `/` para perfil, casos de estudio técnicos y contacto sin fricción; dejar notas personales en `/blog`.
4. **Cero fricción para contactar**: Correo directo, copia rápida y LinkedIn deben funcionar siempre sin depender de formularios rotos ni servicios externos no configurados.
5. **Sobriedad operativa y accesibilidad real**: Alto contraste en claro y oscuro, velocidad en edge, cero audio inesperado y control total del usuario en escritorio y móvil.

## Accessibility & Inclusion

- Cumplimiento mínimo WCAG AA en contraste de texto (≥4.5:1) y controles (≥3:1) tanto en tema claro como en tema oscuro (modo predeterminado actual).
- Navegación completa por teclado (`skip-link`, foco visible, cierre de menús con `Escape`), respeto a `prefers-reduced-motion` y áreas táctiles mínimas de 44×44px en móvil.
