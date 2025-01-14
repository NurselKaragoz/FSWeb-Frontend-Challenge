/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: "class",

  theme: {
    extend: {},

    colors: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#EEEBFF",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
        bluex: "#3730A3",
        black: "#000000",
        graytext: "#6B7280",

        blue100: "#4338CA",
        black100: "#1F2937",
        gray100: "#F9F9F9",
        green100: "#00AB6B",
        blue200: "#0077B5",
        red100: "#AF0C48",
        purpletext: "#7B61FF",
        purple100: "#bab2e7",
        purple200: "#B7AAFF",
        purple300: "#8F88FF",
        purple400: "#E1E1FF",
        black200: "#252128",
        black300: "#141414",
        gray200: "#AEBCCF",
      },
    },
  },
  plugins: [],
};
