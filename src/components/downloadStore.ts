import { atom } from "nanostores";

// The reason why we use global state here is:
// We need to dynamically update the download link per section based on these options
// If we passed these down as props, the download links and sections would need to all be react
// Astro doesn't let you use <Image/> in React components, the only way around that is to pass images as a slot
// However, passing down images as a slot would make the codebase harder to maintain, and not make much sense
// Because of that, instead
// DownloadOptions which shows the toggles updates the global state
// DownloadLinks which is a small subcomponent of the download section reads the global state, and updates the download link
// If there's a better way to do this (or a way to use <Image/> in react), please let me know

export const downloadArch = atom("x86_64");
export const downloadDevice = atom("generic");
export const downloadInstaller = atom("anaconda");
