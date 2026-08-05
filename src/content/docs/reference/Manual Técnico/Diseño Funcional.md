---
title: Diseño Funcional
description: A guide in my new Starlight docs site.
---




### Mapa de Navegación


El flujo de la arquitectura *Single Page Application* (SPA) orquesta las vistas principales y secundarias del sistema. El acceso perimetral obliga a pasar por el portal de autenticación antes de habilitar el enrutamiento asíncrono y la evaluación de roles (RBAC) hacia los paneles de mando y sus módulos operativos derivados:


- **Nivel 1 (Acceso):**
  - `LoginView.vue` *(Portal de Autenticación)*


- **Nivel 2 (Mando Central):**
  - `DashboardGeneralView.vue` *(Panel de Administración General / Vista de Gestores)*
  - `workerDashboard.vue` *(Panel de Control Operativo para Técnicos)*


- **Nivel 3 (Módulos Base de Soporte):**
  - `SystemSettingsView.vue` *(Configuración del Sistema)*
  - `NotificationCenterView.vue` / `Notificaciones.vue` *(Bandeja de Alertas)*
  - `UserProfileView.vue` *(Perfil de Usuario y Matriz ACL)*


- **Nivel 3 (Módulos de Gestión y Operaciones):**
  - `AdminListaPersonalView.vue` *(Listado de Personal)*
  - `AdminVoluntariosView.vue` *(Gestión de Voluntarios)*
  - `AdminSocioView.vue` *(Gestión de Socios)*
  - `AdminBeneficiariosView.vue` *(Gestión de Beneficiarios)*
  - `AdminStatsView.vue` *(Estadísticas y Métricas Visuales)*
  - `AdminTramitesView.vue` *(Módulo de Trámites, Permisos y Solicitudes)*
  - `ProyectosView.vue` / `DisenoProyectoView.vue` *(Gestión y Panel General de Proyectos)*


- **Nivel 4 (Vistas de Detalle con Parámetros Dinámicos):**
  - `ProjectDetailView.vue` *(Detalle de Proyecto mediante parámetro dinámico)*
  - `PersonalDetailView.vue` *(Ficha Operativa y Auditoría Individual de Personal mediante parámetro dinámico)*


---

![Diseño Funcional](../Imagenes/Diseño%20funcional.png)


