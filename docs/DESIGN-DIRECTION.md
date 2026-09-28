# Anis — Brand identity & UI direction v3: **“Dar” (الدار)، عربيّ أولًا**

**Audience: Claude Code.** You built this project; this document redirects it. It replaces the
current visual direction (iris→aqua gradient, cool grays, dark glassy hero — the “Apple
glassmorphism” pass) with a complete new identity, AND records a business pivot:

> **v3 pivot — we no longer sell to Europe.** The market is the Arab world, **Gulf first
> (KSA + UAE)**. The site becomes **Arabic-primary**: `/` serves Arabic, RTL is the default
> direction, Arabic copy is the source of truth, and English becomes the secondary locale
> (kept for the region’s non-Arab founders and agencies, esp. Dubai). Pricing stays **USD**.
> The *product* remains multilingual — the assistant answers end-customers in their own
> language; “Arabic-first” describes who we serve and how well, never a limitation.

Everything else you built — the i18n architecture (its polarity flips, it doesn’t die), the
truthful-claims gate, zero-JS discipline, AA accessibility, the section structure — stays.

It covers **both repos**: `anis-chat` (marketing) and `anis-app` (dashboard, widget, backend).
`src/styles/global.css` in `anis-chat` remains the brand source of truth; `packages/tokens` in
`anis-app` must be re-synced to it (its test asserts parity, so drift fails the build — good).

---

## 0. TL;DR — the whole direction in one paragraph

Anis (أنيس) means **the companion — the person whose company puts you at ease**. The product is
Arabic hospitality delivered as software, sold to Arab businesses in their own language. So the
brand is **“Dar”**: warm paper, dark ink, one deep oasis-green, one saffron thread. Editorial,
print-like, typographically proud — a beautifully set **Arabic** book in which the Latin script
is the guest, not the host. Naskh display type leads (Amiri), Fraunces mirrors it on the
English pages; hairline rules, ink borders, generous whitespace, and a single ownable motif:
**the three i‘jām dots**. No glass, no blur, no neon gradient, no glow, no dark hero.

---

## 1. Research summary — why we’re moving, and to what

### 1.1 Why glassmorphism fails this project

- **It’s the house style of the generic AI startup.** Frosted panels + dark background + glowing
  gradient is what every AI tool shipped in 2023–2025. 2026 trend literature is unanimous that
  users now read this as template output: the “purple-gradient AI aesthetic” explicitly “signals
  template thinking more than design intent,” and the strongest current direction is the reaction
  *against* AI-generated sameness — brand-owned systems, expressive type, selective texture,
  human-crafted detail.
- **It contradicts the product’s core claims.** Anis sells *groundedness* (answers only from your
  sources), *honesty* (refusal is a success state), and *serious data control*. Translucency,
  blur, and glow are visual metaphors for vagueness. Paper and ink are visual metaphors for
  documents, sources, and the written record — exactly what we sell.
- **It’s hostile to Arabic type.** Blur + low-contrast translucent surfaces punish scripts with
  fine distinguishing details (dots, diacritics). Arabic on frosted glass at 60 % opacity is a
  legibility bug. Our brand must be the place where Arabic looks *better* than anywhere else.
- **It costs performance for nothing.** `backdrop-filter` is the most expensive paint effect in
  CSS; this site ships zero JS and brags about it. The visual language should be as light as the
  page weight.

### 1.2 Competitive whitespace — now measured against the Gulf market

| Player | Look | Signal to a Saudi/Emirati buyer |
| --- | --- | --- |
| Intercom / Fin, Zendesk | Western SaaS polish, EN-led, token AR localization | “Built for someone else; Arabic is a checkbox” |
| Crisp, Tidio, Chatbase | Blue/purple SaaS, glass cards | Interchangeable, EN-first |
| Regional bots (Widebot etc.) | Corporate blue, Latin-led UI, Arabic as translation | Local, but visually apologizing for it |

