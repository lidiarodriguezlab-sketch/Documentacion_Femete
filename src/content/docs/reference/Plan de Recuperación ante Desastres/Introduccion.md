---
title: Introducción y Alcance
description: A guide in my new Starlight docs site.
---



Este documento constituye el marco operativo y técnico oficial para mitigar el impacto de incidentes críticos sobre el sistema de gestión accesible públicamente mediante [`https://gestor.asociaciondomitila.com`](https://gestor.asociaciondomitila.com).

Su alcance abarca la totalidad de los componentes del ecosistema alojados en una instancia de **Oracle Cloud Infrastructure (OCI)** (región *Spain Central / eu-madrid-1*, modalidad *Always Free*) sobre el sistema operativo **Oracle Linux 9**:

* **Frontend:** Interfaz de usuario compilada en Vue y servida mediante Nginx, actuando también como proxy inverso HTTPS con certificados gestionados por Let's Encrypt.
* **Backend:** Servicio en Spring Boot ejecutado directamente en el sistema anfitrión como servicio `systemd`.
* **Base de Datos / Persistencia:** Motor MariaDB 12 desplegado dentro de un contenedor Docker aislado (con acceso de conexión local mediante `127.0.0.1:3307`).
* **Almacenamiento de Respaldo:** Directorio local (`/home/opc/backups`) y almacenamiento de objetos externos en el bucket `domitila-backups` de Oracle Object Storage.

El propósito fundamental de este plan es salvaguardar la integridad de los datos de la entidad, garantizando la recuperación de la actividad administrativa ante fallos de infraestructura, corrupción de bases de datos o ciberataques.

