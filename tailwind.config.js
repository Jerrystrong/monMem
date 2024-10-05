/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7':'52px',
        '10':'100px',
        '12':'120px',
        '15':'225px'
      },
      colors:{
        yellowB:"#FFDA79",
        greenLight:{
          400:"#77BAAA",
          500:"#56877B",
        },
        darkLight:"#485563",
        grayP:"CACACA"
      }
    },
  },
  plugins: [],
}

