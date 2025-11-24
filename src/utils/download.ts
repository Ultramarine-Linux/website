export const downloadLink = (
  edition: string,
  version: string,
  arch: string,
  device: string,
  installer: string,
) =>
  `/fyra-images/isos/ultramarine/${version}/ultramarine-${edition}-${version}-${device === "generic" ? `live${installer === "anaconda" ? "-anaconda" : ""}` : device}-${arch}.iso`;
