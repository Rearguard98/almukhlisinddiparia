// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
  vite:{
      plugins:[tailwindcss()],
      build: {
      minify: false,
    },
  },

  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.json',
    }
  }),
});