/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      "xs": "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors:{
        "brown":{
          100:"#ECE0D1",
          300:"#DBC1AC",
          600:"#967259",
          900:"#634832",

        }
      },
      spacing:{
        "4.5":"1.125rem",
        "25":"6.25rem",
        "50":"12.5rem",
      },
      boxShadow:{
        "normal":"0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius:{
        "4xl":"2rem"
      },
      fontFamily:{
        "Dana":"Dana",
        "DanaMedium":"Dana Medium",
        "DanaDemiBold":"Dana DemiBold",
        "MorabbaLight":"Morabba Light",
        "MorabbaMedium":"Morabba Medium",
        "MorabbaBold":"Morabba Bold",
        
      },
      letterSpacing:{
        "tightest":"-0.065em"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          lg:"0.625rem",
        }
      },
      backgroundImage:{
        "home-mobile":"url(./assets/headerBgMobile.webp)",
        "home-desktop":"url(./assets/headerBgDesktop.webp)"
      }
    },
  },
  plugins: [
    function({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover')
    }
  ],
}

