/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx, html, tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'rojo': '#e90606'
      }
    },
  },
  plugins: [],
}