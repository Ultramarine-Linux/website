import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import i18nya from './src/i18n';
import astro_i18nya from 'astro-i18nya';
import Icons from "unplugin-icons/vite";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: "https://ultramarine-linux.org",
  integrations: [mdx(), sitemap(), react({ experimentalReactChildren: true }), astro_i18nya(i18nya)],

  redirects: {
    "/release-announcements/40": {
      status: 302,
      destination:
        "https://wiki.ultramarine-linux.org/en/release/upgrade-to-ultramarine-40/",
    },
    "/release-announcements/41": {
      status: 302,
      destination: "https://wiki.ultramarine-linux.org/en/release/41-upgrades/",
    },
    "/release-announcements/42": {
      status: 302,
      destination: "https://blog.fyralabs.com/ultramarine-42-upgrades/",
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "jsx",
        jsx: "react",
      }),
      svgr(),
    ],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "Switzer",
        cssVariable: "--font-switzer",
        weights: [300, 400, 500, 600, 700],
        display: "swap",
      },
    ],
  },
});
