# palehour-site

Sitio web del estudio Palehour, hecho con [Astro](https://astro.build/) como sitio estático.

Publicado en: https://palehour.github.io/palehour-site/

## Correr localmente

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:4321/palehour-site/
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ localmente
```

## Publicación

Cada push a `main` dispara el workflow `.github/workflows/deploy.yml`, que compila el sitio con Astro y lo publica en GitHub Pages. También se puede correr a mano desde la pestaña Actions (`workflow_dispatch`).

`main` está protegida: los cambios entran por pull request (squash merge).

## Dominio propio

Si se agrega un dominio (p. ej. `palehour.com`), hay que cambiar `site` y quitar `base` en `astro.config.mjs`, y configurar el dominio en Settings → Pages.
