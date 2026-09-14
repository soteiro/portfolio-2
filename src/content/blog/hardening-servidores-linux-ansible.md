---
title: "Hardening de Servidores Linux con Ansible: Política DROP por Defecto y Mitigación SYN Flood"
excerpt: "Estándares defensivos para CentOS Stream: cómo proteger instancias expuestas a Internet mediante Iptables restrictivo, parámetros sysctl de kernel y aislamiento de dependencias."
date: 2025-12-10
readTime: "8 min de lectura"
category: "DevOps & Linux"
---

## Seguridad desde el Primer Minuto

Levantar un servidor Baremetal o una instancia VPS con la configuración por defecto de las distribuciones modernas deja expuestos múltiples vectores de riesgo: puertos abiertos innecesarios, passwords débiles en SSH, configuraciones permisivas del kernel y vulnerabilidades introducidas por gestores de paquetes.

En este artículo repasamos los principios esenciales aplicados en nuestro playbook de automatización con **Ansible** para **CentOS 9 y 10 Stream**.

## 1. Regla de Oro: Política DROP por Defecto en Firewall

Muchos administradores confían en herramientas de alto nivel (`ufw` o `firewalld`), pero en entornos de alta concurrencia y telemetría es preferible contar con reglas de `iptables` explícitas, auditables e inmutables.

El principio fundacional es: **todo paquete entrante es descartado a menos que exista una regla explícita que lo permita**.

```bash
# Política por defecto: DROP
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Permitir tráfico local (loopback)
iptables -A INPUT -i lo -j ACCEPT

# Permitir conexiones ya establecidas y relacionadas
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Permitir SSH en puerto personalizado con limitación de tasa
iptables -A INPUT -p tcp --dport 2222 -m conntrack --ctstate NEW -m recent --set
iptables -A INPUT -p tcp --dport 2222 -m conntrack --ctstate NEW -m recent --update --seconds 60 --hitcount 4 -j DROP
iptables -A INPUT -p tcp --dport 2222 -j ACCEPT
```

Con estas directivas, si un atacante intenta un escaneo de puertos o un ataque de fuerza bruta sobre el puerto SSH, el firewall descarta los paquetes silenciosamente sin responder con `ICMP Port Unreachable`, ralentizando drásticamente la actividad del escáner.

## 2. Ajustes de Kernel (`sysctl`) contra SYN Floods

El ataque clásico de denegación de servicio por **SYN Flood** intenta saturar la cola de conexiones a medio abrir del kernel (*half-open connections*). Ajustamos `/etc/sysctl.d/99-security.conf` mediante Ansible con estos valores de endurecimiento:

```ini
# Activar SYN Cookies cuando la cola de backlog se sature
net.ipv4.tcp_syncookies = 1

# Aumentar la cola de conexiones TCP pendientes
net.ipv4.tcp_max_syn_backlog = 4096

# Reducir el tiempo de espera de paquetes SYN-ACK huérfanos
net.ipv4.tcp_synack_retries = 2

# Desactivar redirecciones ICMP (evitar envenenamiento de rutas)
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0

# Habilitar Reverse Path Filtering (prevención de IP Spoofing)
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
```

## 3. SSH Hardening: Desterrando Contraseñas y Root

El acceso remoto debe ser inviolable. En la plantilla Ansible de `/etc/ssh/sshd_config.d/01-hardening.conf`:

- `PermitRootLogin no`: Obliga a iniciar sesión como usuario con privilegios mínimos y escalar mediante `sudo` auditado.
- `PasswordAuthentication no`: Elimina por completo los ataques de diccionario; solo se autorizan llaves `Ed25519`.
- `MaxAuthTries 3`: Reduce el número de intentos fallidos antes de cerrar la sesión.

Complementamos esto con **Fail2ban**, que monitorea los registros de autenticación del journal de Systemd y banea temporalmente cualquier IP sospechosa.

## 4. Cadena de Suministro: Flag `ignore-scripts` en Node.js y Bun

Uno de los vectores de ataque más comunes en la actualidad proviene de dependencias en `npm` con scripts maliciosos en sus ciclos de vida `postinstall`.

Para mitigar este riesgo en servidores de producción, el playbook configura globalmente:

```bash
npm config set ignore-scripts true
```

De este modo, ningún paquete de terceros puede compilar o ejecutar código binario no verificado durante la instalación de paquetes.

## Conclusión: Automatización Idempotente con Ansible

Configurar estos 15+ pasos manualmente en cada nuevo servidor es propenso a descuidos humanos. Centralizarlo en un rol de Ansible garantiza que cualquier nuevo nodo de telemetría o servidor backend quede listo y blindado en menos de 5 minutos, con total reproducibilidad.
