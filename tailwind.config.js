/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#246068',
        secondaryBg: '#3AA0AC',
        activeLink: '#EBCD63',
        defailtBg: '#EEE9E9'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
