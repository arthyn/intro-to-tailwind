const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inter var"', 'sans-serif']
    },
    extend: {
      colors: {
        gray: colors.warmGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
