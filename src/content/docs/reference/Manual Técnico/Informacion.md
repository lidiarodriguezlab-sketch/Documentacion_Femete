---
title: Información General del Proyecto
description: A guide in my new Starlight docs site.
---




- **Nombre de la aplicación:** Gestor de Proyectos y Actividades DH
- **Versión:** `1.0`
- **Fecha:** 12/08/2026
- **Equipo de desarrollo:** PREFAE *"Programación Java e Inteligencia Artificial"* de Femete
- **Cliente:** Asociación Domitila Hernández


### Resumen Ejecutivo


El proyecto consiste en el desarrollo de una plataforma web integral para la **Asociación Domitila Hernández**, entidad sin ánimo de lucro referente en igualdad, formación e inclusión social en Canarias.


Tecnológicamente, el sistema se basa en una arquitectura desacoplada de alto rendimiento utilizando **Spring Boot 4.1.0** junto con **Java 25** en el backend, **Vue.js 3** en el frontend y **MariaDB / MySQL** para la gestión de la base de datos.


### Pilares Fundamentales:


- **Problema que resuelve:** Unifica y digitaliza todo el ciclo de vida de los proyectos en una plataforma centralizada, eliminando la gestión fragmentada mediante hojas de cálculo independientes y documentos físicos dispersos.
- **Público objetivo:** Uso interno de la Asociación Domitila Hernández (Dirección, Administración y Recursos Humanos).
- **Beneficios principales:**
  - *Gestión centralizada:* Unifica información institucional y automatiza el seguimiento de proyectos.
  - *Trazabilidad y auditoría:* Optimiza el control de asistencias y el archivo documental para memorias públicas (Servicio Canario de Empleo, Cabildo de Tenerife).
  - *Operativa y comunicación:* Gestión de incidencias por hilos y consola de comunicación en tiempo real.
  - *Seguridad y RGPD:* Acceso controlado bajo el marco de protección de datos y registro auditable.


---


### Objetivos


#### Objetivo General
Diseñar e implementar una aplicación web funcional (*Gestor de Proyectos y Actividades DH*) que digitalice y centralice el ciclo operativo de los proyectos de la Asociación Domitila Hernández, reduciendo la carga administrativa y asegurando la trazabilidad documental para las administraciones públicas.


#### Objetivos Específicos
1. **CRUD Integral:** Desarrollar un sistema de gestión integral para proyectos, actividades y subtareas con validación de ciclos de vida.
2. **Evolución a PWA:** Desarrollar la interfaz como una Aplicación Web Progresiva (*PWA*) instalable con persistencia local para trabajo de campo.
3. **Seguridad Perimetral:** Blindar el acceso basado en roles mediante Spring Security (`ROLE_ADMIN`, `ROLE_GESTOR`, `ROLE_TECNICO`), tokens JWT en Cookies HttpOnly y cumplimiento de RGPD.


## Requisitos del Sistema


### Requisitos Funcionales


