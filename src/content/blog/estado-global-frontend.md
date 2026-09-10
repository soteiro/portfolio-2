---
title: Estrategias de estado global sin dependencias pesadas
excerpt: Comparativa de soluciones ligeras para compartir estado entre componentes cliente en arquitecturas de islas como Astro.
date: 2024-12-15
readTime: 5 min de lectura
category: Fullstack
---

# Estrategias de estado global sin dependencias pesadas

En arquitecturas basadas en islas como Astro, donde diferentes componentes interactivos pueden estar escritos en distintos frameworks (o simplemente coexistir en diferentes partes del DOM), coordinar el estado sin arrastrar librerías de 40kb es esencial.

## Nanostores: La opción minimalista

Nanostores pesa menos de 1KB y funciona con React, Vue, Svelte o Vanilla JS por igual:

```typescript
import { atom } from 'nanostores';

export const $cartCount = atom(0);
```

Cualquier componente puede suscribirse sin acoplar la aplicación a un framework específico.
