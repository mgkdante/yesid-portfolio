/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#7d756f",
        tertiary: "#1f1f1f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundColor: ['active'],
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