In the Gulf, the whitespace is even wider than it was in Europe: **nobody in this category has a
genuinely Arabic-native identity.** Every competitor’s Arabic experience is a translated
afterthought — mirrored layouts with letter-spaced Arabic, Latin-led lockups, cool-gray Western
chrome. A brand that is *set in Arabic from the first pixel* — written, not translated; Naskh-led,
not mirrored — is instantly distinguishable and speaks the buyer’s dignity, which matters
commercially in KSA/UAE where Arabic-language pride is state-level policy (Saudi Vision 2030
cultural programs, UAE Arabic Language Charter). The type system and the i‘jām motif are
load-bearing, not decoration.

### 1.3 The cultural angle — used correctly

Modern Arabic branding practice (UAE/KSA case-study literature) converges on: custom or
carefully-chosen Arabic typography as the storytelling tool; minimal geometric or Naskh-rooted
forms; bilingual lockups where Arabic leads; a restrained palette with one cultural accent
(terracotta, copper, deep green) — and explicitly *not* orientalist clip-art. Concretely, for us:

- **Never:** mosque silhouettes, crescent moons, lanterns, camels, desert-dune photos, arabesque
  wallpaper patterns, “Aladdin” display faces on the Latin side.
- **Yes:** the script itself as the hero; Naskh-rooted display type; the dots; hospitality
  language (the brand voice of a good host); warm material colors that read Mediterranean/Gulf
  without costume.

### 1.4 What reads as AI slop in 2026 — the blacklist

Hard-banned from both repos. If a change introduces one of these, it’s wrong:

1. Purple/violet→teal or purple→magenta gradients (our current brand gradient is literally this — it goes)
2. `backdrop-filter: blur()` anywhere; translucent “glass” cards
3. Dark hero with radial glow / aurora / mesh-gradient backgrounds
4. Floating 3D blobs, chrome donuts, “spline” objects
5. Emoji as design elements; sparkle ✨ iconography for “AI”
6. AI-generated illustrations/photos of people or offices
7. Bento-grid-because-bento-grid (only use a grid where content genuinely has 6+ parallel facts)
8. Fake metrics, fake logos, fake avatars (already banned by the truthful-claims gate — the new
   design must not smuggle them back in as “decoration”)
9. Inter/Satoshi tight-tracked bold headline + gradient text fill
10. Neobrutalism cosplay (thick black borders + hard yellow) — it’s the *new* template sameness

---

## 2. Brand strategy

### 2.1 The idea

**أنيس — the companion who keeps you company.** In Arabic, an *anīs* is the person whose presence
is comforting; the same root gives *uns* (conviviality) and *insān* (human being). The brand
promise: **your customers are never left alone, and never lied to.**

Brand metaphor: **the well-mannered host** (صاحب الدار). A great host welcomes you in your
language, answers what they know, says plainly when they don’t, and brings in the right person
when needed. That is literally the product spec (grounded answers → honest refusal → human
handoff). The design system’s job is to make the site *feel* like being hosted: warm, unhurried,
generous, precise.

### 2.2 Personality sliders

| ← | position | → |
| --- | --- | --- |
| Corporate | ●———— warm | Cute |
| Traditional | ——●—— rooted-modern | Futurist |
| Loud | ———●— assured | Timid |
| Technical | ——●—— craftsmanlike | Vague |

### 2.3 Voice & tone — Arabic is written first, English follows it

**Arabic (primary — the copy is authored in Arabic, then adapted to English):**
فصحى معاصرة (Modern Standard Arabic) with Gulf warmth — the register of a good Saudi/Emirati
business host: respectful, direct, unhurried. **Never dialect in body copy** (the site must not
read Najdi/Emirati/Egyptian), but examples, names, and scenarios are Gulf-flavored: متجر عطور في
الرياض، وكالة تسويق في دبي، توصيل خلال يوم عمل داخل المملكة. Hospitality vocabulary where
natural: أهلًا بك for UI moments; حيّاك الله stays out of body copy (too dialectal) but is
acceptable inside *sample chat conversations* where a Gulf merchant’s own bot might say it.
Never machine-translation word order. Western digits (0–9), as is standard in Gulf tech.

