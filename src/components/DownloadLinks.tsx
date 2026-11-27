import { useState, type ReactNode } from "react";
import { useStore } from "@nanostores/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ChevronDown from "~icons/fluent/chevron-down-16-regular";
import Checkmark from "~icons/fluent/checkmark-16-regular";
import Info from "~icons/fluent/info-16-regular";
import { downloadInstaller } from "./downloadStore";
import DownloadIcon from "./icons/DownloadIcon.svg?react";
import Trans from "./Trans.tsx";
import { getLocalizedPath, makeT } from "../i18n.ts";
import { downloadLink } from "../utils/download";

interface Target {
  arch: string;
  device: string;
  title: string;
  hint: ReactNode;
}

const hintLinkClass = "text-accent-300 hover:text-accent-400";

const DownloadLinks = ({
  version,
  edition,
  lang,
  stacked = false,
}: {
  version: string;
  edition: string;
  lang: string;
  stacked?: boolean;
}) => {
  const t = makeT(lang);

  const targets: Target[] = [
    {
      arch: "x86_64",
      device: "generic",
      title: t("downloadOptions.genericX86"),
      hint: t("downloadOptions.genericDescription"),
    },
    {
      arch: "x86_64",
      device: "surface",
      title: t("downloadOptions.surface"),
      hint: (
        <Trans t={t("downloadOptions.surfaceDescription")}>
          <a
            href="https://wiki.ultramarine-linux.org/en/anywhere/surface/"
            className={hintLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Trans>
      ),
    },
    {
      arch: "aarch64",
      device: "generic",
      title: t("downloadOptions.arm"),
      hint: (
        <Trans t={t("downloadOptions.armDescription")}>
          <a
            href="https://fedoraproject.org/wiki/Architectures/ARM"
            className={hintLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Trans>
      ),
    },
    {
      arch: "aarch64",
      device: "rpi5",
      title: t("downloadOptions.rpi5"),
      hint: t("downloadOptions.rpiDescription"),
    },
    {
      arch: "aarch64",
      device: "pinebookpro",
      title: t("downloadOptions.pinebookPro"),
      hint: t("downloadOptions.pinebookProDescription"),
    },
  ];
  const targetId = (target: Target) => `${target.arch}:${target.device}`;

  const [selectedId, setSelectedId] = useState(targetId(targets[0]));
  const selected =
    targets.find((target) => targetId(target) === selectedId) ?? targets[0];

  const sharedInstaller = useStore(downloadInstaller);
  const installer = selected.device === "generic" ? sharedInstaller : "anaconda";

  const link = downloadLink(
    edition,
    version,
    selected.arch,
    selected.device,
    installer,
  );
  const downloadParams = new URLSearchParams({
    edition,
    version,
    arch: selected.arch,
    device: selected.device,
    installer,
  });
  const thankYouLink = `/thank-you?${downloadParams.toString()}`;

  return (
    <div
      className={`flex flex-col gap-2 z-10 ${stacked ? "" : "mt-6 md:mt-0 w-full sm:w-auto sm:self-start"}`}
    >
      <div className="relative flex flex-row items-center gap-2 text-sm md:text-base">
        <Listbox value={selectedId} onChange={setSelectedId}>
          <ListboxButton className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors focus:not-data-focus:outline-none">
            <span>{selected.title}</span>
            <ChevronDown className="shrink-0 w-4 h-4" aria-hidden="true" />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom start"
            transition
            className="min-w-44 rounded-lg [--anchor-gap:--spacing(1)] focus:outline-none bg-gray-800 transition duration-100 ease-in data-leave:data-closed:opacity-0 p-1 gap-1 flex flex-col z-50 shadow-md border border-white/5"
          >
            {targets.map((target) => (
              <ListboxOption
                className="group flex items-center rounded-md px-3 py-1.5 gap-2 text-sm font-medium data-focus:bg-gray-700 select-none cursor-default"
                key={targetId(target)}
                value={targetId(target)}
              >
                <Checkmark className="invisible group-data-selected:visible" />
                {target.title}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>

        <div className="group/hint">
          <button
            type="button"
            className="flex items-center text-gray-500 hover:text-gray-200 focus:text-gray-200 transition-colors focus:outline-none"
            aria-label={selected.title}
          >
            <Info className="w-5 h-5" aria-hidden="true" />
          </button>
          <div
            role="tooltip"
            className="absolute left-0 bottom-full pb-2 w-72 max-w-full z-50 invisible opacity-0 group-hover/hint:visible group-hover/hint:opacity-100 group-focus-within/hint:visible group-focus-within/hint:opacity-100 transition-opacity"
          >
            <div className="rounded-lg bg-gray-800 border border-white/5 shadow-md px-3 py-2 text-xs md:text-sm text-gray-200 leading-snug">
              {selected.hint}
            </div>
          </div>
        </div>
      </div>

      <a
        className="flex flex-row gap-2 items-center justify-center px-3 sm:px-4 md:px-6 py-2 bg-accent-700 rounded-xl text-gray-50 hover:bg-accent-800 transition-colors w-full text-sm sm:text-base"
        href={getLocalizedPath(lang, thankYouLink)}
      >
        <DownloadIcon />
        <span className="font-medium">{t("downloadLinks.download")}</span>
      </a>

      <a
        href={link + ".sha256sum"}
        className={`text-gray-500 hover:text-blue-400 transition-colors text-xs md:text-sm text-center ${stacked ? "" : "sm:text-left"}`}
      >
        {t("downloadLinks.viewChecksum")}
      </a>
    </div>
  );
};

export default DownloadLinks;
