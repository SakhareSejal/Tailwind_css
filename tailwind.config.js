/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'purple': '#6C5DD3;',
      },
      top: {
        'custom': '10%',
      },

      maxWidth: {
        'max': '992px',
      }
    },
  },
  plugins: [],
}
