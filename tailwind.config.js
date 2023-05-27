/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'catamaran': ['Catamaran', ...defaultTheme.fontFamily.sans],
        'neuton': ['Neuton', 'serif'],
        'mukta': ['Mukta Vaani', 'sans-serif']
      },
      colors: {
        'custom-gray': '#BBB',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

