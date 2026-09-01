// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://benrbray.com',
  base: '/courses',
  build: {
    format: "file"
  },
  integrations: [mdx()],
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase"
      }
    },
  }
});