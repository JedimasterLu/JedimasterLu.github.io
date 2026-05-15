// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const settings = require('./src/data/site-settings.json');

// https://astro.build/config
export default defineConfig({
  site: settings.siteUrl,
  integrations: [sitemap()],
});
