// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import settings from './src/data/site-settings.json' assert { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: settings.siteUrl,
  integrations: [sitemap()],
});
