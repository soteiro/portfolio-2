import { config, fields, collection } from '@keystatic/core';

// Almacenamiento en disco: el editor solo corre en local (`pnpm dev`) y escribe
// directamente en src/content/. La integración queda fuera del build, así que
// /keystatic no existe en el sitio desplegado (ver astro.config.mjs).
// Para editar desde producción habría que pasar a `kind: 'github'`; las
// credenciales necesarias están documentadas en .env.example.

export default config({
  storage: { kind: 'local' },
  collections: {
    projects: collection({
      label: 'Proyectos',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Título del proyecto' } }),
        subtitle: fields.text({ label: 'Subtítulo o descripción breve' }),
        description: fields.text({ label: 'Descripción de tarjeta', multiline: true }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Backend', value: 'Backend' },
            { label: 'IoT & Telemetría', value: 'IoT' },
            { label: 'DevOps & Infraestructura', value: 'DevOps' },
            { label: 'Fullstack', value: 'Fullstack' },
          ],
          defaultValue: 'Backend',
        }),
        tags: fields.array(fields.text({ label: 'Tecnología' }), {
          label: 'Tecnologías / Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        featured: fields.checkbox({ label: 'Proyecto destacado (Featured)', defaultValue: false }),
        demoUrl: fields.url({
          label: 'URL de Demo en vivo',
          validation: { isRequired: false },
        }),
        githubUrl: fields.url({
          label: 'URL del repositorio GitHub',
          validation: { isRequired: false },
        }),
        year: fields.text({ label: 'Año de realización', defaultValue: '2025' }),
        updated: fields.date({
          label: 'Última actualización',
          description:
            'Solo si editaste el caso de estudio a fondo. Alimenta lastmod del sitemap y hace que Google vuelva a rastrear la ficha.',
          validation: { isRequired: false },
        }),
        seoTitle: fields.text({
          label: 'Título para buscadores (SEO)',
          description:
            'Opcional. Máximo ~60 caracteres, con lo importante al principio. Si lo dejás vacío se usa el título del proyecto.',
          validation: { isRequired: false },
        }),
        seoDescription: fields.text({
          label: 'Meta descripción (SEO)',
          description:
            'Opcional, 120-155 caracteres. Es el texto que aparece bajo el título en Google. Si lo dejás vacío se usa la descripción de tarjeta.',
          multiline: true,
          validation: { isRequired: false },
        }),
        ogImage: fields.text({
          label: 'Imagen social propia (ruta)',
          description:
            'Opcional, por ejemplo /images/mi-proyecto.png. Vacío = se genera automáticamente una tarjeta con el título.',
          validation: { isRequired: false },
        }),
        draft: fields.checkbox({
          label: 'Borrador (no se publica)',
          description: 'Queda fuera del sitio, del sitemap y del RSS, sin borrar el archivo.',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Descripción detallada / Caso de estudio (Markdown)',
          extension: 'md',
        }),
      },
    }),

    blog: collection({
      label: 'Artículos de Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Título del artículo' } }),
        excerpt: fields.text({ label: 'Extracto / Resumen', multiline: true }),
        date: fields.date({
          label: 'Fecha de publicación',
          defaultValue: { kind: 'today' },
        }),
        readTime: fields.text({
          label: 'Tiempo estimado de lectura (ej. 6 min de lectura)',
          defaultValue: '5 min de lectura',
        }),
        category: fields.select({
          label: 'Categoría del artículo',
          options: [
            { label: 'Backend', value: 'Backend' },
            { label: 'IoT & Telemetría', value: 'IoT & Telemetría' },
            { label: 'DevOps & Linux', value: 'DevOps & Linux' },
            { label: 'Bases de Datos', value: 'Bases de Datos' },
            { label: 'Arquitectura', value: 'Arquitectura' },
          ],
          defaultValue: 'Backend',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags / Términos técnicos',
          description:
            'Términos concretos del artículo (Go, PostgreSQL, iptables...). Se usan en el JSON-LD y en el RSS.',
          itemLabel: (props) => props.value || 'Tag',
        }),
        updated: fields.date({
          label: 'Última actualización',
          description:
            'Solo para revisiones de fondo. Google muestra esta fecha en el resultado y prioriza contenido fresco.',
          validation: { isRequired: false },
        }),
        seoTitle: fields.text({
          label: 'Título para buscadores (SEO)',
          description:
            'Opcional. Máximo ~60 caracteres, con la palabra clave al principio. Vacío = se usa el título del artículo.',
          validation: { isRequired: false },
        }),
        seoDescription: fields.text({
          label: 'Meta descripción (SEO)',
          description:
            'Opcional, 120-155 caracteres. Es el texto bajo el título en Google. Vacío = se usa el extracto.',
          multiline: true,
          validation: { isRequired: false },
        }),
        ogImage: fields.text({
          label: 'Imagen social propia (ruta)',
          description:
            'Opcional. Vacío = se genera automáticamente una tarjeta con el título del artículo.',
          validation: { isRequired: false },
        }),
        draft: fields.checkbox({
          label: 'Borrador (no se publica)',
          description: 'Queda fuera del sitio, del sitemap y del RSS, sin borrar el archivo.',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Cuerpo del artículo (Markdown)',
          extension: 'md',
        }),
      },
    }),
  },
});
