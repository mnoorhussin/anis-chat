# Anis — marketing site

**Arabic-first**, bilingual (Arabic primary + English secondary) marketing website for **Anis** (أنيس, [anis.chat](https://anis.chat)) — **Arabic-first AI customer support** for businesses and agencies in the Arab world, Gulf first (KSA + UAE). It answers from your approved content — in the customer's own language — and hands off to your team when it can't find a reliable answer.

> **Design & brand:** the visual identity ("Dar" — warm paper, ink, oasis green, saffron i'jām dots; Amiri/Fraunces display type) and the Arabic-first architecture are specified in [`docs/DESIGN-DIRECTION.md`](docs/DESIGN-DIRECTION.md). Arabic serves at the bare root (`/`); English lives under `/en`. `src/i18n/ar.ts` is the copy source of truth — `en.ts` is typed against it.

Pre-launch: every CTA captures an email (waitlist / book-a-demo). No live product or backend required.

> **Truthful-claims gate:** every marketing claim must map to a real feature. Unfinished channels (WhatsApp/Messenger/…) are marked `Soon`; the landing dashboard is labelled `Sample`; unverified metrics (e.g. "<1s", a hard "40+ languages", a real resolution %) are not shown as fact. The product spec these claims map to lives in [`docs/PRODUCT-REQUIREMENTS.md`](docs/PRODUCT-REQUIREMENTS.md) — read it before enabling any claim.

- **Stack:** [Astro 5](https://astro.build) · [Tailwind CSS v4](https://tailwindcss.com) · TypeScript · zero client-side framework (all interactivity is tiny inline vanilla JS)
- **Output:** fully static, **0 JS bundles** shipped, self-hosted fonts, AA-contrast, GDPR-aware
- **Languages:** `/` (Arabic, default, RTL) and `/en`, with correct `dir`, hreflang, and per-locale typography

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
  fonts/                 Self-hosted woff2 (Amiri, Fraunces, Inter, IBM Plex Sans Arabic)
  favicon.svg, *.png     Brand mark + full favicon set
  og-image.png           1200×630 social card
  robots.txt, site.webmanifest
src/
  i18n/
    ar.ts                Arabic copy — SINGLE SOURCE OF TRUTH (exports the `Dict` type)
    en.ts                English copy — typed as `Dict`, so AR/EN stay in sync at compile time
    legal.ts             Privacy / Terms / Cookie policy content (EN + AR)
    config.ts, utils.ts  Locale helpers (dir, alternate paths, currency formatting)
  styles/global.css      Design tokens (@theme), fonts, light/dark, motion, utilities
  layouts/               BaseLayout · PageLayout · LegalLayout
  components/
    nav/ layout/ ui/ forms/ brand/ sections/
  pages/
    index.astro …        Arabic pages at the root (index + privacy + terms + cookies)
    en/                  English versions of the same pages
scripts/                 Dev tooling (asset generation, screenshots) — not shipped
```

---

## Editing copy & translations

**All copy lives in translation dictionaries — never hardcode text in components.**

- Author copy in Arabic first: [`src/i18n/ar.ts`](src/i18n/ar.ts). Its shape defines the `Dict` type.
- Adapt English in [`src/i18n/en.ts`](src/i18n/en.ts). It is typed as `Dict`, so if you add/rename a key in Arabic, TypeScript will error until English matches. Run `npx tsc --noEmit` to check parity.
- Legal page content is in [`src/i18n/legal.ts`](src/i18n/legal.ts).

Components read copy via `getDict(lang)`; the active locale comes from the URL.

## Adding / reordering sections

Home sections are composed in [`src/components/sections/HomeSections.astro`](src/components/sections/HomeSections.astro). Each section is a self-contained `.astro` component that pulls its copy from the dictionary.

## Design tokens

Colors, type scale, radii, shadows, and motion live in [`src/styles/global.css`](src/styles/global.css) as Tailwind v4 `@theme` tokens plus themeable CSS variables. The palette is paper `#FAF4E8` / ink `#231A10` / oasis `#0F6B5C` / saffron `#E3A84E` — no gradients, no glass. Light and dark (espresso) are both supported. Theme choice persists in `localStorage` (`anis-theme`) with a no-flash inline script.

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
- [ ] **Pricing:** plans/limits/prices live in `src/i18n/*.ts` under `pricing.tiers` (USD: Free $0 · Starter $29 · Growth $79 · Pro $149 · Agency $299). Confirm each plan is profitable against real model/hosting/storage/channel costs before committing.
- [ ] **Claims → features:** keep the site in sync with [`docs/PRODUCT-REQUIREMENTS.md`](docs/PRODUCT-REQUIREMENTS.md). Only un-`Soon` a channel, un-`Sample` the dashboard, or add a metric once the backing feature is real and (for metrics) measured.
- [ ] **OG image:** regenerate with `scripts/generate-assets.mjs` (currently renders in a system font unless you self-host Satoshi for it).

---

## Deployment

Fully static output in `dist/` — no adapter, no server. Primary host: **Vercel**.

### Vercel (primary)

1. **Import the repo** at [vercel.com/new](https://vercel.com/new). Vercel auto-detects the Astro preset:
   - Framework: **Astro** · Build: `npm run build` · Output: `dist` (also pinned in `vercel.json`).
2. **Environment variables** (Project → Settings → Environment Variables) — set for Production (and Preview):
   - `PUBLIC_FORMSPREE_ID` — lead-capture form ID (empty ⇒ `mailto:` fallback).
   - `PUBLIC_PLAUSIBLE_DOMAIN` — analytics domain (empty ⇒ analytics off).
3. **Domain:** add `anis.chat` (and `www` → redirect to apex). Node is pinned to **22.x** via `package.json` `engines`.

[`vercel.json`](vercel.json) sets: trailing-slash on (matches canonical/hreflang/sitemap), immutable caching for `/_astro/*` and `/fonts/*`, and baseline security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS). No CSP is set, to keep the inline theme/consent scripts and Plausible/Formspree working — add one deliberately if you harden further.

> **Subdomains:** this project is `anis.chat` only. `app.anis.chat` / `api.anis.chat` / `cdn.anis.chat` are the **product** (`anis-app` repo, self-hosted) — configure those as separate DNS records, not here.

### Other hosts

Any static host works (`npm run build` → serve `dist/`). A `netlify.toml` with equivalent cache headers is included for Netlify; Cloudflare Pages auto-detects Astro. `robots.txt` and the auto-generated `sitemap-index.xml` point at `https://anis.chat` — update `site` in `astro.config.mjs` if the domain changes.

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
