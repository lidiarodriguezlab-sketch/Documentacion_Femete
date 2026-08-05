---
title: Ámbito de Aplicación y Responsable del Tratamiento
description: A guide in my new Starlight docs site.
---


### 1. Identificación de la Entidad Corporativa Responsable
---

El responsable del tratamiento de los datos de carácter personal recabados a través de esta aplicación es la **Asociación Domitila Hernández**, entidad sin ánimo de lucro orientada a la igualdad de oportunidades, la formación, la empleabilidad y la inclusión social en Canarias.

La aplicación web progresiva (PWA) de gestión operativa constituye una herramienta de uso estrictamente corporativo e interno, por lo que no se encuentra abierta ni disponible para el acceso del público general. El derecho de acceso y uso de la plataforma está limitado de forma exclusiva al personal explícitamente contratado, designado o autorizado por la **Asociación Domitila Hernández**, en el marco del desarrollo de sus funciones técnicas, administrativas o de coordinación.

Específicamente, el sistema restringe su uso a los perfiles involucrados en la gestión, seguimiento y ejecución de las obras, proyectos y las correspondientes acciones del itinerario formativo. Para garantizar este blindaje perimetral, el ingreso a la plataforma requiere una autenticación obligatoria y un control de accesos basado en roles asignados previamente por la dirección (tales como ADMIN, GESTOR o TÉCNICO). Queda expresamente prohibido cualquier intento de acceso, uso, reproducción o distribución de los datos contenidos en el sistema por parte de terceros no autorizados o ajenos a la organización.






### 2. Marco Normativo y Legislación Aplicable
---

El desarrollo, la explotación técnica y el uso operativo de esta aplicación web progresiva (PWA) de gestión interna están estrictamente sujetos al cumplimiento del marco jurídico vigente en materia de protección de datos, seguridad de la información y derecho laboral. Al tratarse de una herramienta cerrada y de uso corporativo exclusivo, la normativa aplicable no regula una relación con el público general, sino que delimita las garantías del personal interno, los colaboradores y la trazabilidad exigida por los organismos financiadores.

#####  Normativa de Ámbito Europeo (RGPD y Directivas Comunitarias)

A nivel de la Unión Europea, el tratamiento de datos de la plataforma se rige por:

* **Reglamento General de Protección de Datos (RGPD - Reglamento UE 2016/679):** Esta norma suprema fundamenta el diseño del software desde la perspectiva de la "privacidad por defecto y desde el diseño". Repercute obligando a la implantación técnica de las medidas de seguridad descritas en el Punto 6 (cifrado HTTPS/TLS, cookies seguras y control de accesos RBAC) para proteger la información laboral y de beneficiarios de accesos no autorizados. Asimismo, legitima los tratamientos basados en la ejecución contractual (Art. 6.1.b) y el cumplimiento de obligaciones legales (Art. 6.1.c) detallados en el Punto 4.
* **Directiva sobre la privacidad y las comunicaciones electrónicas (Directiva ePrivacy 2002/58/CE y sus modificaciones):** En el entorno específico de esta aplicación interna, esta directiva repercute directamente en la legitimación técnica de las Cookies HttpOnly y Secure (Punto 6.2) y el almacenamiento local del Service Worker (Punto 4.3). Al ser elementos puramente técnicos y estrictamente necesarios para la autenticación del empleado y el funcionamiento del Modo Offline de la PWA, la norma exime de la obligación de mostrar un banner de consentimiento de cookies, pero exige que su uso se limite a la seguridad y viabilidad del servicio interno.

##### Legislación de Ámbito Español (LOPDGDD y Normativa Laboral/Digital)
A nivel nacional, el sistema se alinea con el ordenamiento jurídico español a través de las siguientes normas que regulan los entornos digitales de trabajo y la gestión de fondos públicos:

* **Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD):** Esta ley complementa al RGPD en España e incide directamente en el entorno laboral a través de su Título X. Repercute de dos formas en el programa: primero, obliga a habilitar canales internos y claros para que los empleados y beneficiarios ejerzan sus derechos (Punto 7); segundo, delimita el uso de la aplicación en movilidad bajo el prisma del derecho a la desconexión digital, garantizando que el acceso a la plataforma PWA no implique una obligación de interactuar con el sistema fuera del horario de trabajo de los técnicos.



### 3. Base Jurídica y Finalidad del Tratamiento
---

