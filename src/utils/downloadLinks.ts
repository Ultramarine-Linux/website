export const downloadLink = (
  edition: string,
  version: number,
  arch: string,
  device: string,
) =>
  `/fyra-images/isos/ultramarine/${version}/ultramarine-${edition}-${version}-${device === "generic" ? "live-anaconda" : device}-${arch}.iso`;
