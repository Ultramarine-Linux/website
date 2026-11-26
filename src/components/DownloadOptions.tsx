import { useStore } from "@nanostores/react";
import { downloadInstaller } from "./downloadStore";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import ChevronDown from "~icons/fluent/chevron-down-16-regular";
import Checkmark from "~icons/fluent/checkmark-16-regular";
import { makeT } from "../i18n.ts";
import Trans from "./Trans.tsx";

const installers = new Map([
  ["anaconda", { title: "Anaconda" }],
  ["readymade", { title: "Readymade (Preview)" }],
]);

const DownloadOptions = ({ lang }) => {
  const t = makeT(lang);
  const $downloadInstaller = useStore(downloadInstaller);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 pt-2">
        <div>
          <p className="pb-1 text-sm text-gray-200">Installer</p>
          <div className="w-64">
            <Listbox
              value={$downloadInstaller}
              onChange={(value) => {
                downloadInstaller.set(value);
              }}
            >
              <ListboxButton className="flex flex-row w-full items-center h-9 px-4 py-2 rounded-lg bg-gray-800 text-left text-sm font-medium focus:not-data-focus:outline-none">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {installers.get($downloadInstaller).title}
                </span>
                <ChevronDown
                  className="pointer-events-none ml-auto shrink-0"
                  aria-hidden="true"
                />
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                transition
                className="w-(--button-width) rounded-lg [--anchor-gap:--spacing(1)] focus:outline-none bg-gray-800 transition duration-100 ease-in data-leave:data-closed:opacity-0 p-1 gap-1 flex flex-col z-50 shadow-md border border-white/5"
              >
                {Array.from(installers.entries()).map(([id, installer]) => (
                  <ListboxOption
                    className="group flex items-center rounded-md px-3 py-1.5 gap-2 text-sm font-medium data-focus:bg-gray-700 select-none cursor-default"
                    key={id}
                    value={id}
                    aria-label={installer.title}
                  >
                    <Checkmark className="invisible group-data-selected:visible" />
                    {installer.title}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
      </div>

      {$downloadInstaller === "readymade" && (
        <p className="text-gray-200 mt-4">
          <Trans t={t("downloadOptions.readymadeNote")}>
            <a
              href="https://github.com/FyraLabs/readymade/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-200 hover:text-accent-400 transition-colors"
            />
          </Trans>
        </p>
      )}
    </>
  );
};

export default DownloadOptions;