**English (secondary):** calm, concrete, first-person-plural, short sentences. Says “we don’t”
as easily as “we do.” No exclamation marks in body copy. No “supercharge / unleash /
revolutionize / 10x”. Numbers only when measured (existing rule — keep). The EN pages exist for
non-Arab founders and agency owners operating in the region — the copy may assume they are
*selling to Arabic-speaking customers*.

**The multilingual claim (both languages, everywhere it appears):** Anis answers end-customers
**in the customer’s own language** — Arabic at native quality, English and others as detected.
Phrase it as strength-plus-generosity, e.g. «يجيب بالعربية كأنه منها — وبلغة عميلك أيًّا كانت».
Never phrase Arabic-first as a limitation, and never claim a hard language count (claims gate).

**Tone by moment (both languages):**
- Marketing headlines: confident, warm, a little literary (the Naskh/serif carries this).
- Product UI (dashboard/widget): plain, brief, instructional.
- Refusal / error states: the most respectful writing in the product. A refusal is hosting, not
  failing: «لم أجد هذه المعلومة في مصادر الشركة — هل أحوّلك إلى أحد الموظفين؟»

### 2.4 Tagline directions (pick in copy pass, keep the current claims-gate)

- AR (primary): **«أنيس لعملائك، في كل وقت.»** / «ضيافة رقمية بلغة عملائك.» /
  «يجيب مما تعرفه شركتك — ويصمت عمّا لا تعرفه.»
- EN (adapted, not source): **“Every customer, received well.”** /
  “Arabic-first support that answers in any language.” / “The companion at your door.”

That third AR line (“answers from what your company knows — and stays silent about what it
doesn’t”) is the honesty promise as poetry; consider it for the ProblemSolution section.

---

## 3. Visual identity

### 3.1 Logo & mark

**The mark: three i‘jām dots** — the triangular three-dot cluster that crowns letters like ث/ش.
It is simultaneously: (a) unmistakably Arabic-script-native, (b) a chat “typing…” indicator,
(c) an ellipsis — the pause before a considered answer. One shape, three true meanings, zero
clichés. Geometry: three filled circles in the classic triangular stack (two below, one above),
optically snapped to a rounded-square tile or standing free. Ink on paper by default; saffron
dots on espresso for dark contexts.

- Construction: dot diameter = 1u; horizontal gap = 0.6u; vertical offset = 0.85u; the cluster
  sits inside a 4.5u square. Round everything to whole SVG units.
- The mark replaces the current `public/favicon.svg`; regenerate all rasters with
  `node scripts/generate-assets.mjs` (update the script’s inline SVG + brand colors).

**Wordmark:** bilingual lockup, **Arabic always leads — on every page, both locales.**
«أنيس» set in Amiri bold, drawn/kerned by hand in the SVG (do not rely on runtime font for the
logo); Latin “Anis” in Fraunces semi-bold as the secondary line, smaller. On EN pages the
lockup does not flip — the Arabic wordmark remains the primary form everywhere; it IS the
brand. Stacked lockup for square contexts; horizontal for the navbar.

**Clear space:** height of one dot-cluster on all sides. **Minimum size:** mark 16 px, lockup 96 px wide.

### 3.2 Color — “paper, ink, oasis, saffron”

All values verified WCAG AA (ratios noted). Replace the entire `@theme` color block.

**Core brand**

