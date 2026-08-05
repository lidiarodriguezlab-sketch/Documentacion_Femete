---
title: Estrategia de Continuidad del Negocio
description: A guide in my new Starlight docs site.
---



Para la fase actual del proyecto, se han establecido de manera consciente los siguientes objetivos de recuperación alineados con la arquitectura y la frecuencia de copias de seguridad:

* **RPO (*Recovery Point Objective* / Objetivo de Punto de Recuperación):**
  * **Copia Completa:** `7 días`. La generación automática del respaldo principal se realiza de forma semanal (domingos a las 2:00 AM). No obstante, el sistema permite la ejecución de *backups* manuales bajo demanda desde el panel de administración ante operaciones críticas para reducir este delta.
  * **Sincronización Externa:** `24 horas`. La replicación de respaldos hacia Oracle Object Storage se ejecuta de forma diaria (3:00 AM).

* **RTO (*Recovery Time Objective* / Objetivo de Tiempo de Recuperación):**
  * **Fallos de Contenedores / Servicios:** `< 2 horas` (recuperación inmediata/automática mediante políticas de reinicio de `systemd` y Docker `--restart unless-stopped`).
  * **Reconstrucción Total del Servidor o Restauración de Base de Datos:** `< 24 horas` desde la declaración del incidente hasta la restauración completa del servicio utilizando los respaldos alojados fuera de la instancia.