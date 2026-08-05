---
title: Arquitectura Frontend
description: A guide in my new Starlight docs site.
---



### Tecnologías Utilizadas


El ecosistema frontend del proyecto ha sido compilado e integrado bajo un stack tecnológico moderno enfocado en alta ingeniería y el estado del arte. A continuación, se recopila e integra la información técnica clave de cada una de las herramientas que componen la pila de desarrollo, operando bajo un entorno de ejecución **Node.js v20+**:


| Tecnología | Componente / Rol | Descripción Técnica e Integración con PWA |
|:---|:---|:---|
| **Vue.js (v3)** | FRAMEWORK CORE | Framework progresivo y reactivo basado en componentes reutilizables que ofrece un rendimiento excelente gracias a su DOM virtual, facilitando la sincronización automática de datos sin recargar la página. Implementado bajo el paradigma Composition API (`<script setup>`), opera como una Aplicación de Página Única (SPA) que consume datos en JSON desde el backend. |
| **Vite (v5.2)** | BUILD TOOL / BUNDLER | Herramienta de construcción de última generación que reemplaza a Webpack. Su arquitectura basada en ESM nativo acelera radicalmente el desarrollo y permite inyectar plugins críticos como `vite-plugin-pwa`. |
| **Pinia** | STATE MANAGEMENT | Almacén de estado centralizado oficial para Vue 3 organizado en módulos específicos (`authStore`, `notificacionesStore`, `counterStore`). Facilita el flujo unidireccional de datos e interactúa con la Web Storage API (`localStorage`) para mantener estados locales en escenarios offline o tras recargas de página. |
| **Vue Router** | ROUTING | Enrutador oficial para SPA (*Single Page Application*). Mapea las URLs virtuales de la PWA para una navegación fluida, soportando evaluación de roles (RBAC) y carga perezosa (*lazy-loading*) de componentes. |
| **apiClient / Axios** | CLIENTE HTTP CENTRALIZADO | Módulo de red unificado (`services/apiClient.js`) basado en Axios para la gestión de peticiones HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`). Encapsula la inyección automática de cabeceras de autorización (`Bearer JWT`), interceptores de red y el tratamiento globalizado de errores. |
| **Servicios de Negocio** | CAPA DE SERVICIOS API | Módulos especializados de lógica de negocio como `authService.js` (gestión de sesiones y credenciales) y `workflowService.js` (orquestación de incidencias, tareas, actividades y proyectos), que desacoplan la lógica de comunicación backend de las vistas y stores. |
| **Tailwind CSS** | STYLES FRAMEWORK | Framework de estilos basado en utilidades combinado con variables CSS globales. Optimiza el diseño responsivo (breakpoint en 900px) garantizando una interfaz adaptativa (*Mobile-First*). |
| **Chart.js** | GRAPHICS LIBRARY | Librería de renderizado de gráficos estadísticos e informativos (`AdminStatsView.vue`), configurada sobre Canvas interactivo con `maintainAspectRatio: false` y *Tree Shaking* modular para optimizar el bundle final. |
| **jsPDF** | CLIENT-SIDE DOCUMENTATION | Motor de compilación vectorial en el cliente utilizado para la generación y exportación de documentos PDF de forma local, reduciendo la dependencia de servicios backend en escenarios offline. |
| **vite-plugin-pwa** | PWA ENGINE | Plugin encargado de generar de forma automatizada el Service Worker (vía Workbox) y compilar las configuraciones de los manifiestos directamente en los activos de producción (carpeta `dist`). |

### Estructura de componentes


A continuación, se detalla la organización modular de las vistas principales del frontend de Proyecto Domitila, especificando su archivo técnico, su propósito funcional y las optimizaciones de arquitectura aplicadas para garantizar la inmutabilidad de los datos, la eficiencia de la CPU y la seguridad del flujo:


| Componente (Vistas) | Archivo Técnico | Descripción Funcional y Arquitectura |
| :--- | :--- | :--- |
| **Portal de Autenticación** | `LoginView.vue` | Gestiona la seguridad y restricción perimetral de la aplicación. Implementa validaciones reactivas (`v-model`), persistencia local de tokens JWT e integración con el cliente API unificado (`apiClient`). Interactúa directamente con `authStore` para almacenar el token/sesión y redirige de forma condicional según el rol detectado (Administrador/Gestor o Técnico). Incluye bloqueo interactivo de red mediante `:disabled` para evitar peticiones duplicadas. |
| **Panel de Administración** | `DashboardGeneralView.vue` | Centro neurálgico del sistema para administradores y gestores. Orquesta los accesos intermodulares mediante enrutamiento asíncrono optimizado (*lazy-loading*). Delega el procesamiento y filtrado de asignaciones directas a propiedades computadas (`computed`) con caché reactiva implícita. Despacha las actualizaciones directamente a través de las acciones de `authStore`. |
| **Panel Operativo para Técnicos** | `workerDashboard.vue` | Vista de mando adaptada a perfiles técnicos o trabajadores. Ofrece una interfaz simplificada para el seguimiento de tareas asignadas, proyectos activos y peticiones de tramitación personal directas. |
| **Configuración Global** | `SystemSettingsView.vue` | Módulo para la consulta y mutación de parámetros del sistema y variables de entorno globales. Se apoya en observadores (*watchers*) y servicios auxiliares de red para actualizar la configuración sin reiniciar el estado de la aplicación. |
| **Bandeja de Alertas** | `NotificationCenterView.vue` / `Notificaciones.vue` | Sub-sistema reactivo centralizado conectado a `notificacionesStore`. Mantiene un array dinámico en memoria acoplado a la API `localStorage` para la persistencia temporal de avisos (`JSON.parse` / `JSON.stringify`). Utiliza componentes de animación como `<TransitionGroup>` para garantizar transiciones fluidas. |
| **Perfil y Seguridad** | `UserProfileView.vue` | Permite la auditoría individual de la ficha del usuario con sesión activa. Implementa propiedades computadas que actúan como filtros booleanos para evaluar la matriz de permisos y roles (`esAdmin`, `esGestor`) extraídos directamente de `authStore`. |
| **Gestión de Voluntarios** | `AdminVoluntariosView.vue` | Módulo de gestión del personal voluntario con estrategia de persistencia en local storage y comunicación con la store. Permite búsquedas reactivas, filtrado dinámico y eliminación atómica de registros en memoria. |
| **Listado de Personal** | `AdminListaPersonalView.vue` | Panel de alta densidad operativa diseñado con un layout elástico e interactivo (con breakpoint responsivo en 900px). Permite la captura, definición de cronogramas y alta de trabajadores. Utiliza utilidades de clonado e inmutabilidad en las colecciones del store de autenticación (`authStore`) y formateo de datos mediante diccionarios estáticos indexados. |
| **Gestión de Socios** | `AdminSocioView.vue` | Módulo específico integrado dentro del panel general de personal (`/admin-personal/socio`) para el alta, seguimiento y gestión de socios del proyecto. |
| **Gestión de Beneficiarios** | `AdminBeneficiariosView.vue` | Vista destinada a la administración, consulta y auditoría de los beneficiarios vinculados a las distintas líneas de actuación. |
| **Detalle Individual de Personal** | `PersonalDetailView.vue` | Ficha operativa vinculada por parámetro dinámico (`route.params.id`) para la inspección y edición detallada del expediente individual de un trabajador o integrante. |
| **Estadísticas Visuales** | `AdminStatsView.vue` | Capa de inteligencia de negocio que transforma métricas de equipo en gráficos interactivos sobre elementos Canvas mediante **Chart.js**. Incorpora una llamada explícita a `.destroy()` dentro del hook de ciclo de vida `onBeforeUnmount` para liberar memoria. Configura el parámetro `maintainAspectRatio: false` para evitar deformaciones en resoluciones móviles por debajo de 900px. |
| **Módulo de Trámites** | `AdminTramitesView.vue` | Panel exclusivo de tramitación. Incorpora formularios reactivos dinámicos para registrar y gestionar vacaciones, permisos, bajas IT y asuntos propios. Modifica el estado global a través de métodos expuestos por `authStore`. |
| **Diseño de Proyectos** | `ProjectDetailView.vue` / `DisenoProyectoView.vue` | Vista contenedora y panel general de expedientes de proyectos. Muestra el estado global de ejecución e hitos asociados consumiendo los métodos CRUD de proyectos definidos en `authStore`. |
| **Ficha Técnica de Proyecto** | `ProjectDetailsView.vue` | Ficha operativa de lectura y edición detallada vinculada mediante parámetro de ruta activa (`route.params.id`). Bloquea la renderización estructural mediante la compuerta lógica `v-if="project"` para neutralizar fallos de hidratación durante la carga asíncrona de datos. Aisla la creación de subtareas y formateo de presupuestos/cuotas contables mediante `.toLocaleString()`. |


---


###  Diseño visual


* **Paleta de Colores:** Basada en una arquitectura elástica y limpia con variables CSS de la página web. Aplica códigos cromáticos semánticos para el estado de tareas y expedientes (como tonos morados/lilas para elementos pendientes y tonos verdes/esmeralda para actividades validadas o completadas). El sistema soporta adaptación visual mediante clases condicionales manteniendo la integridad del estado global de la aplicación.
* **Tipografía:** Escalado de fuentes estandarizado y controlado globalmente por el framework mediante utilidades CSS y familias tipográficas del sistema (`sans-serif` / `system-ui`). Garantiza una legibilidad óptima en cualquier densidad de pantalla, manteniendo una jerarquía visual estricta para la correcta visualización de datos administrativos complejos.
* **Sistema de Diseño y Estructura:** Organizado sobre estructuras dinámicas adaptativas que combinan Flexbox y CSS Grid en función del módulo operativo (evitando layouts rígidos fijos). La interfaz se complementa con insignias visuales dinámicas (*badges*), tarjetas contenedoras elevadas y tablas interactivas con sombras suaves para discriminar estados de expedientes, permisos y tareas.
* **Diseño Responsivo (Responsive Design):** Disposición de rejilla y contenedores elásticos con reestructuración automática a un flujo unidimensional vertical elástico por debajo del punto de ruptura (*breakpoint*) móvil homogéneo establecido estrictamente en los 900px (`@media (max-width: 900px)`). Al cruzar dicho umbral, elementos como la barra lateral (*sidebar*) y las estructuras multicolumna se colapsan o adoptan ancho completo (`width: 100%`), garantizando una navegación fluida en dispositivos móviles.


> #### Nota Técnica: Aislamiento Estilístico y Adaptabilidad de Gráficos
>
> * **Estilos Encapsulados (`scoped`):** Para asegurar la integridad del sistema de diseño y evitar colisiones globales de CSS, los componentes implementan el atributo `<style scoped>` en sus archivos `.vue`. Esto garantiza que las reglas visuales queden confinadas estrictamente al perímetro del componente, salvo en reglas globales de maquetación base ubicadas en el archivo principal de estilos.
> * **Proporcionalidad de Gráficos:** Todo componente analítico que renderice elementos visuales dinámicos sobre elementos Canvas (como la vista de estadísticas `AdminStatsView.vue` mediante **Chart.js**) mantiene configurado el parámetro `maintainAspectRatio: false`, combinado con un contenedor superior de posición relativa y dimensiones explícitas (`position: relative; width: 100%; height: ...`). Esta técnica previene desbordamientos de layout, evita deformaciones del lienzo al redimensionar la ventana y garantiza una adaptabilidad nativa en dispositivos móviles.