#####  Ejecución del contrato laboral y gestión operativa
De conformidad con lo dispuesto en el Artículo 6.1.b) del Reglamento General de Protección de Datos (RGPD) y en consonancia con las facultades de control que otorga el Artículo 20.3 del Estatuto de los Trabajadores, el tratamiento de los datos del personal interno de la organización se fundamenta de manera principal en la ejecución de la relación laboral o contractual existente entre los trabajadores y la **Asociación Domitila Hernández**.

El uso y procesamiento de la información a través de esta aplicación es estrictamente necesario y obligatorio para el correcto desempeño de las funciones de los técnicos, gestores y personal autorizado. La plataforma constituye la herramienta operativa indispensable para la asignación de tareas, el reporte de incidencias y la coordinación diaria de los proyectos; por tanto, la negativa a facilitar dichos datos o la oposición a su tratamiento impediría el cumplimiento de las obligaciones contractuales inherentes a su puesto de trabajo.



### 4. Medidas de Seguridad Tecnológica (Cumplimiento RGPD)
---

##### Cifrado en tránsito (HTTPS/TLS)
Para asegurar el principio de confidencialidad e integridad exigido por el RGPD, la arquitectura multicapa de la aplicación cuenta con protocolos avanzados de cifrado perimetral.

Todo el tráfico de datos e hipertexto que fluye entre la interfaz de usuario (frontend alojado en Netlify), el servidor de aplicaciones (backend desarrollado en Spring Boot e instanciado en contenedores Docker) y el sistema de gestión de bases de datos relacionales (MariaDB) viaja de manera segura y encriptada bajo el protocolo HTTPS. El sistema implementa la versión más reciente y segura del protocolo criptográfico de seguridad de la capa de transporte (TLS - *Transport Layer Security*), garantizando de forma ininterrumpida que ninguna comunicación pueda ser interceptada, leída o manipulada por terceros ajenos a la organización durante su tránsito por la red.

##### Seguridad en autenticación mediante Cookies HttpOnly
El mecanismo de autenticación, sesión y autorización de usuarios autorizados se gestiona de manera centralizada mediante tokens estructurados de seguridad.

Con el fin de mitigar de forma activa vectores de ataque dirigidos al cliente, como el robo de sesiones mediante secuencias de comandos en sitios cruzados (ataques XSS - *Cross-Site Scripting*), las credenciales de sesión e identificadores de acceso jamás se almacenan en elementos de almacenamiento local del navegador accesibles por código (`LocalStorage` o `SessionStorage`). En su lugar, el servidor inyecta dichos identificadores en el cliente utilizando cookies de seguridad configuradas estrictamente con las siguientes directivas criptográficas:

* **HttpOnly:** Bloquea de raíz cualquier intento de acceso, lectura o manipulación de la cookie a través de scripts o código JavaScript ejecutado en el navegador.
* **Secure:** Fuerza al navegador a enviar la cookie de autenticación única y exclusivamente a través de conexiones cifradas bajo HTTPS.
* **SameSite (Strict/Lax):** Restringe el envío de la cookie ante solicitudes provenientes de sitios cruzados, blindando el sistema contra ataques de falsificación de peticiones en sitios cruzados (CSRF).

#####  Control de acceso basado en roles funcionales (RBAC)
La aplicación impone un principio estricto de segregación de funciones y control de accesos basado en roles funcionales (RBAC - *Role-Based Access Control*), asegurando que el personal acceda únicamente a la información indispensable para el desarrollo de sus tareas asignadas.

Los privilegios se encuentran segmentados de acuerdo a la naturaleza laboral del usuario dentro de la organización:

* **Técnico:** Dispone de un perfil restrictivo. Su interacción con el sistema se limita exclusivamente a visualizar, registrar y reportar las actividades, incidencias, tareas y beneficiarios asociados a los proyectos que tenga asignados en su itinerario, sin capacidad para alterar la configuración global del sistema.
* **Gestor:** Cuenta con permisos extendidos para coordinar múltiples proyectos, supervisar cronogramas, asignar recursos o personal laboral y visar reportes u hojas operativas.
* **Administrador:** Rol exclusivo reservado para la dirección de la entidad o el personal técnico de TI encargado del soporte. Únicamente este perfil tiene acceso perimetral al Panel de Administración para realizar altas/bajas lógicas globales, configurar roles, auditar registros inmutables y gestionar las directivas de seguridad de la base de datos de la aplicación.