const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html"],
  theme: {
    screens: {
      'xs': '575px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
