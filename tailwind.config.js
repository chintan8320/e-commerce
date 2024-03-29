/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          'xsm': '375px',
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        bodoni: ["Bodoni Moda"],
      },
      colors: {
        themelightcolor: "#2B2A29",
        white: "#ffffff",
        transparent: "transparent",
        current: "currentColor",
        themetext: "#ABA77A",
        themetextcolor: {
          start: "#FECC00",
          end: "#E85222",
        },

        // themePink: "#F5F0EA",
        // themeBlack: "#070707",
        // themeGray: "#7C7775",
        // lightGray: "#d1d5db",
        // darkGray: "#858181",
        // darkBrown: "#1A1818",
        // semiBlack: "#040100",
        // lightcolor: "#F5F0EB",
        // lightcolorOpacity80: "#f5f0ebba",
        // transparentBlack: "#243447ba",
        // peachColor: "#f7f4f1",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
