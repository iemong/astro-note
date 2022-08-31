import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import svgr from 'vite-plugin-svgr';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), react()],
  vite: {
    plugins: [svgr()]
  }
});