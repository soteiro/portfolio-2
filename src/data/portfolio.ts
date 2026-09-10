export interface SkillCategory {
  name: string;
  slug: string;
  count: number;
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
    twitter: "https://twitter.com/tu-usuario",
    bluesky: "https://bsky.app/profile/tu-usuario",
    linkedin: "https://linkedin.com/in/diego-ignacio-soto",
    email: "hola@tu-dominio.com",
    rss: "/rss.xml"
  },  

  // Categorías para filtrado / Filter categories
  categories: [
    { name: "Frontend", slug: "frontend", count: 8 },
    { name: "Fullstack", slug: "fullstack", count: 5 },
    { name: "Backend", slug: "backend", count: 4 },
    { name: "Herramientas", slug: "herramientas", count: 3 }
  ] as SkillCategory[],

  // Habilidades / Skills
  skills: {
    languages: ["TypeScript", "JavaScript", "HTML5", "CSS3 / Sass", "SQL", "Python"],
    frameworks: ["Astro", "React", "Next.js", "Node.js", "Tailwind CSS", "Express"],
    specialties: ["Diseño de Interacción (UI/UX)", "Arquitectura Frontend", "Accesibilidad Web (WCAG)", "Optimización de Rendimiento (CWV)", "Sistemas de Diseño"]
  }
};
