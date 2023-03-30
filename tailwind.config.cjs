/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: { 100: "#92C4FC", 500: "#1D4ED8", 600: "#1D3B8A" },
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(300px, max-content))",
      },
    },
  },
  plugins: [],
};
