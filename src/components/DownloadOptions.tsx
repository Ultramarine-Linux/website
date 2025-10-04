import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useStore } from "@nanostores/react";
import { downloadArch, downloadDevice } from "./downloadStore";

const archDownloadVariations = new Map([
  [
    "x86_64",
    {
      name: "x64",
      devices: new Map([
        [
          "generic",
          {
            title: "Generic",
            description: (
              <>
                These images are for most x86 computers, if you're not sure, this is probably what you want.
              </>
            ),
          },
        ],
        [
          "chromebook",
          {
            title: "Chromebook",
            description: (
              <>
                These images come with tweaks to be installed on Chromebooks with stock or UEFI firmware. More information can be found on our{" "}
                <a
                  href="#TODO"
                  className="text-accent-300 hover:text-accent-400"
                >
                  wiki
                </a>
                .
              </>
            ),
          },
        ],
        [
          "surface",
          {
            title: "Surface",
            description: (
              <>
                These images come with tweaks for Intel and AMD Microsoft Surfaces. More information can be found
                on our{" "}
                <a
                  href="https://wiki.ultramarine-linux.org/en/anywhere/surface/"
                  className="text-accent-300 hover:text-accent-400"
                >
                  wiki
                </a>
                .
              </>
            ),
          },
        ],
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
            title: "Generic",
            description: (
              <>
                These images are for 64bit ARM devices with support in Linux. See our wiki for more{" "}
                <a
                  href="https://fedoraproject.org/wiki/Architectures/ARM"
                  className="text-accent-300 hover:text-accent-400"
                >
                  here
                </a>
                .
              </>
            ),
          },
        ],
        [
          "rpi34",
          {
            title: "Raspberry Pi 3/4",
            description: (
              <>
                These images are preinstalled images for the Raspberry Pi 3 and 4 families. You can flash them directly to an SD card or use the Raspberry Pi Imager.Check our wiki for more information.{" "}
                <a
                  href="https://wiki.ultramarine-linux.org/en/anywhere/rpi/"
                  className="text-accent-300 hover:text-accent-400"
                >
                  wiki
                </a>
                .
              </>
            ),
          },
        ],
        [
          "armchromebook",
          {
            title: "Arm Chromebooks (Preview)",
            description: (
              <>
                These images support Chromebooks with mt81xx and sc7180 processors. See the wiki for more information.{" "}
                <a
                  href="#TODO"
                  className="text-accent-300 hover:text-accent-400"
                >
                  wiki
                </a>
                .
              </>
            ),
          },
        ],
      ]),
    },
  ],
]);

const DownloadOptions = () => {
  const $downloadArch = useStore(downloadArch);
  const $downloadDevice = useStore(downloadDevice);

  return (
    <div className="flex flex-row flex-wrap gap-4 pt-2">
      <div>
        <p className="pb-1 text-sm text-gray-200">Architecture</p>
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
          aria-label="Architecture"
        >
          {Array.from(archDownloadVariations.entries()).map(
            ([id, archVariation]) => (
              <ToggleGroup.Item
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md min-w-20 px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-700 data-[state=active]:text-foreground data-[state=active]:shadow"
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
        <p className="pb-1 text-sm text-gray-200">Device</p>
        <ToggleGroup.Root
          className="inline-flex h-9 items-center justify-center rounded-lg bg-gray-800 p-1 text-muted-foreground"
          type="single"
          value={$downloadDevice}
          onValueChange={(value) => {
            if (value) downloadDevice.set(value);
          }}
          aria-label="Devices"
        >
          {Array.from(
            archDownloadVariations.get($downloadArch).devices.entries(),
          ).map(([id, download]) => (
            <ToggleGroup.Item
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md min-w-20 px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-700 data-[state=active]:text-foreground data-[state=active]:shadow"
              value={id}
              aria-label={download.title}
            >
              {download.title}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>

      <p className="text-gray-200">
        {
          archDownloadVariations.get($downloadArch).devices.get($downloadDevice)
            .description
        }
      </p>
    </div>
  );
};

export default DownloadOptions;
