export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

/** Locales that render right-to-left. */
export const rtlLangs: Lang[] = ['ar'];

export function isRtl(lang: Lang): boolean {
  return rtlLangs.includes(lang);
}

export function dirFor(lang: Lang): 'rtl' | 'ltr' {
  return isRtl(lang) ? 'rtl' : 'ltr';
}

/** Native endonym shown in the language switcher. */
export const localeLabels: Record<Lang, string> = {
  en: 'English',
  ar: 'العربية',
};
