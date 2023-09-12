const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    colors: {
      blue: "#41A3D3",
    },
    fontFamily: {
      mono: ["Consolas"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
