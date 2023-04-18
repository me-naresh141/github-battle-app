/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EBEBEB",
        light_black: "#1C2022",
        gary: "#24282A",
      },
    },
  },
  plugins: [],
};
