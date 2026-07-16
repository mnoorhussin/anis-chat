// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anis.chat',
  devToolbar: { enabled: false },
  // Bilingual routing: /en (default) and /ar, both prefixed for clean hreflang.
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    icon({
      iconDir: 'src/icons',
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ar: 'ar',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
