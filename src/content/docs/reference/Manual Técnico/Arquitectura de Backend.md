---
title: Arquitectura Backend
description: A guide in my new Starlight docs site.
---



### Tecnologías Utilizadas


El ecosistema del servidor ha sido desarrollado bajo un stack tecnológico robusto e inmutable orientado a entornos web de alto rendimiento:


- **Lenguaje de Programación:** Java 25 *(implementando Java Records para la transferencia inmutable de DTOs hacia el cliente)*.
- **Framework Principal:** Spring Boot 4.1.0.
- **Capa de Seguridad Perimetral:** Spring Security *(utilizando la biblioteca `jjwt` de `io.jsonwebtoken` para el parseo criptográfico de tokens JWT stateless integrados en cookies del navegador)*.
- **Mapeo Objeto-Relacional (ORM):** Spring Data JPA / Hibernate.
- **Motor de Base de Datos:** MariaDB / MySQL.
- **Gestor de Construcción:** Apache Maven.
- **Pruebas Unitarias e Integración:** JUnit 5 y Mockito.


---


### Arquitectura Seleccionada


**Modelo de Arquitectura:** Cliente-Servidor (basado en API RESTful) / Arquitectura en capas desacopladas.


#### Justificación


Se ha seleccionado un diseño Cliente-Servidor de tipo API REST debido a la clara separación de responsabilidades exigida por el proyecto, donde la interfaz de usuario está construida en Vue 3 y se comunica de forma asíncrona mediante HTTPS.


A nivel interno del servidor, se implementa una arquitectura en capas de corte tradicional pero estricta (`Controller-Service-Repository-Entity`). Esta separación asegura que:


-  **Capa de Controladores (`@RestController`):** Se limita únicamente a interceptar peticiones HTTP, evaluar autorizaciones con `@PreAuthorize`, realizar validaciones estructurales de entrada (`@Valid`) y mapear respuestas uniformes.
-  **Capa de Servicios (`@Service`):** Centraliza de manera pura la lógica de negocio y las restricciones condicionales cruzadas del backlog (como verificar el rango de participantes `min < max`, comprobar la unicidad del `responsable_id` por proyecto, o controlar proyectos activos de beneficiarios).
-  **Capa de Repositorios (`@Repository`):** Delega la persistencia directamente a través de interfaces JPA y controla las transacciones atómicas (`@Transactional`).


Esta disposición garantiza que el sistema sea modular, fácilmente testeable mediante dobles de prueba (Mockito) sin necesidad de levantar bases de datos activas, y totalmente escalable ante la adición de nuevos módulos organizacionales.

