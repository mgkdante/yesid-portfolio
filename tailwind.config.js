/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#b7b7b7",
        tertiary: "#1f1f1f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      width: {
        clamp: "clamp(650px, 60%, 1250px)",
      },

      height: {
        clamp: "clamp(450px, 50%, 1050px)",
      },
      backgroundColor: ["active"],
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      variants: {
        extend: {
          backdropFilter: ["hover", "focus"],
          boxShadow: ["hover", "focus", "active"],
        },
      },
    },
  },
  plugins: [],
};
