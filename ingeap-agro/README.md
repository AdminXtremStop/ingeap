# Repositorio Web INGEAP - Documentación y Resumen de Cambios

Este repositorio contiene la aplicación web oficial de **INGEAP** (Ingeniería y Automatización Agrícola e Industrial), desarrollada en **Angular 17** con la librería de componentes **PrimeNG 17**.

---

## 1. Descripción General del Proyecto

El sistema está estructurado modularmente para dar cobertura a las distintas líneas de negocio y soluciones tecnológicas de INGEAP:

* **INGEAP Corporativo (`/home`)**: Landing principal con la presentación institucional, visión corporativa, catálogo general de servicios, formulario de contacto e integración con redes sociales (Instagram).
* **INGEAP Agro (`/agro`)**: Portal especializado en agricultura de precisión, telemetría e integración de sensores inalámbricos **Aranet** (monitoreo climático, humedad de suelo, nivel de riego, CO2, radiación PAR, caudal DGA, etc.).
* **Salas Eléctricas (`/salas_electricas`)**: Módulo dedicado a la presentación de soluciones de infraestructura industrial, salas eléctricas modulares y servicios de ingeniería eléctrica.

### Tecnologías Principales
* **Framework**: Angular 17.0
* **Componentes UI**: PrimeNG 17.2, PrimeFlex 3.3, PrimeIcons
* **Mapas**: Leaflet 1.9 (monitoreo georreferenciado)
* **Formularios & Contacto**: EmailJS
* **Estilos**: SCSS modular y responsivo
* **Visualización de Datos**: Chart.js 3.3

---

## 2. Comparativa: Repositorio GitHub Base vs. Cambios Recientes

A continuación se detalla una comparación entre la versión base heredada del repositorio en GitHub y los desarrollos y refactorizaciones aplicados recientemente:

| Área / Módulo | Estado Original en GitHub | Estado Actual Refactorizado |
| :--- | :--- | :--- |
| **Arquitectura de Layout** | Dependía de la plantilla *Sakai* (`src/app/layout/` con `app.topbar`, `app.menu`, `app.sidebar`, `app.config`, etc.). | **Eliminación total del layout heredado**. Se removió la carpeta `src/app/layout` para implementar componentes limpios, modulares y ligeros. |
| **Componentes de INGEAP Agro** | Vista monolítica concentrada en `agro.component.html` y `agro.component.scss` (más de 1,000 líneas por archivo). | **Descomposición en subcomponentes modulares**: `agro-hero`, `agro-features`, `agro-metrics`, `agro-servicios`, `agro-map`, `agro-cta`. |
| **Estructura de Rutas** | Nombres de rutas genéricos y acoplados (`menu-servicio-1` a `7`). | **Rutas semánticas en `agro.routes.ts`** (`/agro/gestion-riego`, `/agro/aranet`, `/agro/telemetria`, etc.) con redirecciones automáticas en `app-routing.module.ts`. |
| **Limpieza de Código Muerto** | Duplicación de widgets (ej. `mapa-widget.component`) y headers obsoletos en subcarpetas. | **Depuración de componentes redundantemente declarados** y consolidación en componentes compartidos (`src/app/shared/`). |
| **Servicio de Instagram** | Consultas sin manejo defensivo de fallos o endpoints con IP estáticas. | **`InstagramService` refactorizado** con `HttpClient`, RxJS (`catchError`, `of([])`), soporte para variables en `environment.ts` y desacoplamiento de fallos de red. |
| **Organización de Assets** | Imágenes con nombres opacos (`1.png`, `11.1.jpg`, `diametro1.png`) y archivos sueltos en `assets/`. | **Limpieza y reorganización semántica** de assets dentro de `src/assets/ingeap-agro/aranet/` y eliminación de imágenes en desuso. |

---

## 3. Resumen Detallado de Cambios Realizados

