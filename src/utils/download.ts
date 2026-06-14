export const downloadLink = (
  edition: string,
  version: string,
  arch: string,
  device: string,
  installer: string,
) =>
  `/fyra-images/isos/ultramarine/${device === "surface" ? "43" : version}/ultramarine-${edition}-${device === "surface" ? "43" : version}-${device === "generic" ? `live${installer === "anaconda" ? "-anaconda" : ""}` : device}-${arch}.iso`;
