// Textos del sitio en español. Para sumar inglés: crear en.ts con la misma forma
// y una página en src/pages/en/index.astro que lo pase a los componentes.

export const es = {
  lang: 'es',
  locale: 'es_AR',
  meta: {
    title: 'Palehour — Estudio independiente de videojuegos',
    description:
      'Palehour es un estudio independiente de videojuegos. Primer juego: Londinium, un city builder en el Whitechapel de 1850. En desarrollo.',
    ogImageAlt: 'Arco pálido sobre niebla y el wordmark PALEHOUR sobre fondo negro',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Palehour, inicio',
    nav: 'Principal',
    language: 'Idioma',
    soon: 'próximamente',
    newTab: '(se abre en una pestaña nueva)',
  },
  nav: [
    { href: '#londinium', label: 'Londinium' },
    { href: '#estudio', label: 'Estudio' },
    { href: '#contacto', label: 'Contacto' },
  ],
  hero: {
    tagline: 'Estudio independiente de videojuegos',
    skipIntro: 'Saltar intro',
    scroll: 'Descender',
  },
  londinium: {
    numeral: 'I',
    eyebrow: 'Primer juego',
    title: 'Londinium',
    status: 'En desarrollo',
    genre: 'City builder',
    body:
      'Un city builder ambientado en Londres. Empieza en Whitechapel, en la década de 1850, y avanza desde la época victoriana: calles, oficios y cadenas de producción que crecen entre el hollín y la niebla.',
    facts: [
      { term: 'Ambientación', value: 'Whitechapel, 1850s' },
      // Sumar { term: 'Plataformas', ... } y { term: 'Lanzamiento', ... } cuando estén definidos.
    ],
    // Agregar capturas acá cuando existan (archivos en public/screens/):
    // { src: 'screens/londinium-01.webp', alt: 'Descripción de la escena', caption: 'Leyenda' }
    shots: [] as { src: string; alt: string; caption?: string }[],
    cta: 'Seguir el desarrollo',
    ctaNote: 'Novedades en X y en GitHub.',
  },
  studio: {
    numeral: 'II',
    eyebrow: 'Estudio',
    title: 'Estudio',
    body:
      'Palehour es un estudio independiente de videojuegos. Hacemos juegos lentos y atmosféricos: ciudades bajo la niebla, silencio, y algo enorme más allá de la luz.',
  },
  contact: {
    numeral: 'III',
    eyebrow: 'Contacto',
    title: 'Contacto',
    email: 'palehourstudios@gmail.com',
    links: [
      { label: 'X', value: '@palehour', href: 'https://x.com/palehour' },
      { label: 'GitHub', value: 'github.com/Palehour', href: 'https://github.com/Palehour' },
    ],
  },
  footer: {
    backToTop: 'Volver arriba',
  },
};

export type Copy = typeof es;
