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
  // Arabic-first: ar serves at the bare root, en is prefixed (/en).
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    icon({
      iconDir: 'src/icons',
    }),
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: {
          en: 'en',
          ar: 'ar',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Dev-only: allow proxied preview hosts (e.g. sandbox/live-preview domains).
    server: { allowedHosts: ['.e2b.app', 'localhost'] },
  },
});
