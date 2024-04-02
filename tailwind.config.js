/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "720px",

      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#246068',
        secondaryBg: '#3AA0AC',
        activeLink: '#EBCD63',
        defaultBg: '#EEE9E9'
      }
    },
  }
};
