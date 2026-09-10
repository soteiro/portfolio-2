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
            { label: 'Frontend', value: 'Frontend' },
            { label: 'Fullstack', value: 'Fullstack' },
            { label: 'Backend', value: 'Backend' },
            { label: 'Herramientas', value: 'Herramientas' },
          ],
          defaultValue: 'Frontend',
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
            { label: 'Frontend', value: 'Frontend' },
            { label: 'Fullstack', value: 'Fullstack' },
            { label: 'Backend', value: 'Backend' },
            { label: 'UI/UX', value: 'UI/UX' },
            { label: 'Rendimiento', value: 'Rendimiento' },
          ],
          defaultValue: 'Frontend',
        }),
        content: fields.markdoc({
          label: 'Cuerpo del artículo (Markdown)',
          extension: 'md',
        }),
      },
    }),
  },
});
