// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://seongwonim.github.io',
  base: '/optics',
  vite: {
    plugins: [tailwindcss()],
  },
});