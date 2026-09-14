# 🎨 Josh W. Comeau Style Portfolio Template (Astro)

Una plantilla de portafolio inspirada en el diseño visual de **[Josh W. Comeau](https://www.joshwcomeau.com/)**, desarrollada con **Astro 5**.

## ✨ Características

- 🌈 **Diseño Whimsical**: Estética alegre, tipografía cuidada y micro-interacciones suaves.
- ☁️ **Olas Orgánicas de Nubes**: Transiciones multi-capa SVG idénticas a las de Josh W. Comeau entre el cielo y el contenido principal.
- 🌓 **Modo Claro / Oscuro**:
  - Transición suave de color mediante variables CSS HSL.
  - Icono animado de Sol / Luna con máscaras y rotación de rayos.
  - Script inline anti-FOUC (sin parpadeos al recargar) persistente en `localStorage`.
- 🔊 **Efectos de Sonido Integrados**:
  - Botón de altavoz interactivo con animación *wiggle*.
  - Sonidos sintetizados en tiempo real con Web Audio API (sin archivos de audio externos pesados).
- 🏷️ **Filtro Interactivo de Proyectos**:
  - Filtra proyectos por categorías/tecnologías en tiempo real.
  - Tarjetas con títulos subrayados al hover y chevrons animados en cascada (`>>>`).
- ✍️ **Fácil Personalización**:
  - Todos tus datos (nombre, bio, proyectos, enlaces sociales, categorías) centralizados en un único archivo: `src/data/portfolio.ts`.
- 📱 **Totalmente Responsive & Accesible**:
  - Menú drawer adaptado para móviles, navegación por teclado y contraste accesible.

---

## 📁 Estructura del Proyecto

```text
src/
├── components/
│   ├── CloudWavesTop.astro     # Olas multi-capa superiores
│   ├── CloudWavesBottom.astro  # Olas invertidas del footer
│   ├── Header.astro            # Logo animado, navegación y botones
│   ├── Hero.astro              # Saludo, bio, botones 3D y tarjeta de mascota
│   ├── ProjectCard.astro       # Tarjeta de proyecto con animación de flechas
│   ├── Sidebar.astro           # Filtros por categoría y destacados
│   ├── ThemeToggle.astro       # Conmutador Sol/Luna
│   ├── SoundToggle.astro       # Conmutador de efectos de sonido (Web Audio)
│   ├── Callout.astro           # Cajas de notas / consejos / advertencias
│   └── Footer.astro            # Pie de página con enlaces y redes
├── data/
│   └── portfolio.ts            # 👈 EDITA TUS DATOS AQUÍ
├── layouts/
│   └── Layout.astro            # Layout principal con script anti-FOUC
├── pages/
│   ├── index.astro             # Portada principal
│   └── about.astro             # Página Sobre mí
└── styles/
    └── global.css              # Tokens de diseño, colores HSL y botones 3D
```

---

## 🚀 Cómo personalizar tu portafolio

1. **Edita tu información personal**:
   Abre [`src/data/portfolio.ts`](file:///home/soteiro/Escritorio/proyectos/portfolio-2/src/data/portfolio.ts) y cambia:
   - Tu nombre, rol, bio y ubicación.
   - Enlaces a tus redes (GitHub, LinkedIn, BlueSky/Twitter, email).
   - Tus proyectos en `projects`: título, descripción, etiquetas, demoUrl y githubUrl.
   - Tus categorías en `categories`.

2. **Añade tus propias páginas**:
   Puedes crear nuevas páginas dentro de `src/pages/` usando el componente `<Layout>`.

---

## 🧞 Comandos de Desarrollo

```sh
# Iniciar servidor en segundo plano
astro dev --background

# Ver estado del servidor
astro dev status

# Detener servidor
astro dev stop

# Compilar para producción
astro build
```

---

## 🚀 Despliegue (Cloudflare Workers)

El adaptador de Cloudflare **no** despliega con el `wrangler.jsonc` de la raíz.
Ese archivo solo aporta los ajustes propios (nombre del Worker, flags de
compatibilidad, binding de KV); el config real —con `main` y `assets`— lo
genera el build en `dist/server/wrangler.json`. Por eso `wrangler deploy` a
secas falla con *«Missing entry-point to Worker script or to assets directory»*:
hay que pasarle ese archivo.

```sh
# Compila y despliega en un paso
pnpm run deploy
```

En **Cloudflare Workers Builds**, configurar los dos campos por separado:

| Campo          | Valor                                          |
| -------------- | ---------------------------------------------- |
| Build command  | `pnpm run build`                               |
| Deploy command | `npx wrangler deploy -c dist/server/wrangler.json` |

Sin *build command* el pipeline salta directo al deploy, no existe `dist/` y
falla con el mismo error.

### Variables de entorno

Las de SEO y analítica (`PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` y demás) van como
variables del Worker. Están documentadas en `.env.example`; todas son
opcionales y, sin valor, el tag correspondiente simplemente no se emite.
