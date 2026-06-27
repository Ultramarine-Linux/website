import { useEffect } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { listLang } from "astro-i18nya";
import i18nya from "../i18n";
import Globe from "~icons/fluent/globe-20-regular";
import Checkmark from "~icons/fluent/checkmark-16-regular";

const langs = Array.from(listLang(i18nya).keys());
const fallbacks = i18nya.config.fallbackLangs ?? {};

const switchLang = (
  target: string,
  currentLang: string,
) => {
  console.log(`switchLang: ${currentLang} -> ${target}`);
  if (target === currentLang) return;
  // don't redirect again
  localStorage.setItem("um-lnr", "1");
  let url = window.location.pathname;
  if (url.startsWith(`/${currentLang}`)) {
    url = url.replace(
      `/${currentLang}`,
      target === i18nya.config.defaultLang ? "" : `/${target}`,
    );
  } else {
    url = `/${target}${url}`;
  }
  window.location.replace(url);
};

const checkSwitchLang = () => {
  const ignores: string[] = [];
  for (const lang of navigator.languages) {
    const checks = [lang];
    if (lang.includes("-")) checks.push(lang.split("-", 1)[0]);
    for (let check of checks.filter((c) => !ignores.includes(c))) {
      if (langs.includes(check)) return check;
      for (
        ignores.push(check);
        (check = fallbacks[check] ?? fallbacks[check.replaceAll('-', '_')]) && !ignores.includes(check);
        ignores.push(check)
      ) {
        if (langs.includes(check = check.replaceAll('_', '-'))) return check;
      }
    }
  }
};


const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  useEffect(() => {
    if (localStorage.getItem("um-lnr")) return;
    const l = checkSwitchLang();
    if (l) switchLang(l, currentLang);
    // don't redirect again
    localStorage.setItem("um-lnr", "1");
  }, []);
  return (
    <div>
      <Listbox
        value={currentLang}
        onChange={(value) => switchLang(value, currentLang)}
      >
        <ListboxButton className="rounded-xl hover:bg-accent-800 p-3">
          <Globe className="pointer-events-none ml-auto shrink-0" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom end"
          transition
          className="rounded-lg [--anchor-gap:--spacing(1)] focus:outline-none bg-gray-800 transition duration-100 ease-in data-leave:data-closed:opacity-0 p-1 gap-1 flex flex-col z-50 shadow-md border border-white/5"
        >
          {Array.from(
            listLang(i18nya)
              .entries()
              .map(([locale, lang]) => (
                <ListboxOption
                  className="group flex items-center rounded-md px-3 py-1.5 gap-2 text-sm font-medium data-focus:bg-gray-700 select-none cursor-default"
                  key={locale}
                  value={locale}
                  aria-label={lang}
                >
                  <Checkmark className="invisible group-data-selected:visible" />
                  {lang}
                </ListboxOption>
              )),
          )}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default LanguagePicker;
