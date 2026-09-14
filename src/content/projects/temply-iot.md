---
title: "Temply — Monitoreo IoT Ambiental End-to-End"
subtitle: "Captura y visualización serverless en tiempo real con firmware ESP32, Hono en Cloudflare Workers y Astro"
description: "Solución IoT completa: desde la medición física con microcontroladores ESP32 programados en C++, pasando por ingestión ultrarrápida en Edge con Hono sobre Cloudflare Workers, hasta un panel web liviano en Astro."
category: "IoT"
tags:
  - "ESP32"
  - "C++"
  - "PlatformIO"
  - "Hono"
  - "Cloudflare Workers"
  - "Astro"
  - "PostgreSQL"
  - "Prisma"
featured: false
demoUrl: "https://temply4432.netlify.app"
githubUrl: "https://github.com/soteiro/iot-temp-2"
year: "2024 – 2025"
---

## Visión General

**Temply** es una plataforma de telemetría IoT ambiental de arquitectura completa (*End-to-End*), diseñada para monitorear variables críticas como temperatura y humedad en tiempo real con latencia mínima y coste de infraestructura prácticamente nulo.

Abarca el espectro completo de la ingeniería electrónica y de software: diseño y programación de firmware embebido en microcontrolador, ingestión serverless en el Edge de Cloudflare, persistencia de series temporales y visualización interactiva.

## Arquitectura de la Solución

1. **Capa Embebida (ESP32 / C++ / PlatformIO):**
   - Firmware modular que realiza muestreo continuo de sensores ambientales con control de rebotes y filtrado de ruido.
   - Algoritmo de reconexión automática a WiFi con backoff exponencial.
   - Mecanismo de autenticación mediante API Keys únicas firmadas criptográficamente por dispositivo.
2. **Capa de Ingesta en Edge (Hono & Cloudflare Workers):**
   - API de ingestión serverless ultraligera construida con **Hono**, desplegada en la red distribuida de Cloudflare.
   - Tiempo de respuesta de ingestión inferior a 15ms a nivel global.
   - Validación estricta de esquemas de datos entrantes antes del volcado a la base de datos relacional.
3. **Capa de Persistencia (PostgreSQL & Prisma):**
   - Almacenamiento normalizado de lecturas temporales con índices particionados para consultas rápidas por dispositivo y ventana de tiempo.
4. **Capa de Presentación (Astro & Tailwind CSS):**
   - Panel web estático y liviano generado con Astro, optimizado para visualización de telemetría sin sobrecarga de frameworks pesados de cliente.

## Puntos Destacados

- Separación limpia de responsabilidades entre el hardware y los servicios en la nube.
- Cero consumo de servidor en espera gracias al modelo 100% serverless en el Edge.
- Demostración funcional en vivo disponible con métricas simuladas y lecturas reales.
