---
title: Política de Copias de Seguridad (Backups)
description: A guide in my new Starlight docs site.
---



La estrategia de respaldo de la plataforma combina la automatización periódica con la capacidad de ejecución bajo demanda para garantizar la máxima integridad de la información. 

### 1. Frecuencia y Automatización
* **Respaldo Principal (Semanal):** La generación del respaldo principal de la base de datos MariaDB 12 se ejecuta de forma automática **cada domingo a las 2:00 AM** mediante una tarea programada gestionada directamente por el backend.
* **Copias Manuales (Bajo Demanda):** Se complementa con la posibilidad de realizar copias manuales desde el panel de administración antes de intervenciones o mantenimientos críticos.
* **Sincronización Externa (Diaria):** Para asegurar la persistencia externa, una tarea programada mediante `cron` se ejecuta **diariamente a las 3:00 AM** para detectar y replicar de manera automática en el bucket `domitila-backups` de Oracle Object Storage aquellas copias que aún no hayan sido subidas.

---

### 2. Distribución y Retención (Regla 3-2-1 Adaptada)
Siguiendo una aproximación adaptada de la regla 3-2-1 para la conservación de datos, las copias se distribuyen en dos ubicaciones claramente diferenciadas:

* **Almacenamiento Local (Servidor VPS):** Ubicado en `/home/opc/backups`, sujeto a una política de retención estricta que **conserva únicamente los 2 respaldos más recientes** para optimizar el espacio en disco.
* **Almacenamiento Remoto (Nube):** Aislado en la nube fuera de la instancia (Oracle Object Storage), garantizando que un fallo catastrófico del servidor no comprometa la disponibilidad de los datos.

---

### 3. Seguridad y Cumplimiento Normativo
* **Control de Acceso:** El acceso a las copias de seguridad remotas queda restringido exclusivamente a la dirección y a los administradores del proyecto a través de políticas IAM en la consola de Oracle Cloud Infrastructure (OCI).
* **Protección de Datos (GDPR):** Al contener datos de carácter personal, a las copias de seguridad se les aplican de forma rigurosa las mismas garantías y medidas de protección exigidas por el Reglamento General de Protección de Datos (GDPR) que a la base de datos en producción:
  * **Cifrado en tránsito:** Mediante protocolos HTTPS/TLS.
  * **Cifrado en reposo:** Proporcionado por *OCI Object Storage Encryption*.