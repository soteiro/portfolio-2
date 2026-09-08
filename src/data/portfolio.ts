export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
  year?: string;
}

export interface SkillCategory {
  name: string;
  slug: string;
  count: number;
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const portfolioData = {
  // Información personal / Personal info
  name: {
    first: "Diego Ignacio",
    initial: "DS",
    last: "Soto",
    display: "Soteiro"
  },
  role: "Desarrollador Full-Stack & UI Designer",
  tagline: "Construyendo experiencias web modernas, interfaces fluidas y software interactivo. ✨",
  bio: "Soy un desarrollador apasionado por crear aplicaciones web intuitivas, accesibles y de alto rendimiento. Me enfoco en el diseño de interacción, la arquitectura frontend limpia y los detalles visuales que hacen la diferencia.",
  location: "Tu Ciudad, País",
  status: "Disponible para nuevos proyectos y colaboraciones",
  avatar: "/images/avatar.png",
  
  // Redes sociales y contacto / Social links
  social: {
    github: "https://github.com/soteiro",
    // twitter: "https://twitter.com/tu-usuario",
    // bluesky: "https://bsky.app/profile/tu-usuario",
    linkedin: "https://linkedin.com/in/diego-ignacio-soto",
    email: "hola@tu-dominio.com",
    rss: "/rss.xml"
  },  

  // Proyectos / Projects
  projects: [
    {
      id: "plataforma-ecommerce",
      title: "Plataforma E-Commerce Moderna",
      subtitle: "Tienda online de alto rendimiento con carrito reactivo y pagos",
      description: "Una aplicación de comercio electrónico completa con catálogo dinámico, pasarela de pago segura, panel administrativo y puntuaciones Core Web Vitals cercanas a 100.",
      category: "Fullstack",
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      featured: true,
      demoUrl: "https://ejemplo.com/demo",
      githubUrl: "https://github.com/tu-usuario/proyecto-ecommerce",
      year: "2025"
    },
    {
      id: "design-system-ui",
      title: "Design System & UI Kit Accesible",
      subtitle: "Sistema de diseño multi-tema con soporte completo para WCAG 2.2",
      description: "Biblioteca de componentes de interfaz reutilizables con soporte integrado para modo claro/oscuro, navegación por teclado completa, animaciones fluidas y documentación interactiva.",
      category: "Frontend",
      tags: ["TypeScript", "CSS Moderno", "Storybook", "A11y"],
      featured: true,
      demoUrl: "https://ejemplo.com/design-system",
      githubUrl: "https://github.com/tu-usuario/design-system",
      year: "2024"
    },
    {
      id: "analytics-dashboard",
      title: "Dashboard de Analíticas en Tiempo Real",
      subtitle: "Visualización de datos con gráficos SVG y WebSockets",
      description: "Panel de control para monitorización de métricas de usuario, rendimiento de servidores y gráficos dinámicos interactivos con sincronización en vivo.",
      category: "Frontend",
      tags: ["Astro", "React", "SVG", "WebSockets"],
      featured: true,
      demoUrl: "https://ejemplo.com/analytics",
      githubUrl: "https://github.com/tu-usuario/dashboard",
      year: "2024"
    },
    {
      id: "color-contrast-tool",
      title: "Generador de Paletas & Contraste Accesible",
      subtitle: "Herramienta web para cálculo de ratios APCA y WCAG",
      description: "Aplicación interactiva que permite a diseñadores y desarrolladores generar escalas de colores armónicas, verificar contrastes en vivo y exportar variables CSS listas para producción.",
      category: "Herramientas",
      tags: ["JavaScript", "CSS Variables", "Color Science"],
      featured: false,
      demoUrl: "https://ejemplo.com/colors",
      githubUrl: "https://github.com/tu-usuario/color-tools",
      year: "2023"
    },
    {
      id: "task-manager-api",
      title: "API REST & Microservicios de Tareas",
      subtitle: "Backend escalable con autenticación JWT y base de datos relacional",
      description: "Servicio backend con arquitectura limpia, migraciones automatizadas, pruebas de integración y despliegue continuo con contenedores Docker.",
      category: "Backend",
      tags: ["Node.js", "PostgreSQL", "Docker", "REST API"],
      featured: false,
      demoUrl: "https://ejemplo.com/api-docs",
      githubUrl: "https://github.com/tu-usuario/task-api",
      year: "2023"
    }
  ] as Project[],

  // Categorías para filtrado / Filter categories
  categories: [
    { name: "Frontend", slug: "frontend", count: 8 },
    { name: "Fullstack", slug: "fullstack", count: 5 },
    { name: "Backend", slug: "backend", count: 4 },
    { name: "Herramientas", slug: "herramientas", count: 3 }
  ] as SkillCategory[],

  // Destacados de la barra lateral / Sidebar highlights
  popularHighlights: [
    {
      title: "Plataforma E-Commerce Moderna (Demo)",
      url: "https://ejemplo.com/demo",
      category: "Fullstack"
    },
    {
      title: "Design System & UI Kit Accesible",
      url: "https://ejemplo.com/design-system",
      category: "Frontend"
    },
    {
      title: "Dashboard de Analíticas en Tiempo Real",
      url: "https://ejemplo.com/analytics",
      category: "Frontend"
    },
    {
      title: "Guía de Optimización de Core Web Vitals",
      url: "/about",
      category: "Rendimiento"
    }
  ],

  // Artículos o casos de estudio / Articles or Case Studies
  articles: [
    {
      title: "Arquitectura de componentes escalables en Astro",
      slug: "arquitectura-astro",
      excerpt: "Cómo estructurar un proyecto Astro para maximizar la velocidad de carga, mantener cero JavaScript innecesario y asegurar una experiencia accesible.",
      date: "Feb 2025",
      readTime: "6 min de lectura",
      category: "Frontend"
    },
    {
      title: "Diseño de micro-interacciones con CSS moderno y Web Audio",
      slug: "micro-interacciones-css",
      excerpt: "Explorando cómo funciones de timing físicas y efectos sonoros sutiles pueden transformar una interfaz común en una experiencia memorable.",
      date: "Ene 2025",
      readTime: "8 min de lectura",
      category: "UI/UX"
    },
    {
      title: "Estrategias de estado global sin dependencias pesadas",
      slug: "estado-global-frontend",
      excerpt: "Comparativa de soluciones ligeras para compartir estado entre componentes cliente en arquitecturas de islas como Astro.",
      date: "Dic 2024",
      readTime: "5 min de lectura",
      category: "Fullstack"
    }
  ] as Article[],

  // Habilidades / Skills
  skills: {
    languages: ["TypeScript", "JavaScript", "HTML5", "CSS3 / Sass", "SQL", "Python"],
    frameworks: ["Astro", "React", "Next.js", "Node.js", "Tailwind CSS", "Express"],
    specialties: ["Diseño de Interacción (UI/UX)", "Arquitectura Frontend", "Accesibilidad Web (WCAG)", "Optimización de Rendimiento (CWV)", "Sistemas de Diseño"]
  }
};