| ID | Requisito | Descripción Técnica del Backlog |
|:---|:---|:---|
| **RF-01** | Autenticación de Usuarios Perimetral | El sistema valida las credenciales a través de Spring Security (`canLogin()`), otorgando acceso a los roles `ADMIN`, `TECNICO` y `GESTOR`. Inyecta y destruye tokens JWT sin estado mediante Cookies HttpOnly (`jwt` y `refresh_jwt`) con atributos `Secure` y `SameSite`. |
| **RF-02** | Cambio de Contraseña de Usuario | Permitir al personal autenticado modificar su clave de acceso cifrada en el servidor, validando previamente la contraseña actual y actualizando el hash cifrado en servidor. |
| **RF-03** | Gestión de Fechas de Convocatoria de Proyectos | Operaciones CRUD completas bajo rutas anidadas para modelar el ciclo de vida administrativo de un proyecto mediante una relación 1:1. |
| **RF-04** | Restricción de Fechas por Estado de Proyecto | Bloquear la creación/modificación de fechas si el proyecto se encuentra en estados inactivos o cerrados (`FINALIZADO` o `CANCELADO`). |
| **RF-05** | Asignación de Personal Laboral a Proyectos | Vincular trabajadores a proyectos específicos (relación N:M) detectando duplicados exactos y validando la existencia de ambas entidades. |
| **RF-06** | Desasignación de Personal de Proyectos | Romper el vínculo de un trabajador con un proyecto a través de un endpoint `DELETE`. |
| **RF-07** | Asociación y Exposición de Actividades de Proyecto | Exponer las actividades como sub-recursos anidados de un proyecto, validando la existencia del padre y permitiendo filtrado opcional por estado de la actividad con paginación. |
| **RF-08** | Asociación y Exposición de Tareas de Actividad | Exponer las tareas como sub-recursos de una actividad, validando la existencia del padre y permitiendo filtrado opcional por estado de la tarea con paginación. |
| **RF-09** | Modificación del Estado de Tareas y Actividades | Permitir la actualización parcial del estado de tareas y actividades mediante endpoints `PATCH`. La eliminación de actividades/tareas se realiza mediante baja lógica (`completada = false`). |
| **RF-10** | Gestión de Incidencias de Actividad | Operaciones CRUD completas para registrar incidencias ligadas exclusivamente a una actividad padre, disparando notificaciones y blindando el hilo de conversación como histórico de solo lectura. |
| **RF-11** | Asignación de Voluntarios a Proyectos | Vincular voluntarios a proyectos (N:M) bajo rutas anidadas, permitiendo que un voluntario participe en múltiples proyectos activos de forma simultánea. |
| **RF-12** | Asignación de Colaboradores Externos a Proyectos | Vincular colaboradores externos a proyectos (N:M) sin restricciones de unicidad por proyectos activos simultáneos. |
| **RF-13** | Restricción de Beneficiarios por Proyecto Activo | Vincular beneficiarios a proyectos (N:M) asegurando que un beneficiario solo pueda estar asociado a proyectos en estado activo (`PENDIENTE` o `EN_CURSO`). |
| **RF-14** | Gestión de Beneficiarios con Baja Lógica | Operaciones CRUD para el padrón de beneficiarios. Se prohíbe el borrado físico (*hard delete*); la baja lógica registra la fecha de salida/baja (`fecha_baja`) manteniendo el histórico de atenciones. |
| **RF-15** | Tramitación de Solicitudes de Vacaciones | Permitir a los gestores registrar peticiones de vacaciones. |
| **RF-16** | Consulta, Asignación y Revocación de Roles | Endpoints administrativos para listar, añadir o retirar roles asignados a los trabajadores, bloqueando la auto-revocación y la orfandad de roles. **Regla de negocio adicional:** Queda estrictamente prohibida la asignación del rol `ROLE_ADMIN` a cualquier otro usuario del sistema, garantizando la existencia de un único administrador global en la plataforma. |
| **RF-17** | Cambio de Imagen de Perfil | El alta del personal y la carga de su imagen operan en flujos transaccionales separados. La fotografía se envía mediante un payload independiente de tipo `FormData` (`POST /api/personal/{id}/profile-image`) solo tras persistir los datos contractuales base. |
| **RF-18** | Gestión Base y Filtrado de Proyectos | Operaciones CRUD completas para el recurso Proyecto. Permite el listado paginado con filtros dinámicos opcionales por nombre (búsqueda parcial *case-insensitive*) y estado (`EstadoProyecto`). |
| **RF-19** | Validación de Rango de Participantes | Al crear o actualizar un proyecto, el sistema valida obligatoriamente que el número máximo de participantes sea mayor o igual al número mínimo (`max_participantes >= min_participantes`). De lo contrario, retorna un error `400 Bad Request`. |
| **RF-20** | Transición de Estado de Proyectos | Permitir la actualización parcial del estado del proyecto mediante `PATCH /api/proyectos/{id}/estado`, transitando según el ciclo de vida: `PENDIENTE`, `EN_CURSO`, `EN_PAUSA` y `FINALIZADO`. |
| **RF-21** | Baja Lógica Histórica de Proyectos | Queda prohibido el borrado físico de proyectos (`DELETE`). La baja lógica o borrado de un proyecto está restringida exclusivamente al usuario con rol Administrador (`ROLE_ADMIN`); los gestores únicamente podrán administrar, editar y gestionar su ciclo de vida, pero no eliminarlo o darlo de baja. Al procesar la baja lógica por parte del Administrador, el proyecto muta automáticamente su estado a `CANCELADO`. |
| **RF-22** | Gestión Base de Personal Laboral con Baja Lógica | CRUD de trabajadores en `PersonalService` desvinculado de beneficiarios. Prohíbe el borrado físico para evitar la destrucción en cascada de contratos y nóminas; la baja muta el atributo a `activo = false`. |




