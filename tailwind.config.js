/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kenya: {
          green: "#006600",
          red: "#BB0000",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};