| Token | Hex | Role |
| --- | --- | --- |
| `--color-ink` | `#231A10` | Warm near-black. All primary text. (15.6:1 on paper) |
| `--color-paper` | `#FAF4E8` | Page background, light theme. |
| `--color-card` | `#FFFCF5` | Raised surfaces on paper. |
| `--color-oasis` | `#0F6B5C` | THE accent. Primary buttons, links, active states. (5.9:1 on paper; cream-on-oasis 5.9:1) |
| `--color-oasis-deep` | `#0C594D` | Hover/pressed; small-text-on-fill contexts (7.5:1). |
| `--color-saffron` | `#E3A84E` | The thread of warmth: dots motif, highlights, marks — **decorative + large text only** in light theme. |
| `--color-saffron-ink` | `#8A5A12` | Text-safe saffron on paper (5.4:1) for eyebrows/labels. |
| `--color-terracotta` | `#B4441F` | Sparse secondary accent: hand-drawn underlines, the occasional highlighted word (5.1:1 on paper). Not for UI states. |
| `--color-espresso` | `#1C1610` | Dark-theme ground. |
| `--color-cream` | `#F4ECDD` | Dark-theme text (15.3:1 on espresso). |

**Dark theme (espresso, not black-glass):** background `#1C1610`, surface `#262018`, text
`#F4ECDD`, muted `#B3A48D` (7.4:1), accent shifts to mint `#4FC5B0` (8.5:1) for links/focus and
saffron `#E3A84E` (8.5:1) for the dots/CTA fills with espresso text on saffron (8.5:1). Dark
mode should feel like the majlis after sunset — same room, lamps on — not a different product.

**Neutral ramp:** rebuild the gray ramp warm (khaki-brown undertone):
50 `#F5EFE3` · 100 `#EBE3D3` · 200 `#DCD2BE` · 300 `#BFB29A` · 400 `#968970` ·
500 `#6B5D4A` (5.8:1 on paper — the light `--muted`) · 600 `#524636` · 700 `#3D3428` ·
800 `#2E271D` · 900 `#231A10`. Kill every cool gray; a single cool hex left anywhere will look
like a stain on this palette.

**Status colors (anis-app):** keep semantics, warm the hues: success `#1F7A4D`, warning
`#9A6A00`, danger `#B3382D`, info `#2F5FA8`; soft variants mixed against paper not white.

**Gradient policy:** there is no brand gradient anymore. Delete `gradients` from
`packages/tokens`. The only permitted “gradient” is a paper-grain texture (see 3.4).

### 3.3 Typography — the centerpiece

The brand IS the type system, and **the Arabic voice is the lead voice.** Design every display
composition in Arabic first; the English page inherits the Arabic page’s decisions, not the
other way around.

| Role | Arabic (primary) | Latin (secondary) | Notes |
| --- | --- | --- | --- |
| Display (h1–h3, pull-quotes, big numbers) | **Amiri Bold** | **Fraunces** (variable; SOFT≈70, WONK=0 default — WONK=1 permitted for one hero word) | Naskh revival ↔ old-style revival: same bookish warmth in both scripts. This pairing is the identity. |
| Text / UI | **IBM Plex Sans Arabic** (keep) | **Inter** (keep — already subset & shipped) | Quiet workhorses; zero migration risk. |
| Mono (numbers in mocks, code) | keep current stack | — | |

- Self-host per existing convention: download Amiri (OFL) and Fraunces (OFL) woff2 subsets into
  `public/fonts/`, wire `@font-face` with the same `unicode-range` split used today; preload
  **Amiri on the default (`/`, Arabic) pages**, Fraunces on `/en` (swap the polarity of the
  existing preload block in `BaseLayout.astro`).
- **Kill the current display tracking.** Fraunces/Amiri need `letter-spacing: 0` (Latin display
  may take `-0.01em` max). The −0.035em Satoshi tracking will mangle both. **Never
  letter-space Arabic — ever.** Add a lint-comment in global.css.
- Display scale: keep the fluid `clamp()` sizes but raise line-heights (serifs + Arabic ascenders
  need air): display-2xl 1.06 EN / **1.28 AR**, display-xl 1.1 / 1.32, display-lg 1.12 / 1.35.
  Keep the existing `html[lang='ar']` override mechanism; extend it to swap `--font-display` to
  Amiri and apply the AR line-heights.
