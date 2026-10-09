// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (sitio de organización): el repo Palehour/palehour.github.io
// se publica en la raíz de https://palehour.github.io, así que no hace falta `base`.
// Los links y assets se arman con import.meta.env.BASE_URL ('/').
// Si más adelante se agrega un dominio propio (p. ej. palehour.com),
// cambiar `site` a ese dominio y configurarlo en Settings → Pages.
export default defineConfig({
  site: 'https://palehour.github.io',
});
