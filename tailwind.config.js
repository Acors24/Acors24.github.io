/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#ff1f48", light: "#ff6581", dark: "#c7002b" },
      },
    },
  },
  plugins: [],
};
