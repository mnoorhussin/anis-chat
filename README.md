# Anis — marketing site

Premium, bilingual (English + Arabic, full RTL) marketing website for **Anis** (أنيس, [anis.chat](https://anis.chat)) — the AI companion that answers your customers 24/7, in every language.

Pre-launch: every CTA captures an email (waitlist / book-a-demo). No live product or backend required.

- **Stack:** [Astro 5](https://astro.build) · [Tailwind CSS v4](https://tailwindcss.com) · TypeScript · zero client-side framework (all interactivity is tiny inline vanilla JS)
- **Output:** fully static, **0 JS bundles** shipped, self-hosted fonts, AA-contrast, GDPR-aware
- **Languages:** `/en` (default) and `/ar`, with correct `dir`, hreflang, and per-locale typography

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/  (static)
npm run preview    # preview the production build
```

Node 20+ recommended (built with Node 22).

---

## Project structure

```
public/
  fonts/                 Self-hosted woff2 (Satoshi, Inter, IBM Plex Sans Arabic)
  favicon.svg, *.png     Brand mark + full favicon set
  og-image.png           1200×630 social card
  robots.txt, site.webmanifest
src/
  i18n/
    en.ts                English copy — SINGLE SOURCE OF TRUTH (exports the `Dict` type)
    ar.ts                Arabic copy — typed as `Dict`, so EN/AR stay in sync at compile time
    legal.ts             Privacy / Terms / Cookie policy content (EN + AR)
    config.ts, utils.ts  Locale helpers (dir, alternate paths, currency formatting)
  styles/global.css      Design tokens (@theme), fonts, light/dark, motion, utilities
  layouts/               BaseLayout · PageLayout · LegalLayout
  components/
    nav/ layout/ ui/ forms/ brand/ sections/
  pages/
    index.astro          Root: client-side language redirect
    en/  ar/             index + privacy + terms + cookies per locale
scripts/                 Dev tooling (asset generation, screenshots) — not shipped
```

---

## Editing copy & translations

**All copy lives in translation dictionaries — never hardcode text in components.**

- Edit English in [`src/i18n/en.ts`](src/i18n/en.ts). Its shape defines the `Dict` type.
- Edit Arabic in [`src/i18n/ar.ts`](src/i18n/ar.ts). It is typed as `Dict`, so if you add/rename a key in English, TypeScript will error until Arabic matches. Run `npx tsc --noEmit` to check parity.
- Legal page content is in [`src/i18n/legal.ts`](src/i18n/legal.ts).

Components read copy via `getDict(lang)`; the active locale comes from the URL.

## Adding / reordering sections

Home sections are composed in [`src/components/sections/HomeSections.astro`](src/components/sections/HomeSections.astro). Each section is a self-contained `.astro` component that pulls its copy from the dictionary.

## Design tokens

Colors, type scale, radii, shadows, and motion live in [`src/styles/global.css`](src/styles/global.css) as Tailwind v4 `@theme` tokens plus themeable CSS variables. The signature gradient is Iris `#5A5AF0` → Aqua `#37E0C8`. Light and dark are both supported; the hero is always dark. Theme choice persists in `localStorage` (`anis-theme`) with a no-flash inline script.

## Brand assets

The logo mark is `public/favicon.svg`. To regenerate every raster asset (favicons, `.ico`, apple-touch, PWA icons, OG image) from the mark:

```bash
node scripts/generate-assets.mjs
```

---

## Configuration

Copy `.env.example` → `.env`:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_FORMSPREE_ID` | [Formspree](https://formspree.io) form ID for lead capture. If empty, forms fall back to a `mailto:` to `hello@anis.chat`. |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Your [Plausible](https://plausible.io) domain. Analytics load **only** after analytics consent. Empty = analytics off. |

### Lead capture

Both the footer newsletter and the final CTA are `[data-lead-form]` forms enhanced by [`LeadScript.astro`](src/components/forms/LeadScript.astro). Set `PUBLIC_FORMSPREE_ID` to POST submissions; otherwise a `mailto:` fallback opens the visitor's mail client.

### Privacy / GDPR

- Cookie banner ([`CookieConsent.astro`](src/components/CookieConsent.astro)) rejects non-essential cookies by default. Choice is stored in `localStorage` (`anis-consent`) and can be changed anytime via the footer "Preferences" link.
- Analytics never load without explicit consent.
- Privacy Policy, Terms, and Cookie Policy pages are generated from `src/i18n/legal.ts`.

---

## ⚠️ Complete before launch

These are intentional placeholders:

- [ ] **Legal:** replace `[Anis — legal entity to be confirmed]` and `[jurisdiction to be confirmed]` in `src/i18n/legal.ts`, and have the policies reviewed by a lawyer.
- [ ] **Forms:** set `PUBLIC_FORMSPREE_ID`.
- [ ] **Analytics:** set `PUBLIC_PLAUSIBLE_DOMAIN`.
- [ ] **Socials:** confirm/replace the handles in `src/lib/config.ts` (`SOCIALS`).
- [ ] **Footer:** the "About" and "Blog" links point to `#` — wire them up or remove them when those pages exist.
- [ ] **Pricing/OG:** review pricing numbers in `src/i18n/*.ts`; the OG image renders in a system font (regenerate with `scripts/generate-assets.mjs` if you self-host Satoshi for it).

---

## Deployment

Static output in `dist/` — deploy to any static host.

**Build command:** `npm run build`  **Output directory:** `dist`

- **Cloudflare Pages / Vercel / Netlify:** auto-detect Astro; the above settings work out of the box. A `netlify.toml` with long-cache headers for fingerprinted assets is included.
- Add your `PUBLIC_*` environment variables in the host's dashboard.
- `robots.txt` and `sitemap-index.xml` (auto-generated) point at `https://anis.chat`; update `site` in `astro.config.mjs` if the domain changes.

---

## Accessibility & performance

- Semantic HTML, skip-link, focus-visible rings, `aria` labels, bilingual `aria` text.
- Text colors meet WCAG AA contrast in both themes.
- `prefers-reduced-motion` disables animations and scroll-reveal.
- Ships **no framework JS**; fonts are self-hosted and preloaded per locale; images/icons are inline SVG.

## Fonts & licenses

Self-hosted in `public/fonts/`, all free for commercial use:

- **Satoshi** — Fontshare / Indian Type Foundry Free Font License (Latin headings)
- **Inter** — SIL Open Font License 1.1 (Latin body)
- **IBM Plex Sans Arabic** — SIL Open Font License 1.1 (Arabic)

---

Built for Europe & the Arab world.
