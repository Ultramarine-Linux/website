/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#fefefe",
          100: "#e6e7e7",
          200: "#C8CBD8",
          300: "#ceced0",
          400: "#b5b6b8",
          500: "#9d9da0",
          600: "#6b6c71",
          700: "#222955",
          800: "#13172f",
          900: "#0d0f1b",
          950: "#0A0B14",
        },
        accent: {
          50: "#C5CAE9",
          100: "#A7B6D2",
          200: "#8F94BE",
          300: "#7F83C4",
          400: "#6E76B3",
          500: "#505ED6",
          600: "#3A47B1",
          700: "#263096",
          800: "#1A2573",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
