---
title: "Aislamiento de Redes Industriales en Go: Conectando Múltiples VPNs con Linux Network Namespaces"
excerpt: "Cómo resolver el problema de consultar sensores IoT en redes de diferentes clientes con rangos IP conflictivos utilizando Linux Network Namespaces y goroutines en Go."
date: 2026-02-15
readTime: "7 min de lectura"
category: "Backend"
---

## El Problema: Colisión de Rangos IP en VPNs Corporativas

Cuando administras infraestructura centralizada para múltiples redes remotas o sitios corporativos, con frecuencia debes acceder a dispositivos locales (sensores, PLC, gateways industriales) que se encuentran detrás de firewalls restrictivos. La solución estándar es levantar un túnel VPN (OpenVPN, WireGuard o IPSec) hacia cada red local.

Sin embargo, aparece un dolor de cabeza inevitable: **la colisión de rangos IP privados**.

Casi todas las subredes de clientes utilizan los mismos bloques de red: `192.168.1.0/24` o `10.0.0.0/24`. Si levantas dos o más clientes VPN en la misma máquina Linux:
1. La tabla de enrutamiento principal colapsa al intentar dirigir el tráfico de la misma subred a dos interfaces distintas (`tun0`, `tun1`).
2. El tráfico destinado al Sitio B termina viajando por el túnel del Sitio A o bloqueado en el gateway por defecto.

## La Solución: Linux Network Namespaces (`netns`)

Linux cuenta con una funcionalidad nativa en el kernel que permite aislar completamente la pila de red: los **Network Namespaces**. Cada namespace posee su propia tabla de enrutamiento, sus propias interfaces de red, su propio conjunto de reglas de iptables y sus propios sockets.

En lugar de alterar la red global del servidor host, creamos un namespace dedicado para cada sitio remoto:

```bash
# Crear un namespace para la VPN del sitio remoto
ip netns add vpn-site-a

# Levantar el cliente VPN confinado dentro de ese namespace
ip netns exec vpn-site-a openvpn --config /etc/openvpn/site-a.conf
```

De esta manera, la interfaz `tun0` y las rutas hacia `192.168.1.0/24` existen **únicamente** dentro de `vpn-site-a`. El host principal permanece intacto, sin rutas contaminadas y con acceso normal a Internet.

## Integrando Namespaces directamente en Go

Para realizar polling concurrente de métricas sobre estos dispositivos desde un daemon en Go, tenemos dos estrategias principales:

### Estrategia A: Sockets Vinculados a Namespaces con System Calls
En Linux, un hilo del sistema operativo puede cambiar de namespace usando la llamada al sistema `setns`. No obstante, en Go esto requiere cuidado extremo debido a que el runtime de Go multiplexa goroutines sobre múltiples hilos de SO (`M:N scheduler`). Si una goroutine llama a `setns`, debe asegurarse de fijar el hilo con `runtime.LockOSThread()`.

### Estrategia B: Procesos Workers Aislados con `exec.CommandContext`
Para máxima estabilidad y evitar que una falla en la librería de red afecte al proceso principal, el daemon en Go puede orquestar subprocesos o sockets auxiliares ejecutados directamente con la bandera de namespace:

```go
cmd := exec.CommandContext(ctx, "ip", "netns", "exec", clientNamespace, "curl", "-s", sensorEndpoint)
output, err := cmd.Output()
if err != nil {
    // Manejo de desconexión y almacenamiento en cola local SQLite
    return logAndBufferLocally(err, sensorData)
}
```

## Buffer Local en SQLite: Resiliencia ante Desconexiones

Las conexiones VPN a través de enlaces satelitales o redes remotas congestionadas presentan micro-cortes frecuentes. Si el sondeo falla, el daemon no descarta la métrica:
- Registra el evento en una base de datos local SQLite con modo WAL.
- Un worker secundario evalúa periódicamente la salud del túnel.
- Al restablecerse el túnel, la cola pendiente se despacha hacia el broker central de telemetría respetando el orden cronológico estricto.

Esta arquitectura redujo a **0%** las pérdidas de datos en producción, permitiendo escalar a decenas de redes VPN concurrentes sobre un único servidor modesto.
