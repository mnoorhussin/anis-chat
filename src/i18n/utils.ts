import { defaultLang, languages, type Lang } from './config';
import en from './en';
import ar from './ar';

const dictionaries = { en, ar } as const;

/** Shape of a locale dictionary. `ar` is type-checked against this in ar.ts. */
export type Dict = typeof en;

/** Read the active locale from a URL pathname (/en/… or /ar/…). */
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
 * Locale-aware path helper. `t('/pricing')` → `/en/pricing/`.
 * Pass a second arg to target a specific locale.
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    const clean = path.replace(/^\/+|\/+$/g, '');
    return clean ? `/${targetLang}/${clean}/` : `/${targetLang}/`;
  };
}

/** The equivalent of the current page in another locale (for the switcher). */
export function getAlternatePath(url: URL, target: Lang): string {
  const parts = url.pathname.split('/');
  if (parts[1] && parts[1] in languages) {
    parts[1] = target;
  } else {
    parts.splice(1, 0, target);
  }
  const joined = parts.join('/');
  return joined.endsWith('/') ? joined : `${joined}/`;
}

/**
 * Format a number/currency for the locale. Arabic uses Western (Latin) digits
 * here for price legibility and brand consistency across the pricing table.
 */
export function formatCurrency(
  amount: number,
  lang: Lang,
  currency = 'EUR',
): string {
  const locale = lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-IE';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
