/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gillsans: ["Gill Sans", "Gill Sans MT", "Calibri", "sans-serif"],
      },
      colors: {
        purple: "#5e548e",
        lightPurple: "#fbf7ff",
      },
    },
  },
  plugins: [],
};
