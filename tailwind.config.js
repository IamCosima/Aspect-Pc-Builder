/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container:{
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}
