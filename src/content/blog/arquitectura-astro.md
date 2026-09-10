---
title: Arquitectura de componentes escalables en Astro
excerpt: Cómo estructurar un proyecto Astro para maximizar la velocidad de carga, mantener cero JavaScript innecesario y asegurar una experiencia accesible.
date: 2025-02-10
readTime: 6 min de lectura
category: Frontend
---

# Arquitectura de componentes escalables en Astro

Astro se ha posicionado como uno de los frameworks más interesantes para la web moderna gracias a su enfoque en **cero JavaScript por defecto** y su **arquitectura de islas**.

## 1. El principio de las islas

A diferencia de las Single Page Applications (SPAs) tradicionales donde todo el árbol de componentes se envía como un bundle JavaScript al navegador, Astro genera HTML estático puro.

Solo cuando un componente requiere interactividad del cliente (como un menú móvil, un carrito o un buscador dinámico), especificamos una directiva `client:*`:

```astro
<!-- Solo carga JS cuando entra en el viewport -->
<SearchModal client:visible />
```

## 2. Separación de responsabilidades

Organizar las colecciones de contenido con esquemas tipados asegura que los errores de formato se detecten en tiempo de compilación y no en producción.

## Conclusión

Adoptar Astro permite centrarse en el contenido y la experiencia de usuario con métricas de rendimiento impecables.
