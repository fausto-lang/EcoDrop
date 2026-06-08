# EcoDrop - Aplicación Integrada de Gestión de Residuos

## 🌍 Descripción

EcoDrop es una aplicación web unificada para la gestión integral de residuos y reciclaje. Combina todas las funcionalidades en una sola página web responsiva con navegación fluida entre módulos.

## 📱 Módulos Disponibles

La aplicación integra 5 módulos principales accesibles desde la barra lateral:

1. **Dashboard** - Panel de control con métricas generales
   - Material recuperado
   - Ganancias estimadas
   - Impacto ambiental
   - Gráficos de residuos por categoría

2. **Clasificar** - Clasificación inteligente de residuos
   - Reconocimiento por imagen
   - Reconocimiento por voz
   - Categorías predefinidas
   - Sugerencias de IA en tiempo real

3. **Inventario** - Gestión del inventario de materiales
   - Tabla de residuos registrados
   - Métricas de peso y valor
   - Filtros y búsqueda
   - Exportación de datos

4. **Ranking** - Sistema de gamificación
   - Puntos y niveles de usuarios
   - Top recicladores
   - Logros y medallas
   - Metas ambientales

5. **Informes** - Reportes económicos
   - Ingresos por tipo de material
   - Comparativas mensuales
   - Impacto económico circular
   - Descargas en Excel y PDF

## 🚀 Inicio Rápido

### Opción 1: Abrir directamente
```bash
# Simplemente abre index.html en tu navegador
open index.html
```

### Opción 2: Usando servidor local
```bash
# Python 3
python -m http.server 8000

# Luego accede a http://localhost:8000/index.html
```

### Opción 3: Node.js
```bash
# Con http-server
npx http-server

# O con Live Server
npx live-server
```

## 🎨 Estructura

```
EcoDrop/
├── index.html          # Aplicación principal unificada
├── css/
│   ├── estilos.css     # Estilos principales (incluye todos los módulos)
│   ├── clasificar.css  # Estilos del módulo Clasificar
│   ├── inventario.css  # Estilos del módulo Inventario
│   ├── ranking.css     # Estilos del módulo Ranking
│   └── informes.css    # Estilos del módulo Informes
├── js/
│   └── app.js          # Lógica de navegación SPA
└── README.md           # Este archivo
```

## 💡 Características Principales

✅ **Interfaz Unificada** - Una sola página con navegación entre módulos
✅ **Diseño Responsivo** - Funciona en cualquier dispositivo
✅ **Navegación Fluida** - Sin recargas de página (SPA)
✅ **Estilos Consistentes** - Interfaz cohesiva en todos los módulos
✅ **Material Icons** - Iconos modernos de Google

## 🛠️ Personalización

### Cambiar entre módulos
Haz clic en los elementos de la barra lateral izquierda:
- **Dashboard** - Resumen general
- **Clasificar** - Herramientas de clasificación
- **Inventario** - Gestión de materiales
- **Ranking** - Sistema de gamificación
- **Informes** - Reportes económicos

### Modificar estilos
Todos los estilos CSS están en la carpeta `css/`:
- Edita los archivos CSS correspondientes a cada módulo
- Los cambios se reflejarán inmediatamente

### Agregar funcionalidad
Edita `js/app.js` para agregar más interactividad a los botones y formularios.

## 📊 Datos de Ejemplo

La aplicación incluye datos de ejemplo precargados en:
- Tablas de inventario
- Gráficos de tendencias
- Información de usuarios en ranking
- Métricas financieras

## 🔧 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar Google Fonts e iconos)
- No requiere backend ni base de datos

## 📝 Notas

- La aplicación es completamente funcional en una sola página HTML
- Los datos se reinician al recargar la página (sin persistencia)
- Todos los estilos CSS originales se mantienen intactos
- La navegación es totalmente integrada en una SPA (Single Page Application)