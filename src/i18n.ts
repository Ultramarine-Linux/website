//? https://medium.com/@paul.pietzko/internationalization-i18n-in-astro-5-78281827d4b4

import en from "../langs/en.json";
import { init } from "i18nya";

const i18nya = await init<keyof typeof en>({
  defaultLang: "en",
  langDir: "../langs",
  fallbackLangs: {
    yue: "zh_HK",
    yue_HK: "yue",
  },
  viteImports: import.meta.glob("../langs/*.json", { eager: true }),
});

// Why not getRelativeLocaleUrl from astro:i18n? Two reasons:
// 1. It doesn't fallback to the default path if lang is undefined
// 2. It doesn't work in React/client-side components
const getLocalizedPath = (lang: string | undefined, path: string) =>
  lang === undefined || lang === i18nya.config.defaultLang
    ? path
    : `/${lang}${path}`;

export default i18nya;
const { makeT } = i18nya;
export { makeT, getLocalizedPath };
