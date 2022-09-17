/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./src/**/*.{js,jsx, html, tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'rojo': '#e90606'
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}