- Weights: Fraunces 560–620 for h1 (semi-bold, not black); Amiri 700. Body stays 400/500.
- Editorial devices that carry the brand: generous max-width measure (`65ch` EN / slightly
  narrower AR), eyebrow labels in `--color-saffron-ink` small-caps (Latin) / weight-600 small
  size (Arabic — no fake small-caps in Arabic), first-line-of-section hierarchy, and hanging
  hairline rules (see 3.4). Satoshi is retired; delete its `@font-face` and file once nothing
  references it.

### 3.4 Graphic language & texture

- **Rules, not boxes.** The manuscript aesthetic: 1px `--color-ink`/14% hairlines, occasionally
  doubled (2 hairlines 3px apart — a classical page-frame gesture) for section dividers and
  card tops. Borders do the work shadows used to do.
- **Cards** = index cards on a desk: `--color-card` fill, 1px ink/10% border, radius 10px,
  shadow `0 1px 0 rgb(35 26 16 / 0.06), 0 8px 24px -16px rgb(35 26 16 / 0.25)` (a soft paper
  lift — NOT a hard neobrutalist offset, NOT a glow).
- **Radii:** dial the system down from pill-everything: `--radius-sm 6px / md 10px / lg 14px /
  xl 20px`. Buttons md; the chat widget bubble may stay rounder (it’s a speech artifact).
- **Paper grain:** one subtle inline-SVG `feTurbulence` noise on `<body>` background at ~2.5%
  opacity, light theme only. This is the single texture; no other backgrounds.
- **The dots motif, systematized:** the three-dot cluster appears as (a) list bullets on feature
  lists, (b) the “Anis is typing…” indicator in `ChatMock`/widget (saffron dots — this is the
  mark, animated), (c) section-divider ornament centered between double rules, (d) the `Soon`
  badge’s prefix. Build it once as a tiny component/CSS mask; never redraw it ad hoc.
- **Underlines as craft:** key hero/section words get a hand-drawn-feel underline — a 6px SVG
  stroke in terracotta with slight irregularity (one static SVG path, `currentColor`-able). This
  replaces gradient-text as the “accent word” device. Must mirror correctly in RTL (use
  `transform: scaleX(-1)` on `[dir='rtl']` or a symmetric path).
- **Icons:** keep Lucide (1.5px stroke) but recolor to ink/muted; feature-card icons sit on
  small paper-chip tiles (radius-sm, saffron-tinted `#F3E4C8` bg) instead of gradient squares.
- **Illustration:** none in v1. The mocks ARE the imagery (see §4.3). If illustration is ever
  added: flat two-color ink+saffron line work, hand-drawn, never AI-generated.

### 3.5 Motion

Print doesn’t fly in from the left. Motion budget:
- Scroll-reveal: keep the existing IntersectionObserver pattern but reduce to **opacity +
  8px rise, 300ms, ease-out** — no scale, no stagger theatrics.
- The typing dots: 1.2s gentle three-phase pulse (this is the one place personality animates).
- Link/button hover: background/underline transitions 150ms; the terracotta underline can “draw”
  via `stroke-dashoffset` on hero load (once, ≤600ms).
- `prefers-reduced-motion` kills all of it (mechanism exists — keep).

---

## 4. Implementation plan — `anis-chat` (marketing)

Work in this order; the site must build green after every step (`npm run build`).

### Step 0 — flip the i18n polarity: Arabic is the default locale

The architecture stays; the direction reverses. RTL is the default reading direction of the
whole project; LTR is the exception.

- `astro.config.mjs`: `defaultLocale: 'ar'`; keep both locales prefixed OR serve Arabic at the
  bare root — **decision: Arabic at `/`** (`prefixDefaultLocale: false` for `ar`), English stays
  at `/en`. Update the sitemap i18n block accordingly.
- `src/pages/index.astro`: delete the client-side language sniff. `/` IS the Arabic homepage —
  Gulf visitors must never bounce through a redirect. Keep a small language switcher to `/en`.
- `src/i18n/config.ts`: `defaultLang = 'ar'`.
- **`ar.ts` becomes the source of truth**: it exports the `Dict` type; `en.ts` is typed as
  `Dict` and must satisfy it. From now on copy is *authored in Arabic* and adapted to English —
  the compile-time parity mechanism is unchanged, only reversed.
