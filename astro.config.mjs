import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ultramarine-linux.org",
  integrations: [mdx(), sitemap(), tailwind(), icon(), react()],

  redirects: {
    "/release-announcements/40": {
      status: 302,
      destination:
        "https://wiki.ultramarine-linux.org/en/release/upgrade-to-ultramarine-40/",
    },
  },

  adapter: cloudflare(),
});
