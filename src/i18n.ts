//? https://medium.com/@paul.pietzko/internationalization-i18n-in-astro-5-78281827d4b4

import en from "../langs/en.json";

export const languages = {
  en: "English",
  zh_HK: "中文（香港）",
};

const translations: Record<string, { default: Record<string, string> }> =
  import.meta.glob("../langs/*.json", { eager: true });

// doing what poly_l10n is doing
const fallbackLang = {
  yue: "zh_HK",
  yue_HK: "yue",
};

export const defaultLang = "en";

export type Key = keyof typeof en;
export type Interpolation = Record<string, string | number>;

export const makeT =
  (lang: string = defaultLang) =>
    (key: Key, interpolation: Interpolation = {}) => {
    let s: string;
    while (!(s = translations[`../langs/${lang}.json`]?.default[key])) {
      if (lang === defaultLang) {
        return key;
      }
      let newlang = fallbackLang[lang] ?? defaultLang;
      console.log(`i18n: fallback ${lang} to ${newlang} (${key})`);
      lang = newlang;
    }
    for (const [k, v] of Object.entries(interpolation)) {
      s = s.replace(`{{${k}}}`, `${v}`);
    }
    return s;
  };
