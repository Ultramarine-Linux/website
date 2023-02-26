/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      colors: {
        gray: {
          600: '#2e323d',
          700: '#272b34',
          800: '#181a20',
          900: '#0e1015'
        },
        blue: {
          '50': '#edf3ff',
          '100': '#deeaff',
          '200': '#c3d7ff',
          '300': '#9fbbff',
          '400': '#7996ff',
          '500': '#5a70fa',
          '600': '#3c47ef',
          '700': '#2e35d4',
          '800': '#2b33b5',
          '900': '#293186'
        }
      },
      screens: {
        'xs': '480px',
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography')
  ]
}
