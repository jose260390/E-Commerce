# Catálogo de Smartphones - Tarea Final Módulo 1 Diplomado

Este es un proyecto web desarrollado con [Astro](https://astro.build/), que muestra un catálogo de smartphones obtenidos desde una API pública. Incluye un buscador dinámico que filtra los productos en tiempo real por nombre.

---

## Características

- Catálogo de productos en tarjetas con diseño responsivo
- Filtro en tiempo real por nombre de producto
- Mensaje automático cuando no hay resultados
- Código modular (HTML, CSS, JS separados)
- Estilo moderno con Flexbox
- Imagenes ajustadas para verse completas sin recorte

---

## Tecnologías utilizadas

- [Astro](https://astro.build/)
- HTML5/CSS3
- JavaScript
- API pública: `https://dummyjson.com/products/category/smartphones`

---

## Estructura del proyecto

```
.
├── public/
│   ├── scripts/
│   │   └── script.js           ← Buscador dinámico
│   └── styles/
│       └── style.css           ← Estilos generales
├── src/
│   ├── components/
│   │   └── Product.astro       ← Componente para cada tarjeta
        └── Smartphones.astro   ← Página principal del catálogo
│   └── pages/
│       └── index.astro         ← Página inicial

--
