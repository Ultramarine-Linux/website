import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useStore } from "@nanostores/react";
import { downloadArch, downloadDevice } from "./downloadStore";

const archDownloadVariations = new Map([
  [
    "x86_64",
    {
      name: "x64",
      devices: new Map([
        ["generic", "Generic"],
        ["chromebook", "Chromebook"],
        ["surface", "Surface"],
      ]),
    },
  ],
  [
    "aarch64",
    {
      name: "ARM",
      devices: new Map([
        ["generic", "Generic"],
        ["rpi4", "Raspberry Pi 4"],
        ["rpi5", "Raspberry Pi 5"],
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
        <p className="pb-1 text-sm text-gray-300">Architecture</p>
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
        <p className="pb-1 text-sm text-gray-300">Device</p>
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
          ).map(([id, name]) => (
            <ToggleGroup.Item
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md min-w-20 px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-700 data-[state=active]:text-foreground data-[state=active]:shadow"
              value={id}
              aria-label={name}
            >
              {name}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>
    </div>
  );
};

export default DownloadOptions;