- SEO: `hreflang` pairs update (`ar` ↔ default `x-default`, `en` secondary); `og:locale` =
  `ar_AR` primary. Meta title/description authored in Arabic for the root pages.
- Legal pages (`legal.ts`): re-anchor for the market — the buyers are in KSA/UAE. Reference
  Saudi **PDPL** and UAE data-protection law as the frame instead of leading with GDPR
  (hosting may remain in France — see `anis-app` deploy docs — and the privacy page keeps the
  existing truthful two-part statement: where data is *stored* vs where message text is
  *processed*). Placeholder legal-entity/jurisdiction markers stay until counsel confirms.
- Pricing: **USD stays** (standard for Gulf SaaS). Optional later: a static “≈ ر.س” hint —
  do not build FX logic.
- The dev screenshot scripts (`scripts/shot.mjs` etc.) should default to the Arabic pages.

### Step 1 — tokens (`src/styles/global.css`)
Replace brand colors, neutral ramp, radii, shadows per §3.2/3.4. Rewire semantic vars:
light `--bg: --color-paper`, `--surface: --color-card`, `--fg: --color-ink`,
`--muted: #6B5D4A`, `--ring: --color-oasis`; dark per §3.2. Delete iris/aqua entirely —
`grep -ri 'iris\|aqua\|5a5af0\|37e0c8' src/` must return nothing when done.

### Step 2 — fonts
Add Fraunces + Amiri woff2 (subset with fonttools/glyphhanger; Amiri needs the full Arabic set +
Latin fallback subset like Plex has). Update `@font-face`, `--font-display`, the
`html[lang='ar']` block, preloads in `BaseLayout.astro`, and the AR display line-heights. Remove
Satoshi.

### Step 3 — components (top-down)
- **`Navbar`**: paper bg with 1px ink/10% bottom hairline on scroll (replace any blur/translucent
  treatment — currently glassy). CTA = oasis solid.
- **`Hero`**: THE flip — light paper hero, no dark panel. Fraunces/Amiri display headline with
  one terracotta-underlined word; lead paragraph at readable measure; chips become paper-chips
  with dot bullets; `ChatMock` right (left in RTL) restyled per §4.3. Delete the “hero is always
  dark” rule in global.css.
- **`Button.astro`**: primary = oasis fill/cream text (hover oasis-deep); secondary = 1px ink
  border on paper (hover: ink fill, cream text); ghost = terracotta-underline link. Kill all
  gradient fills.
- **`TrustBar`**: single hairline row, saffron-ink eyebrow text.
- **`Features`**: cards per §3.4; icon chips saffron-tinted; dots as list bullets.
- **`HowItWorks`**: numbered 01/02/03 in Fraunces (Arabic-Indic ٠١/٠٢/٠٣ **only if** you set
  `numeral` policy — current AR copy uses Western digits; keep Western digits for consistency,
  it’s the standard in Gulf tech).
- **`Pricing`**: the most “printed” section — a proper table/card hybrid with double-rule top,
  ink price numerals in Fraunces; highlighted tier gets a saffron top rule + dots, NOT a filled
  gradient card. `Soon` badges: dot-prefix chip, muted.
- **`FAQ`**: hairline-separated accordion, plus/minus in oasis.
- **`FinalCTA`**: the one allowed dark-espresso band on light pages — lamps-on moment: espresso
  bg, cream text, saffron dots ornament, oasis... no — **saffron-filled CTA with espresso text**
  (8.5:1) so the band reads warm not corporate.
- **`Footer`**: paper, double-rule top, bilingual wordmark lockup.
- **`ThemeToggle` / dark theme**: re-derive every section against espresso per §3.2.

### Step 4 — mocks (`components/mocks/*`, `ui/ChatMock.astro`)
The mocks must look like *our product’s* new UI (and they preview `anis-app`’s restyle): paper
surfaces, ink text, hairline table rules, oasis status accents, saffron typing dots. Keep the
`Sample`/`نموذج توضيحي` labels (claims gate). The widget mock’s bubble: card bg, ink text,
oasis header bar — visibly NOT iMessage-blue and NOT glassy.

