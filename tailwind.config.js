/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#364A63",
        priceText: "#6576FF",
        baseText: "#8091A7",
        bandColor1: "#816BFF",
        bandColor2: "#1FCEC9",
        bandColor3: "#4B97D3",
        bandColor4: "#3B4747",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

