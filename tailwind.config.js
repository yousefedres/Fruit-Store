/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        secondary: "#fb923c",
      },
      fontFamily: {
        averia: ["'Averia Serif Libre'", "serif"],
      },
    },
  },
  plugins: [],
};
