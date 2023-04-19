/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //* customize tailwind css container class
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xs: "1.25rem",
        sm: "1.25rem",
        md: "2.375rem",
        lg: "2.375rem",
        xl: "4rem",
        "2xl": "5rem",
        "3xl": "10rem",
      },
    },

    //* customize tailwind css breakpoints
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        primary: "#0e9e2c",
      },
    },
  },
  plugins: [],
};
