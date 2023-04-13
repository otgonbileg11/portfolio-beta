/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1b1106',
        secondary: '#565151',
        accent: 'rgb(67, 66, 66)',
        softwhite: 'rgb(254, 254, 254)',
        shadow: 'rgb(182, 234, 218)'
      }
    },
  },
  plugins: [],
}

