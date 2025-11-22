import UltramarineAltLogo from "./icons/UltramarineAltLogo.svg?react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import DownloadIcon from "./icons/DownloadIcon.svg?react";
import HorizontalLines from "~icons/fluent/line-horizontal-3-16-regular";
import Dismiss from "~icons/fluent/dismiss-16-regular";
import LanguagePicker from "./LanguagePicker";

import UltramarineAltLogo from "./icons/UltramarineAltLogo.svg?react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import DownloadIcon from "./icons/DownloadIcon.svg?react";
import HorizontalLines from "~icons/fluent/line-horizontal-3-16-regular";
import Dismiss from "~icons/fluent/dismiss-16-regular";
import LanguagePicker from "./LanguagePicker";
import { makeT } from "../i18n.ts";

const Header = ({ currentLang }: { currentLang: string }) => {
  const t = makeT(currentLang);

  return (
    <Disclosure>
      <header
        id="nav"
        className="w-full text-gray-600 dark:text-gray-100 sticky top-0 z-50 bg-clip-padding bg-gray-100 bg-opacity-30 dark:bg-gray-950 dark:bg-opacity-40 backdrop-filter backdrop-blur-xl"
      >
        <div className="flex flex-row justify-between items-center mx-2 md:px-16 py-5 md:mx-auto max-w-(--breakpoint-2xl) relative">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className=" group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">{t("header.openMenu")}</span>
              <Dismiss
                className="hidden group-data-open:block h-6 w-6"
                aria-hidden="true"
              />
              <HorizontalLines
                className="block group-data-open:hidden h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-row items-center mx-auto md:mx-0">
            <a
              href="/"
              className="hover:text-accent-500 transition-colors duration-300 cursor-pointer"
            >
              <div className="relative mr-6">
                <span className="font-bold text-xl">
                  {t("site.title.short")}
                </span>
                <div className="absolute -top-1 -right-6">
                  <UltramarineAltLogo />
                </div>
              </div>
            </a>
          </div>
          <div className="hidden md:flex flex-row items-center gap-8">
            <a
              href="https://wiki.ultramarine-linux.org/en/welcome/"
              target="_blank"
              rel="noopener"
              className="hover:text-accent-500 transition-colors duration-300"
            >
              {t("header.wiki")}
            </a>
            <a
              href="/community"
              className="hover:text-accent-500 transition-colors duration-300"
            >
              {t("header.community")}
            </a>
            <a
              href="https://blog.fyralabs.com"
              target="_blank"
              rel="noopener"
              className="hover:text-accent-500 transition-colors duration-300"
            >
              {t("header.blog")}
            </a>
            <a
              href="https://fyralabs.com/merch"
              target="_blank"
              rel="noopener"
              className="hover:text-accent-500 transition-colors duration-300"
            >
              {t("header.merch")}
            </a>
            <a
              href="/download"
              className="flex flex-row gap-2 items-center text-white font-medium py-2 px-6 rounded-xl bg-accent-600 hover:bg-accent-700 transition-colors"
            >
              <DownloadIcon />
              {t("header.download")}
            </a>
            <LanguagePicker currentLang={currentLang} />
          </div>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel className={"md:hidden"}>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="https://wiki.ultramarine-linux.org/en/welcome/"
                target="_blank"
                rel="noopener"
                className="hover:text-accent-500 transition-colors duration-300 block px-3 py-2"
              >
                {t("header.wiki")}
              </a>
              <a
                href="/community"
                className="hover:text-accent-500 transition-colors duration-300 block px-3 py-2"
              >
                {t("header.community")}
              </a>
              <a
                href="https://blog.fyralabs.com"
                target="_blank"
                rel="noopener"
                className="hover:text-accent-500 transition-colors duration-300 block px-3 py-2"
              >
                {t("header.blog")}
              </a>
              <a
                href="https://fyralabs.com/merch"
                target="_blank"
                rel="noopener"
                className="hover:text-accent-500 transition-colors duration-300 block px-3 py-2"
              >
                {t("header.merch")}
              </a>
              <a
                href="/download"
                className="flex flex-row gap-2 items-center text-white font-medium py-2 px-3 rounded-xl bg-accent-600 hover:bg-accent-700 transition-colors"
              >
                <DownloadIcon />
                {t("header.download")}
              </a>
              <LanguagePicker currentLang={currentLang} />
            </div>
          </DisclosurePanel>
        </Transition>
      </header>
    </Disclosure>
  );
};

export default Header;
