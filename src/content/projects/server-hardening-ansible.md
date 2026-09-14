---
title: Server Provisioning & Security Hardening Playbook
subtitle: >-
  Automatización de infraestructura Baremetal y securización avanzada en CentOS
  Stream con Ansible
description: >-
  Playbook modular de Ansible para aprovisionamiento Baremetal/VPS en CentOS
  9/10 Stream. Implementa política DROP por defecto en Iptables, hardening SSH,
  mitigación SYN flood a nivel de Kernel, Fail2ban y sandbox contra scripts
  maliciosos.
category: DevOps
tags:
  - Ansible
  - Linux
  - CentOS Stream
  - Iptables
  - SELinux
  - Fail2ban
  - Nginx
  - Security
featured: true
year: '2025'
---
## Contexto & Objetivos

El despliegue de servidores Linux en producción para sistemas de telemetría y APIs expuestas a Internet exige un nivel riguroso de estandarización y seguridad defensiva. Este proyecto resuelve la necesidad de levantar nuevos nodos Baremetal y VPS de forma 100% reproducible, declarativa y endurecida contra vectores de ataque habituales.

## Medidas de Hardening Implementadas

El playbook (`serverConfig`) automatiza la configuración sobre **CentOS 9 y 10 Stream** cubriendo múltiples capas de defensa en profundidad:

1. **Firewall Perimetral con Iptables:** Política `DROP` por defecto en las cadenas `INPUT` y `FORWARD`. Solo se habilitan de forma explícita los puertos necesarios (SSH no estándar, HTTP/HTTPS) con limitación de tasa (*rate limiting*) para prevenir escaneos de puertos y ataques de denegación de servicio.
1. **Hardening de Acceso SSH:**
   - Desactivación completa del inicio de sesión como usuario `root`.
   - Bloqueo estricto de autenticación por contraseña (únicamente claves criptográficas Ed25519/RSA autorizadas).
   - Cambio de puerto estándar y configuración de límites de intentos con Fail2ban.
1. **Endurecimiento de Kernel (`sysctl`):**
   - Habilitación de `tcp_syncookies` y ajuste de colas `tcp_max_syn_backlog` para mitigar ataques de **SYN Flood**.
   - Desactivación de redirecciones ICMP y protección contra falsificación de direcciones IP (*reverse path filtering*).
1. **Seguridad en Cadena de Suministro (Node.js / Bun):**
   - Configuración global de gestores de paquetes con el flag `ignore-scripts` para impedir la ejecución involuntaria de binarios y scripts arbitrarios en post-instalación de dependencias.
1. **Aislamiento con SELinux & Systemd:**
   - Mantenimiento del modo `Enforcing` en SELinux con políticas afinadas (`httpd_can_network_connect`).
   - Generación automática de unidades y timers de Systemd para rotación de logs y supervisión de servicios.

## Resultados

- Tiempo de aprovisionamiento de un servidor completamente securizado y listo para producción reducido de varias horas a menos de **5 minutos**.
- Cero configuraciones erróneas manuales gracias a la idempotencia total de las tareas de Ansible.
