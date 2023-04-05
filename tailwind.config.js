/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        first: "#1F1F1F",
        second: "#241909",
        third: "#00F6ED",
        fourth: "#CAD8DE",
        fifth: "#FFD6BA",
        sixth: "#C23434"
      }
    },
  },
  plugins: [],
}
