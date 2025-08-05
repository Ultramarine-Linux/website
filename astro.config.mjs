import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ultramarine-linux.org",
  integrations: [mdx(), sitemap(), icon(), react()],

  redirects: {
    "/release-announcements/40": {
      status: 302,
      destination:
        "https://wiki.ultramarine-linux.org/en/release/upgrade-to-ultramarine-40/",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});