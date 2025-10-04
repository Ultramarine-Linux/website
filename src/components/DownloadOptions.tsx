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
                These images are for generic x86 computers, if you are unsure
                what you have, this is probably what you want.
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
                These images come with the software and install methods
                necessary to be installed on a stock firmware Chromebook, and
                UEFI full ROM Chromebook. More information can be found on our{" "}
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
                These images come with the software necessary to boot and
                install on x86_64 Microsoft Surface devices. More information
                can be found on our{" "}
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
                These images are for generic ARM (aarch64) computers, more info
                and supported devices can be found on our{" "}
                <a
                  href="https://wiki.ultramarine-linux.org/en/anywhere/arm/"
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
          "rpi34",
          {
            title: "Raspberry Pi 3/4",
            description: (
              <>
                These are images are preinstalled, meant to be flashed right
                onto an SD card/USB stick for use on a Raspberry Pi. More
                information can be found on our{" "}
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
            title: "Arm Chromebooks (beta)",
            description: (
              <>
                These images use various patches to enable support on some
                modern ARM Chromebooks. Note that these images must be used with
                stock firmware, and may not be as stable as the others. More
                info and supported devices can be found on our{" "}
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
