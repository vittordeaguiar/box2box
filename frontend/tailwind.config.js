/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-cemetery': 'rgb(28, 33, 42)'
      },
      screens: {
        'fold': '260px',
      },
    },
  },
  plugins: [],
}