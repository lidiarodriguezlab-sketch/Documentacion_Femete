---
title: Control de Versiones e Integración
description: A guide in my new Starlight docs site.
---




### Repositorio
* **Plataforma utilizada:** GitHub
* **URL del repositorio:** [https://github.com/PMSdomitila/proyecto_domitila](https://github.com/PMSdomitila/proyecto_domitila)


---


### Estrategia de ramas
Para garantizar la estabilidad del código, facilitar el desarrollo colaborativo y asegurar una integración organizada, el proyecto adopta una estrategia de ramificación basada en la separación por entornos especializados y equipos de trabajo.


El repositorio se ha estructurado dividiendo el trabajo por entornos independientes. De la rama madre (`main`) surgen ramas específicas asignadas a cada uno de los equipos de trabajo para mantener el desarrollo completamente separado y organizado, evitando conflictos de código (*merge conflicts*) entre las distintas capas de la aplicación (Frontend, Backend, Base de Datos y Documentación).


A continuación, se detalla la jerarquía y el propósito de cada rama dentro del repositorio:


| Tipo de Rama | Nombre de la Rama | Origen | Propósito y Descripción |
| :--- | :--- | :--- | :--- |
| **Raíz / Madre** | `development` | — | Código fuente global del proyecto. |
| **Especializada** | `development-back` | `main` | Espacio de trabajo exclusivo para el equipo de Backend. |
| **Especializada** | `development-front` | `main` | Espacio de trabajo exclusivo para el equipo de Frontend / UX-UI. |
| **Especializada** | `database` | `main` | Espacio de trabajo exclusivo para el equipo de Base de Datos. |
| **Especializada** | `testing` | `main` | Espacio de trabajo exclusivo para el equipo de QA / Testing. |
| **Especializada** | `docs` | `main` | Espacio de trabajo exclusivo para el equipo de Análisis y Documentación. |


---


###  Convención de commits
Para mantener un historial de cambios limpio, legible y fácil de auditar, se adopta el estándar **Conventional Commits**. Esta convención ayuda al equipo a entender el avance del proyecto y permite generar registros de cambios de forma automática.


Todos los mensajes deben seguir el formato obligatorio: `<tipo>: <descripción>`.


A continuación, se detallan los prefijos utilizados:


| Prefijo | Propósito del Cambio | Ejemplo Real en el Proyecto |
| :--- | :--- | :--- |
| `feat:` | Introducción de una nueva funcionalidad. | `feat: agregar panel kanban con vue` |
| `fix:` | Resolución de un fallo o comportamiento inesperado. | `fix: corregir validación de fechas en proyectos` |
| `docs:` | Modificaciones exclusivas en la documentación. | `docs: actualizar memoria técnica sección 1` |
| `refactor:` | Cambios en el código que no añaden funciones ni reparan fallos. | `refactor: optimizar consultas jpa de proyectos` |

