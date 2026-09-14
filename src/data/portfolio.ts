export interface SkillCategory {
  name: string;
  slug: string;
  count: number;
}

export interface Project {
  id?: string;
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

export const portfolioData = {
  // Información personal / Personal info
  name: {
    first: "Diego Ignacio",
    initial: "DS",
    last: "Soto",
    display: "Diego Soto"
  },
  role: "Software Engineer | Backend, Linux & IoT Systems",
  tagline: "Resolviendo problemas técnicos en sistemas backend con Go, infraestructura Linux y telemetría de alta escala.",
  bio: "Ingeniero de Software enfocado en backend y sistemas: daemons concurrentes en Go con aislamiento de red a nivel de kernel, pipelines de telemetría IoT (+15M eventos/mes), optimización de PostgreSQL e infraestructura Linux. Para interfaces y dashboards utilizo Angular.",
  location: "Valdivia, Chile (Disponible para Remoto / Híbrido)",
  status: "Disponible para roles Remoto ",
  avatar: "/images/avatar.png",
  
  // Redes sociales y contacto / Social links
  social: {
    github: "https://github.com/soteiro",
    linkedin: "https://www.linkedin.com/in/diego-ignacio-soto/",
    email: "diego_sarq@hotmail.com",
    website: "https://diegoignaciosoto.tech",
    rss: "/rss.xml"
  },  

  // Categorías para filtrado / Filter categories
  categories: [
    { name: "Backend", slug: "backend", count: 3 },
    { name: "IoT & Telemetría", slug: "iot", count: 2 },
    { name: "DevOps & Infra", slug: "devops", count: 1 },
    { name: "Fullstack", slug: "fullstack", count: 1 }
  ] as SkillCategory[],

  // Habilidades / Skills
  skills: {
    languages: ["Go", "TypeScript", "SQL (PostgreSQL / SQLite)", "Bash / Shell", "C++ (ESP32)", "Python"],
    frameworks: ["Angular", "Astro", "Docker", "Ansible", "Node.js / Bun", "Hono", "PlatformIO"],
    specialties: [
      "Sistemas Backend Concurrentes & Daemons (Go)",
      "Linux Sysadmin, Namespaces & Hardening con SELinux",
      "Telemetría Masiva & Protocolos IoT (MQTT, EMQX, LoRaWAN)",
      "Optimización de Bases de Datos & Time-Series (+15M filas)",
      "Interfaces y Paneles de Control (Angular con Signals)",
      "Automatización con Ansible & CI/CD (GitHub Actions)"
    ]
  }
};
