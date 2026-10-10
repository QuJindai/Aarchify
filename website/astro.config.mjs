import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.VERCEL === '1' ? 'https://aarchify.vercel.app' : 'https://tt-a1i.github.io',
  base: process.env.VERCEL === '1' ? '/' : '/archify',
  output: 'static',
  publicDir: './.public',
  compressHTML: false,
  build: { format: 'file' },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
