/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card:"#F0F2EB",
        background: "#081221",
        secundary: "#69c8ecff",
        color1: "#ffff00",
        color2:"#5CAD4A"
      },
      fontFamily: {
        custom: ['inkyflutterby', "sans-serif"],
      },
      keyframes: {
        gradient: {
          "0%": { color: "#00ffff" },
          "50%": { color: "#ffff00" },
          "100%": { color: "#00ffff" },
        },
      },
      animation: {
        gradient: "gradient 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