### Requisitos No Funcionales


| ID | Categoría | Requisito | Descripción Técnica del Backlog |
|:---|:---|:---|:---|
| **RNF-01** | Seguridad | Control de Acceso Basado en Roles (RBAC) | Matriz de permisos multi-rol (`ADMIN`, `GESTOR`, `TECNICO`) declarada mediante anotaciones `@PreAuthorize` de Spring Security en controladores y servicios para restringir rutas y operaciones según el rol autenticado. |
| **RNF-02** | Seguridad | Gestión Segura de Sesión mediante JWT y Cookies | Emisión y transmisión de tokens JWT sin estado (*Stateless*) inyectados en almacenamiento del navegador mediante Cookies con directivas `HttpOnly`, `Secure` y `SameSite` para mitigar ataques XSS y CSRF. |
| **RNF-03** | Seguridad | Cifrado de Datos y Claves de Acceso | Cifrado unidireccional de contraseñas de usuario en base de datos mediante algoritmos HASH robustos (**BCrypt**) y gestión de datos sensibles protegidos en reposición y tránsito. |
| **RNF-04** | Seguridad | Protección de Datos y Sanitización de Trazas | Sanitización de secretos en archivos de configuración (`application.yml` alimentado por variables de entorno) y enmascaramiento estricto de credenciales en trazas de logs (`STDOUT`/archivos) acorde a normativas de privacidad (RGPD). |
| **RNF-05** | Mantenibilidad y Arquitectura | Estandarización del Stack Tecnológico | Definición de la pila tecnológica oficial del proyecto basada en **Java 25**, framework **Spring Boot 4.1.0** para el backend API RESTful, **Vue.js 3** para el cliente Frontend SPA y **MariaDB** como motor relacional de persistencia. |
| **RNF-06** | Disponibilidad y Despliegue | Despliegue Contenerizado (Docker / Docker Compose) | Orquestación aislada e idéntica de entornos (Desarrollo, QA y Producción) encapsulando los servicios de Aplicación Frontend, API Backend y Base de Datos mediante contenedores con `docker-compose.yml`. |
| **RNF-07** | Mantenibilidad y Arquitectura | Persistencia Desacoplada y Mapeo JPA | Mapeo de enumeraciones de dominio y datos desacoplados mediante conversores JPA personalizados (`AttributeConverter`), garantizando la integridad referencial y permitiendo la baja lógica (*soft delete*) para la preservación de históricos auditables. |
| **RNF-08** | Disponibilidad y Despliegue | Despliegue Contenerizado (Docker / Docker Compose) | Orquestación aislada e idéntica de entornos (Desarrollo, QA y Producción) encapsulando los servicios de Aplicación Frontend, API Backend y Base de Datos mediante contenedores con `docker-compose.yml`. |
---


## Usuarios y Roles


### Tipos de Usuario


- **Administrador (`ROLE_ADMIN`):** Control total de la plataforma. Rol único e inasignable a terceros. Autorizado para ejecutar baja lógica de proyectos y gestionar roles de personal.
- **Gestor de Proyecto (`ROLE_GESTOR`):** Nivel operativo alto para crear, modificar y supervisar proyectos, actividades, incidencias y personal.
- **Técnico (`ROLE_TECNICO`):** Perfil operativo de campo para ejecutar tareas y registrar asistencias e incidencias en movilidad.


---





