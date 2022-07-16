/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        cyan: "hsl(180, 66%, 49%)",
        darkviolet: "hsl(257, 27%, 26%)",
        violet: "#3A3053",
        // ### Secondary

        red: "hsl(0, 87%, 67%)",

        // ### Neutral

        gray: "#F0F1F6",
        darkgray: "#97979F",
        lightblue: "#28CED2",
        lightcyan: "#9BE3E2",
        black: "#312E37",
        lightblack: "#232027",
      },
      backgroundImage: {
        "hero-illustration": "url('images/illustration-working.svg')",
        "boost-pattern-desktop": "url('images/bg-boost-desktop.svg')",
        "boost-pattern-mobile": "url('images/bg-boost-mobile.svg')",
        "shorten-pattern-desktop": "url('images/bg-shorten-desktop.svg')",
        "shorten-pattern-mobile": "url('images/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
