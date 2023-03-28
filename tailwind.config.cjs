/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: { 500: "#1D4ED8", 600: "#1D3B8A" },
      },
    },
  },
  plugins: [],
};
