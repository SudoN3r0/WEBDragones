# Reglas del proyecto — WEBDragones

Reglas que sigue la IA (y cualquier persona) al generar o modificar el código de esta web.

## 1. Estructura
- Web estática: solo `index.html`, `css/styles.css`, `js/main.js` e `img/`.
- Sin frameworks ni dependencias de compilación: debe funcionar abriendo `index.html` y en GitHub Pages tal cual.
- Rutas siempre **relativas** (`img/dragon-rojo.jpg`, nunca `/img/...`) para que funcionen en `usuario.github.io/WEBDragones/`.
- Nombres de archivo en minúsculas, sin espacios ni tildes, separados por guiones.

## 2. HTML
- HTML5 semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- `lang="es"`, `meta charset` y `meta viewport` obligatorios.
- Un único `h1` por página; jerarquía de títulos sin saltos.
- Todas las imágenes con `alt` descriptivo, `width`/`height` y `loading="lazy"` (salvo la de portada).

## 3. Estilo visual
- Paleta definida **solo** con variables CSS en `:root`; prohibido usar colores sueltos en el resto del CSS.
  - Pergamino `#f4ead5` · Tinta `#2b1d14` · Rojo dragón `#a4161a` · Brasa `#e85d04` · Oro `#c9a227` · Hielo `#5e8fb0`
- Tipografías (Google Fonts): **Cinzel** para títulos, **Lora** para el texto.
- Estética de bestiario medieval: fondos claros tipo pergamino que encajan con las ilustraciones de fondo blanco.
- Contraste mínimo AA (4.5:1) en el texto.

## 4. Responsive y accesibilidad
- Mobile first; puntos de corte a 640px y 960px.
- Sin scroll horizontal en móvil.
- Navegación usable con teclado y foco visible.
- Respetar `prefers-reduced-motion`: desactivar animaciones si el usuario lo pide.

## 5. JavaScript
- Solo JS vanilla, sin librerías externas.
- Mejora progresiva: la web debe leerse completa aunque el JS falle.
- Sin `var`; usar `const`/`let`. Sin código comentado muerto.

## 6. Contenido
- Textos en español, tono cercano y con un toque épico.
- Nada de lorem ipsum en la versión publicada.

## 7. Git y publicación
- Commits pequeños y con mensaje descriptivo en español.
- Rama `main` publicada con GitHub Pages desde la raíz.