1. **Modularización de `/agro`**:
   * Creación de subcomponentes específicos bajo `src/app/components/ingeap-agro/` para aislar responsabilidades (Encabezado/Hero, Métricas, Mapa interactivo, Listado de servicios y Llamado a la acción CTA).
   * Implementación de componentes **Standalone** con `loadComponent` en `agro.routes.ts` para carga diferida (*lazy loading*), reduciendo el peso inicial del paquete.

2. **Refactorización de Navegación y Rutas**:
   * Definición de rutas amigables SEO en `app-routing.module.ts`.
   * Preservación de la compatibilidad mediante redirecciones de rutas legacy (`/menu-servicio-X`) a las nuevas URLs canónicas (`/agro/X`).

3. **Optimización de Servicios e Integraciones**:
   * **`InstagramService`**: Incorpora manejo defensivo de errores; en caso de fallo del API de Instagram o expiración del token, el sitio continúa funcionando retornando un listado vacío sin bloquear la renderización de la UI.
   * **Manejo de Variables de Entorno**: Configuración de credenciales de EmailJS e Instagram centralizadas en `src/environments/environment.ts` y `environment.prod.ts`.

4. **Limpieza y Estilizado**:
   * Estandarización de hojas de estilo globales en `src/styles.scss` y hojas compartidas como `servicios-shared.scss`.
   * Eliminación de archivos temporales y assets sin uso.

---

## 4. Puntos Clave a Revisar

Para garantizar un despliegue seguro a producción y la correcta continuidad del desarrollo, se solicita al equipo técnico o jefatura revisar los siguientes puntos:

> [!IMPORTANT]
> **Checklist de Auditoría y Ajustes Recomendados:**

- [ ] **1. Revisión de Variables de Entorno y Credenciales en `environment.ts` / `environment.prod.ts`**:
  * **Instagram API**: Verificar que `instagramAccessToken` e `instagramUserId` pertenezcan a la cuenta productiva definitiva y que el token de acceso de larga duración se mantenga vigente.
  * **EmailJS**: Confirmar que los IDs de servicio y plantilla (`agroServiceId`, `agroTemplateId`, `publicKey`) sean los asignados para el entorno de producción oficial.

- [ ] **2. Incorporación al Control de Versiones (Archivos Untracked en Git)**:
  * Existen componentes y assets recién creados que no han sido versionados en Git (`src/app/components/ingeap-agro/agro-*`, assets de Aranet, `karma.conf.js`).
  * **Acción sugerida**: Ejecutar `git add .` y realizar el commit correspondiente antes de fusionar a ramas principales (`main` / `master` / `develop`).

- [ ] **3. Normalización de Nombres de Archivos en `src/assets/`**:
  * Se observan nombres de archivos con caracteres especiales, tildes y espacios (ej. `Diámetro 2.webp`, `CO2 2.webp`).
  * **Acción sugerida**: Renombrar a minúsculas y guiones (ej. `diametro-2.webp`, `co2-2.webp`) para evitar fallos de lectura en servidores de despliegue basados en Linux (servidores *case-sensitive* como Nginx/S3/Vercel/Netlify).

- [ ] **4. Optimización de Peso de Imágenes**:
  * Ciertos assets recién integrados en `src/assets/ingeap-agro/` poseen tamaños significativos (superiores a 4-8 MB, como `5.png`).
  * **Acción sugerida**: Convertir o comprimir las imágenes a formato WebP con resolución optimizada para no penalizar el tiempo de carga (Core Web Vitals / LCP).

- [ ] **5. Validación de Compilación y Bundling en Producción**:
  * Ejecutar localmente o en el pipeline de CI/CD:
    ```bash
    npm run build
    ```
  * Confirmar que la compilación AOT finalice sin advertencias críticas de presupuesto de bundle (*budget limits*) ni dependencias circulares.

- [ ] **6. Pruebas End-to-End de Formularios y Rutas**:
  * Probar el flujo de envío de mensajes en los formularios de contacto (`/home`, `/agro/contacto`, `/salas_electricas`).
  * Comprobar la navegación directa por URL y las redirecciones de las rutas legacy.

---

*Documentación técnica del proyecto.*
