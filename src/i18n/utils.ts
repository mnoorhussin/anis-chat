import { defaultLang, languages, type Lang } from './config';
import en from './en';
import ar from './ar';

const dictionaries = { en, ar } as const;

/**
 * Shape of a locale dictionary. Arabic is the source of truth — copy is
 * authored in `ar.ts` and English is adapted from it (`en.ts` is typed
 * against this, so a missing/renamed key fails the build).
 */
export type Dict = typeof ar;

/**
 * Read the active locale from a URL pathname.
 * Arabic lives at the bare root (`/…`); English is prefixed (`/en/…`).
 */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  if (seg && seg in languages) return seg as Lang;
  return defaultLang;
}

/** The translation dictionary for a locale (falls back to default). */
export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/**
 * Locale-aware path helper. Arabic (default) is unprefixed:
 * `t('/pricing')` → `/pricing/` for ar, `/en/pricing/` for en.
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const clean = path.replace(/^\/+|\/+$/g, '');
    if (targetLang === defaultLang) {
      return clean ? `/${clean}/` : '/';
    }
    return clean ? `/${targetLang}/${clean}/` : `/${targetLang}/`;
  };
}

/** The equivalent of the current page in another locale (for the switcher). */
export function getAlternatePath(url: URL, target: Lang): string {
  const parts = url.pathname.split('/').filter(Boolean);
  // Drop a leading locale segment if present.
  if (parts[0] && parts[0] in languages) parts.shift();
  // Prefix non-default locales.
  if (target !== defaultLang) parts.unshift(target);
  const joined = `/${parts.join('/')}`;
  return joined.endsWith('/') ? joined : `${joined}/`;
}

/**
 * Format a number/currency for the locale. Arabic uses Western (Latin) digits
 * here for price legibility and brand consistency across the pricing table.
 * USD is the standard for Gulf SaaS.
 */
export function formatCurrency(
  amount: number,
  lang: Lang,
  currency = 'USD',
): string {
  const locale = lang === 'ar' ? 'ar-SA-u-nu-latn' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
