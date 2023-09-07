const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"], //like this
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "7rem",
          "2xl": "8rem",
        },
      },
      colors: {
        avatar: "rgb(111 112 112 / 8%)",
        circle: "rgba(219, 219, 219, 0.24)",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
