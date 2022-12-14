/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx, html, tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: "#e90606",
        blueFb: "#3b5998",
      },
      spacing: {
        '82': "23rem",
        '100': "30rem",
        '128': '40rem',
      }
    },
  },
  plugins: [],
};
