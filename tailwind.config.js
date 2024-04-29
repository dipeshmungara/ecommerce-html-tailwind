const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}