export const downloadLink = (
  edition: string,
  version: string,
  arch: string,
  device: string,
  installer: string,
) => {
  // This code is really dumb cause it was originally made to support being able to download multiple versions, but that was never written in the frontend.
  // As of June 27th 2026, this code only gives you download links for 43 and 44, because as of 44 release, some of the 44 versions don't work and so we give you 44 instead.

  if (device == "surface" || installer == "readymade") {
    version = "43"
  } else {
    version = "44"
  }

  return `/fyra-images/isos/ultramarine/${version}/ultramarine-${edition}-${version}-${device === "generic" ? `live${installer === "anaconda" ? "-anaconda" : ""}` : device}-${arch}.iso`;
}
