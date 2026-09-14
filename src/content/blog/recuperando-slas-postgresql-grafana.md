---
title: >-
  De 0% a 95.18% de SLA: Optimizando Consultas y Zonas Horarias en PostgreSQL
  sobre 16M+ Filas
excerpt: >-
  Autopsia técnica de cómo un desfase entre UTC y America/Santiago, combinado
  con condiciones NULL en horas no laborables, falseaba los SLAs en Grafana — y
  cómo lo solucionamos.
date: 2026-01-20
readTime: 6 min de lectura
category: Backend
---
## El Escenario: Cuando los Dashboards Mienten

En acuerdos de servicios de misión crítica y soporte 24/7, el cumplimiento de **SLA (Service Level Agreement)** no es una métrica decorativa: determina la disponibilidad operativa y la viabilidad técnica de los contratos.

En nuestros dashboards ejecutivos de Grafana, las alarmas se encendieron cuando las métricas mensuales mostraron repentinamente un **0% de cumplimiento de SLA** para cuentas críticas, a pesar de que los equipos técnicos atendían cada incidencia con normalidad.

La base de datos detrás de estos dashboards era un PostgreSQL con tablas que superaban los **16 millones de registros** (`registro_mqtt` y `tarea`).

## Causa Raíz 1: El Infierno de las Zonas Horarias (UTC vs America/Santiago)

El servidor y la base de datos almacenaban todas las marcas temporales en `TIMESTAMP WITH TIME ZONE` normalizadas a UTC (ha día de hoy sigue siendo un problema, ya que darle al usuario la capacidad, trae los problemas de capa 8). Sin embargo:

- Los turnos operacionales se definen en el horario local oficial (`America/Santiago`).
- La región experimenta cambios de horario de verano/invierno (UTC-3 y UTC-4) en fechas variables decretadas anualmente por el gobierno.
- Las consultas SQL en Grafana utilizaban funciones de truncado simple (`date_trunc('day', fecha_creacion)`) asumiendo UTC.

Como consecuencia, todas las tareas creadas entre las 20:00 y las 23:59 hora local eran computadas como si correspondieran al **día siguiente**, asociándolas a turnos que aún no iniciaban y marcándolas como vencidas automáticamente.

### La Corrección SQL

Modificamos las expresiones para forzar la conversión explícita en el huso horario oficial antes de cualquier agregación o truncado:

```sql
SELECT 
    date_trunc('day', fecha_creacion AT TIME ZONE 'America/Santiago') AS dia_operativo,
    COUNT(*) FILTER (WHERE estado = 'cumplido') * 100.0 / NULLIF(COUNT(*), 0) AS porcentaje_sla
FROM tarea
WHERE fecha_creacion >= NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1 DESC;
```

## Causa Raíz 2: Condiciones NULL en Horarios Fuera de Contrato

El SLA contractual solo era vinculante en horario hábil (de lunes a viernes de 08:00 a 20:00). No obstante, los sensores IoT continuaban emitiendo ráfagas de telemetría y alertas las 24 horas del día.

Cuando una alerta ocurría a las 03:00 AM, el campo `tiempo_limite_atencion` quedaba en `NULL` o se asignaba con un cálculo erróneo. En el SQL de Grafana, una comparación:

```sql
WHERE tiempo_respuesta <= tiempo_limite_atencion
```

Evaluaba a `UNKNOWN` ante valores `NULL`, excluyendo la tarea del numerador de cumplimiento pero contándola en el total del denominador. Esto provocaba que el porcentaje de cumplimiento colapsara estrepitosamente hacia el 0%.

## Causa Raíz 3: Consultas de 15 Segundos a 180 Milisegundos

Para colmo de males, con más de 16 millones de filas en `registro_mqtt`, los dashboards de Grafana experimentaban *timeouts* recurrentes.

Analizando con `EXPLAIN (ANALYZE, BUFFERS)` descubrimos escaneos secuenciales masivos (*Sequential Scans*). Para corregirlo:

1. Creamos índices B-Tree compuestos sobre `(fecha_creacion DESC, id_dispositivo)` y `(empresa_id, estado)`.
1. Implementamos índices parciales que indexan únicamente los registros activos y pendientes de resolución:

```sql
CREATE INDEX idx_tarea_pendientes_sla 
ON tarea (empresa_id, fecha_creacion) 
WHERE estado IN ('pendiente', 'en_curso');
```

## El Resultado Final

Tras desplegar la nueva lógica SQL y los índices optimizados:

- El cálculo de cumplimiento se corrigió de inmediato, reflejando un **95.18% de SLA contractual cumplido**.
- El tiempo de carga de los 20+ dashboards ejecutivos pasó de **\~15 segundos a menos de 180 ms**.
- El equipo técnico pudo certificar auditorías transparentes y verificables ante clientes y partes interesadas.
- En ciertas consultas, tuve que dejar harcodeada la zona horaria, debido a la capa 8, se dejo comentario en query, para el futuro desarrollador.
