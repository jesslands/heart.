# Heart Digital Banking

Una aplicación bancaria digital moderna construida con Next.js, TypeScript, Tailwind CSS y Styled Components.  
Este diseño fue inspirado en [Finzy - Finance Landing Page](https://dribbble.com/shots/25281703-Finzy-Finance-Landing-Page).

# Información de la prueba tecnica

Se realizo el despliegue usando dockploy (alternativa opensource de Vercel y Netlify) en un servidor y se uso el dominio [heart.koreforge.com](https://heart.koreforge.com/) para la prueba.
Tambien, se usa Cloudflare para publicar el dominio.


## Tecnologías Principales

- **Next.js 15.3** - Framework React con renderizado híbrido
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Utilidades CSS de bajo nivel
- **Styled Components** - CSS-in-JS para componentes con estilos dinámicos
- **Geist Font** - Tipografía moderna y legible

## Estructura del Proyecto

```
├── app/                # Rutas y layouts de Next.js
├── components/         # Componentes React reutilizables
├── jsons/             # Datos mockeados
├── types/             # Definiciones de tipos TypeScript
└── public/            # Activos estáticos
```

## Criterios de Diseño UI para Productos Financieros

1. **Confiabilidad y Profesionalismo**
   - Uso de colores corporativos consistentes (#5a5dc8)
   - Tipografía Geist para mejor legibilidad
   - Espaciado generoso para mejorar la lectura

2. **Jerarquía Visual Clara**
   - Cards destacadas para productos principales
   - Categorización clara con tabs
   - CTAs prominentes para acciones importantes

3. **Accesibilidad**
   - Alto contraste en textos
   - Etiquetas ARIA para lectores de pantalla
   - Navegación por teclado optimizada

## Decisiones Técnicas: Tailwind vs Styled Components

La aplicación utiliza un enfoque híbrido:

- **Tailwind CSS**: Utilizado para:
  - Layout y espaciado
  - Utilidades responsive
  - Estilos base consistentes

- **Styled Components**: Implementado para:
  - Componentes con lógica de estilo compleja
  - Estilos dinámicos basados en props
  - Componentes reutilizables con variantes

Esta combinación permite aprovechar la rapidez de desarrollo de Tailwind mientras mantenemos la flexibilidad de Styled Components para componentes más complejos.

## Escalabilidad en Producción

Para escalar esta aplicación en un entorno real:

1. **Arquitectura**
   - Implementar arquitectura de microservicios
   - Sistema orientado a eventos (Kafka)
   - Añadir capa de autenticación robusta
   - Integrar API Gateway para gestión de servicios

2. **Seguridad**
   - Implementar 2FA
   - Añadir encriptación end-to-end
   - Cumplir con regulaciones financieras de Colombia o del pais donde se despligue

3. **Funcionalidad**
   - Integrar con core bancario real
   - Añadir procesamiento de transacciones en tiempo real 
   - Implementar notificaciones push

## Herramientas de Rendimiento y Monitoreo

Para garantizar un rendimiento óptimo en producción:

1. **Monitoreo**
   - New Relic para monitoreo de aplicación
   - Datadog para logs y métricas
   - Sentry para tracking de errores

2. **Rendimiento**
   - Lighthouse para auditorías de performance
   - WebPageTest para pruebas de carga
   - Core Web Vitals monitoring

3. **Optimización**
   - CDN para assets estáticos (recomiendo Cloudflare por su costo y calidad)
   - Caching estratégico (recomiendo redis)
   - Lazy loading de componentes

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Mejoras Futuras

- Implementar autenticación de usuarios
- Añadir más productos financieros
- Integrar chat de soporte en tiempo real
- Añadir dashboard de usuario
- Implementar búsqueda y filtros avanzados (ya que solo esta disponible el filtro por tabs)