/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#4e6c50',
        'green-grey': '#A2A378',
        'brown': '#c1ae93',
        'beige': '#a7ab90',
        'red': '#FF0000	',
        'cyan': '#14ffec',
        'gray': {100: "#808080", 200: "#323223" , 300: "#212121"}
      },
      fontFamily: {
        nunito:"Nunito"
      },
      fontSize:{
        sm: "14px", 
        md: "18px", 
        lg: "24px", 
        xl: "32px", 
        base: "16px"

      },
    },
  },
  plugins: [],
}

