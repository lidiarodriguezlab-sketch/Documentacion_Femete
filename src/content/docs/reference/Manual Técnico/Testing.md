---
title: Testing y Calidad
description: A guide in my new Starlight docs site.
---





### Estrategia de pruebas
La validación del sistema se realiza mediante una estrategia por capas estructurada en niveles específicos:


* **Unitarias:** Ejecución a nivel de código para la capa de servicios (`@Service`), validando las reglas de negocio, excepciones de dominio (como `RangoParticipantesInvalidoException` o `ResponsableYaAsignadoException`) y conversores JPA.
* **Integración:** Validación de la interacción completa entre las capas del backend: **Controller → Service → Repository → Base de Datos (MariaDB)**. Incluye la verificación de la API REST mediante colecciones automatizadas en Postman (desde *Smoke Tests* hasta *Pruebas de Regresión*), asegurando la validez de los códigos HTTP (`200`, `201`, `400`, `404`, `409`), *payloads* JSON y la inyección de cookies JWT.
* **End-to-End (E2E):** Flujos completos de negocio que abarcan desde el cliente Vue.js 3 hasta la persistencia final en la base de datos MariaDB, garantizando que el ciclo de vida de los proyectos, beneficiarios y personal se cumpla en su totalidad.
* **Manuales:** Validación de usabilidad, flujos específicos de usuario basados en la matriz de roles (`ROLE_ADMIN`, `ROLE_GESTOR`, `ROLE_TECNICO`) y pruebas de caja negra sobre casos de borde o comportamientos de concurrencia.


---


### Herramientas utilizadas
Las herramientas aplicadas al stack real del proyecto, considerando que el Backend está construido sobre **Java 25**, **Spring Boot 4.1.0** y **MariaDB 12.3**, se detallan a continuación:


| Herramienta | Rol / Categoría | Propósito y Descripción Técnica |
| :--- | :--- | :--- |
| **JUnit 5 & Mockito** | PRUEBAS UNITARIAS | Framework principal de pruebas unitarias del backend, configurado para ejecutar aserciones aisladas sobre servicios y DTOs mediante la anotación `@ExtendWith(MockitoExtension.class)`. |
| **Postman / Newman** | PRUEBAS DE API & RBAC | Utilizado para la ejecución automatizada en línea de comandos de las colecciones de pruebas de endpoints de la API (Smoke, Seguridad RBAC, Regresión y cookies JWT). |
| **Maven (`mvnw`)** | CONSTRUCCIÓN & EJECUCIÓN | Gestor de construcción encargado de ejecutar el ciclo de pruebas automáticas durante la fase de compilación (`mvn test`). |
| **Docker / Docker Compose** | ENTORNOS & AISLAMIENTO | Orquestación del entorno de base de datos local y aislamiento de contenedores efímeros para la ejecución reproducible de pruebas de integración. |
| **Testcontainers** | PERSISTENCIA EFÍMERA | Herramienta integrada en el plan de calidad para levantar instancias efímeras y reales de MariaDB durante el ciclo de pruebas de integración JPA/Hibernate. |

