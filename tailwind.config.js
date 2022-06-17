module.exports = {
  mode: 'jit',
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    'content/**/*.md'
  ],
  darkMode: 'class', // or 'media' or 'class'
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
          900: '#000890',
          800: '#0d16a8',
          700: '#1821b5',
          600: '#232bad',
          500: '#2b33b5',
          400: '#363ca3',
          300: '#3f47c4',
          200: '#5b63f0',
          100: '#8289ff',
          50: '#b4b3ff'
        }
      },
      screens: {
        'xs': '480px',
      }
    } // change accent color to 000890
  },
  variants: {
    extend: {}
  },
  plugins: []
}
