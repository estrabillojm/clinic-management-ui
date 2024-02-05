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
        cmssuccess: '#057A55'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
