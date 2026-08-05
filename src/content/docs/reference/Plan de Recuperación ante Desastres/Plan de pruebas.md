---
title: Plan de Pruebas, Mantenimiento y Simulacros
description: A guide in my new Starlight docs site.
---


Para garantizar la validez operativa de este Plan de Recuperación ante Desastres y asegurar la resiliencia del sistema a lo largo del tiempo, se establece un programa estructurado de pruebas, mantenimientos preventivos y simulacros periódicos:

* **Simulacros de Restauración (Anual):** Con una periodicidad anual, se llevará a cabo un simulacro controlado de recuperación completa. Durante este proceso, se extraerá el último respaldo almacenado en el bucket de producción de Oracle Object Storage y se desplegará sobre un entorno local o un contenedor de prueba aislado. Esta prueba tiene como objetivo doble:
  * Verificar la integridad física y lógica de los datos (ausencia de corrupción de tablas).
  * Auditar que los tiempos de ejecución reales de la restauración se mantengan estrictamente dentro de los márgenes definidos por el **Objetivo de Tiempo de Recuperación (RTO)**.

* **Mantenimiento Preventivo y Revisiones de Seguridad (Trimestral):** Se ejecutará una revisión técnica de carácter trimestral orientada a mitigar vulnerabilidades y optimizar la infraestructura. Este procedimiento incluye:
  * Auditoría de las reglas de filtrado de tráfico en las *Security Lists* de Oracle Cloud Infrastructure (OCI).
  * Actualización de paquetes y dependencias críticas del ecosistema (Spring Boot y Vue).
  * Verificación del proceso automatizado de renovación de certificados SSL/TLS mediante Certbot sobre Nginx, asegurando así la continuidad ininterrumpida de las comunicaciones cifradas HTTPS.