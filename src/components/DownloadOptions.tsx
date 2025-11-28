import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useStore } from "@nanostores/react";
import {
  downloadArch,
  downloadDevice,
  downloadInstaller,
} from "./downloadStore";
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

const DownloadOptions = ({ lang }) => {
  const t = makeT(lang);
  const archDownloadVariations = new Map([
    [
      "x86_64",
      {
        name: "x64",
        devices: new Map([
          [
            "generic",
            {
              title: t("downloadOptions.generic"),
              description: t("downloadOptions.genericDescription"),
            },
          ],
          [
            "surface",
            {
              title: t("downloadOptions.surface"),
              description: (
                <Trans t={t("downloadOptions.surfaceDescription")}>
                  <a
                    href="https://wiki.ultramarine-linux.org/en/anywhere/surface/"
                    className="text-accent-300 hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </Trans>
              ),
            },
          ],
        ]),
        installers: new Map([
          ["anaconda", { title: "Anaconda" }],
          ["readymade", { title: "Readymade (Preview)" }],
        ]),
      },
    ],
    [
      "aarch64",
      {
        name: "ARM",
        devices: new Map([
          [
            "generic",
            {
              title: t("downloadOptions.generic"),
              description: (
                <Trans t={t("downloadOptions.armDescription")}>
                  <a
                    href="https://fedoraproject.org/wiki/Architectures/ARM"
                    className="text-accent-300 hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </Trans>
              ),
            },
          ],
        ]),
        installers: new Map([
          ["anaconda", { title: "Anaconda" }],
          ["readymade", { title: "Readymade (Preview)" }],
        ]),
      },
    ],
  ]);

  const $downloadArch = useStore(downloadArch);
  const $downloadDevice = useStore(downloadDevice);
  const $downloadInstaller = useStore(downloadInstaller);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 pt-2">
        <div>
          <p className="pb-1 text-sm text-gray-200">
            {t("downloadOptions.architecture")}
          </p>
          <ToggleGroup.Root
            className="inline-flex h-9 items-center justify-center rounded-lg bg-gray-800 p-1 text-muted-foreground"
            type="single"
            value={$downloadArch}
            onValueChange={(value) => {
              if (value) {
                downloadArch.set(value);
                downloadDevice.set("generic");
              }
            }}
            aria-label={t("downloadOptions.architecture")}
          >
            {Array.from(archDownloadVariations.entries()).map(
              ([id, archVariation]) => (
                <ToggleGroup.Item
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md min-w-20 px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-700 data-[state=active]:text-foreground data-[state=active]:shadow"
                  key={id}
                  value={id}
                  aria-label={archVariation.name}
                >
                  {archVariation.name}
                </ToggleGroup.Item>
              ),
            )}
          </ToggleGroup.Root>
        </div>

        <div>
          <p className="pb-1 text-sm text-gray-200">
            {t("downloadOptions.device")}
          </p>
          <div className="w-64">
            <Listbox
              value={$downloadDevice}
              onChange={(value) => {
                downloadDevice.set(value);
              }}
            >
              <ListboxButton className="flex flex-row w-full items-center h-9 px-4 py-2 rounded-lg bg-gray-800 text-left text-sm font-medium focus:not-data-focus:outline-none">
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {
                    archDownloadVariations
                      .get($downloadArch)
                      .devices.get($downloadDevice).title
                  }
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
                {Array.from(
                  archDownloadVariations.get($downloadArch).devices.entries(),
                ).map(([id, download]) => (
                  <ListboxOption
                    className="group flex items-center rounded-md px-3 py-1.5 gap-2 text-sm font-medium data-focus:bg-gray-700 select-none cursor-default"
                    key={id}
                    value={id}
                    aria-label={download.title}
                  >
                    <Checkmark className="invisible group-data-selected:visible" />
                    {download.title}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>

        {$downloadDevice === "generic" ? (
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
                    {
                      archDownloadVariations
                        .get($downloadArch)
                        .installers.get($downloadInstaller).title
                    }
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
                  {Array.from(
                    archDownloadVariations
                      .get($downloadArch)
                      .installers.entries(),
                  ).map(([id, installer]) => (
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
        ) : (
          <></>
        )}
      </div>

      <p className="text-gray-200 mt-4">
        {
          archDownloadVariations.get($downloadArch).devices.get($downloadDevice)
            .description
        }
        {$downloadDevice === "generic" &&
          $downloadInstaller === "readymade" && (
            <Trans t={t("downloadOptions.readymadeNote")}>
              <a
                href="https://github.com/FyraLabs/readymade/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-200 hover:text-accent-400 transition-colors"
              />
            </Trans>
          )}
      </p>
    </>
  );
};

export default DownloadOptions;
