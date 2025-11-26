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

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  return (
    <>
      <div>
        <Listbox
          value={currentLang}
          onChange={(value) => {
            if (value === currentLang) return;
            let url = window.location.pathname;
            if (url.startsWith(`/${currentLang}`)) {
              url = url.replace(
                `/${currentLang}`,
                value === i18nya.config.defaultLang ? "" : `/${value}`,
              );
            } else {
              url = `/${value}${url}`;
            }
            window.location.replace(url);
          }}
        >
          <ListboxButton className="rounded-xl hover:bg-accent-800 p-3">
            <Globe className="pointer-events-none ml-auto shrink-0" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom end"
            transition
            className="rounded-lg [--anchor-gap:--spacing(1)] focus:outline-none bg-gray-800 transition duration-100 ease-in data-leave:data-closed:opacity-0 p-1 gap-1 flex flex-col z-50 shadow-md border border-white/5"
          >
            {Object.entries(listLang(i18nya)).map(([locale, lang]) => (
              <ListboxOption
                className="group flex items-center rounded-md px-3 py-1.5 gap-2 text-sm font-medium data-focus:bg-gray-700 select-none cursor-default"
                key={locale}
                value={locale}
                aria-label={lang}
              >
                <Checkmark className="invisible group-data-selected:visible" />
                {lang}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </>
  );
};

export default LanguagePicker;
