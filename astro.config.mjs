// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (project site): https://palehour.github.io/palehour-site/
// Si más adelante se agrega un dominio propio (p. ej. palehour.com),
// cambiar `site` a ese dominio y quitar `base` (o dejarlo en '/').
export default defineConfig({
  site: 'https://palehour.github.io',
  base: '/palehour-site',
});
