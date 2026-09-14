---
title: Siphon — Daemon Concurrente en Go con Linux Network Namespaces
subtitle: >-
  Automatización de conexiones VPN aisladas y polling concurrente de sensores
  industriales detrás de firewalls
description: >-
  Daemon multi-sitio desarrollado en Go que encapsula túneles VPN en Linux
  Network Namespaces aislados para consultar sensores 3D Hella APS y gateways
  Milesight tras firewalls corporativos, erradicando caídas de telemetría a 0%.
category: Backend
tags:
  - Go
  - Linux Namespaces
  - VPN
  - SQLite
  - Hella APS-90
  - Milesight UG56
  - Concurrency
  - Grafana
featured: true
year: '2026'
---
## El Desafío de Ingeniería

En despliegues de telemetría IoT en recintos industriales y de misión crítica, los sensores estereoscópicos de conteo de personas (Hella APS-90) y gateways LoRaWAN (Milesight UG56) residen en subredes locales protegidas por firewalls corporativos estrictos.

Acceder a estos dispositivos requería establecer túneles VPN (OpenVPN / OpenConnect) simultáneos hacia diferentes clientes. Esto generaba dos graves problemas operativos en el servidor central:

1. **Conflicto de Rangos IP:** Múltiples clientes utilizaban el mismo rango de red privada (e.g. `192.168.1.0/24`), provocando colisiones de enrutamiento y envenenamiento de tablas de rutas en el host.
1. **Caídas de Conexión Silenciosas:** Interrupciones intermitentes en las VPNs causaban pérdida irreparable de paquetes de telemetría y bloqueaban los hilos de sondeo.

## La Solución Técnica

Diseñé y desarrollé **Siphon**, un daemon de alto rendimiento escrito en Go que aísla cada conexión cliente a nivel de kernel mediante **Linux Network Namespaces** (`netns`):

- **Aislamiento por Namespace de Red:** Cada túnel VPN corre dentro de su propio namespace de Linux aislado (`ip netns exec client-vpn ...`), con su propia tabla de enrutamiento virtual e interfaces de red separadas. El host principal nunca ve alterada su tabla de rutas global.
- **Polling Concurrente con Workers en Go:** Un pool de goroutines orquestado mediante contextos y selectores ejecuta peticiones HTTP y TCP seguras dentro del namespace correspondiente, leyendo métricas de sensores 3D Hella y gateways Milesight.
- **Persistencia Local Transaccional (SQLite):** Ante micro-cortes o congestión de la red corporativa, Siphon persiste las lecturas en una base de datos local SQLite con transacciones WAL (Write-Ahead Logging). Una vez restablecida la conectividad, un worker en segundo plano reconcilia y despacha los datos pendientes.

## Resultados e Impacto

- **0% de caídas de recolección:** La telemetría crítica de ocupación y conteo dejó de perder eventos por problemas de enrutamiento.
- **Cero interferencia en el host:** Permitió escalar de 1 a decenas de conexiones VPN concurrentes sobre una sola máquina sin riesgo de desconfigurar la red global.
- **Alta eficiencia de recursos:** Consumo predecible de CPU y memoria bajo cargas continuas de polling 24/7.
- Observabilidad del estado de sensores, que permite recuperación rápida y/o aviso al cliente manteniendo la fiabilidad del sistema.
