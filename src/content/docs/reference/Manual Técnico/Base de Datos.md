---
title: Diseño de Base de Datos
description: A guide in my new Starlight docs site.
---




###  Sistema gestor
El diseño y la gestión del almacenamiento de la información del sistema se estructuran bajo un modelo relacional. El entorno tecnológico de la base de datos está compuesto por las siguientes capas y herramientas:


* **SQL (Structured Query Language):** Se utiliza como el lenguaje estándar y universal para la definición, manipulación y consulta de todos los datos relacionales del sistema.
* **MariaDB (v12.3):** Actúa como el motor principal y el servidor del sistema donde reside la base de datos física, encargado de procesar las instrucciones SQL y asegurar el rendimiento transaccional.
* **MySQL (v8.0):** Se emplea como el ecosistema y la aplicación de base de datos de referencia bajo su última rama estable (Versión 8), garantizando total compatibilidad estructural, robustez y seguridad en el manejo de los tipos de datos.
* **Workbench:** Se utiliza como la extensión de MySQL y entorno visual de escritorio. A través de esta interfaz gráfica, el equipo técnico realiza el modelado de las tablas, la administración del esquema y la supervisión de las relaciones de forma intuitiva.


---


### Modelo entidad-relación
El modelo entidad-relación define la estructura lógica de los datos y la forma en que interactúan las tablas entre sí de acuerdo con el diccionario de datos Políticas de Privacidad y Términos de Serviciodel sistema.


A continuación, se presenta la representación gráfica del diseño (Diagrama ER) obtenida de forma directa mediante la ingeniería inversa de la base de datos en MySQL Workbench:

![Diagrama ER](../Imagenes/Digrama%20ER.png)


---


### Diccionario de datos
Para una consulta detallada sobre la especificación completa de tablas, campos, tipos de datos, claves primarias/foráneas y restricciones de integridad del sistema, puedes acceder al documento oficial a través del siguiente enlace:


Puedes ver el PDF incrustado aquí:
<embed src="/Diccionario_Datos.pdf" type="application/pdf" width="100%" height="570px"/>