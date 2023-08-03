/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#F8F4EB",
        "gray-50":"#EFE6e6",
        "gray-100":"#DFCCCC",
        "gray-500":"#5E0000",
        "primary-100":"#FFA1E0",
        "primary-300":"#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400":"#FFCD58",
        "secondary-500":"#FFC132",

    },
    backgroundImage:(theme)=>({
      "gradient-yellowred":"linear-gradient(90deg,#FFF616A 0%, #FFC837 100%)",
      "mobile-home":"url('./assets/HomePageGraphic.png')",
    }),
    fontFamily: {
      dmsans: ["Dm Sans","sans-serif"],
      montserrat:["Montserrat","sans-serif"]
    },
    content:{
      evolvetext:"url('./assets/EvolveText.png)",
      abstractwaves:"url('./assets/AbstractWaves.png)",
      Sparkels:"url('./assets/Sparkles.png)",
      Cirlces:"url('./assets/Circles.png)",
    }
  },
  screens:{
    xs:"480px",
    sn:"768px",
    md:"1060px",
  }
},
  plugins: [],
}