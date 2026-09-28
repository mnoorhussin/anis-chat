// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anis.chat',
  // Canonical URLs, hreflang, and the sitemap all use trailing slashes
  // (directory output). Enforce it so served URLs match and there are no
  // duplicate-content or redirect-chain surprises on Vercel.
  trailingSlash: 'always',
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
