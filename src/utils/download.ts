export const downloadLink = (
  edition: string,
  version: string,
  arch: string,
  device: string,
  installer: string,
) => {
  // everything but rdm is on 45

  if (installer == "readymade") {
    version = "43"
  } else {
    version = "45"
  }

  if (device === "rpi5" || device === "pinebookpro") {
    return `/fyra-images/images/ultramarine/${version}/${edition}-base-disk-aarch64.img.zst`;
  }

  return `/fyra-images/isos/ultramarine/${version}/ultramarine-${edition}-${version}-${device === "generic" ? `live${installer === "anaconda" ? "-anaconda" : ""}` : device}-${arch}.iso`;
}
