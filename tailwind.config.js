/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lionex: {
          primary: "#f78134",
          black: "#062f3a",
          gray: "#585b6b",
          "primary-rgb": "253,85,35",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        "reveal-left": "revealLeft 1s ease-out",
        "reveal-right": "revealRight 1s ease-out",
      },
      keyframes: {
        revealLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        revealRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
