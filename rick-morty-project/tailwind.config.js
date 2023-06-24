/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#081221",
        secundary: "#69c8ecff"
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