### Step 5 — brand assets
New mark SVG → `public/favicon.svg`; update `scripts/generate-assets.mjs` (colors: paper bg,
ink+saffron mark; OG image: paper ground, bilingual wordmark in Fraunces/Amiri — embed the
fonts in the script so it stops rendering system-font), regenerate all rasters + OG. Update
`theme-color` metas in `BaseLayout.astro` (`#FAF4E8` light / `#1C1610` dark).

### Step 6 — copy pass
Rewrite `ar.ts` first, in the §2.3 register, with Gulf-flavored examples (Riyadh perfume shop,
Dubai agency, same-day delivery within KSA); then adapt `en.ts` from it. Positioning strings
change everywhere: “Built for Europe & the Arab world” → **«صُنع للعالم العربي، من الخليج»** /
“Built for the Arab world” — and every EU/GDPR-led selling line is reframed per Step 0. The
multilingual-answers claim is stated per §2.3. Claims gate untouched.

### Acceptance checklist (marketing)
- [ ] `npm run build` green; zero JS bundles still zero
- [ ] `/` serves Arabic, RTL, no redirect; `/en` works; hreflang/sitemap correct
- [ ] No `backdrop-filter`, no gradient tokens, no cool grays (grep list in Step 1)
- [ ] All text pairs ≥ 4.5:1 (§3.2 table is pre-verified; re-check anything you derive)
- [ ] Arabic root reviewed at every breakpoint **before** `/en` is even opened: Amiri renders,
      no letter-spacing on Arabic, line-heights per §3.3, underline SVG mirrors, dots motif
      identical; `/en` inherits the Arabic layout decisions
- [ ] Both themes coherent on every section; `prefers-reduced-motion` clean
- [ ] Lighthouse on `/` (Arabic): no regression from font swap (subset properly; ≤ 4 font files
      per locale path — Arabic subsets are big, subset Amiri aggressively)
- [ ] Favicons/OG regenerated (Arabic-led lockup); old Satoshi files deleted

---

## 5. Implementation plan — `anis-app` (product)

1. **`packages/tokens`**: port the full §3 system into `theme.css` + `tokens.ts` (keep the
   sync test honest — update both sides). Delete `gradients`; warm the `status` set per §3.2.
2. **Dashboard**: **Arabic UI by default, RTL by default** — the buyer is a Gulf business; the
   `i18n.ts`/`LanguageContext` default flips to `ar`, English remains available. Paper/ink/oasis
   chrome; Amiri/Fraunces only for screen titles and big analytics numerals; everything else
   Plex Arabic/Inter. Density stays — this is a tool; the warmth comes from color, hairlines,
   and type, not padding theatrics.
3. **Widget**: default theme = the brand (card bg, ink text, oasis header, saffron typing dots =
   the logo animating). Customer color overrides keep working — but compute AA contrast for
   their header color and auto-pick cream/ink text (extend `theme.ts`). **The multilingual
   behavior is untouched and is now a headline claim**: per-message language detection and RTL/LTR
   per message already exist — the assistant answers in the visitor’s language, Arabic at native
   quality. The refusal message and handoff form get the §2.3 “host” copy, authored in Arabic
   first.
4. **Admin (future `admin.*`)**: same tokens, espresso-chrome variant to make it visually
   unmistakable from customer dashboard.

---

## 6. Guardrails for the migration

- One PR per step in §4; screenshot EN+AR, light+dark in each PR description
  (`scripts/shot.mjs` exists — use it).
- If a component can’t hit AA in the new palette, change the component, not the ratio.
- When in doubt, ask: *“would a well-set bilingual book do this?”* If no — don’t.
- The three banned words for this redesign: glass, glow, gradient.

*Palette contrast ratios in §3.2 were computed (WCAG 2.x relative luminance) and all listed
pairs pass AA; the table notes the exact ratios.*
