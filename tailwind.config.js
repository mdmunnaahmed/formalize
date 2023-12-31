/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./dist/*{html,js}"],
  content: ["./dist/*.{html,js}"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1440px",
    },
    colors: {
      base: {
        default: "#0019fd",
        light: "#0772FF",
        dark: "#041E60",
      },
      title: {
        default: "#0F172A",
      },
      body: {
        default: "#0F172A",
      },
      white: {
        default: "#fff",
      },
      gray: {
        light: "#F1F5F9",
        medium: "#3E3E3E",
      },
      dark: {
        default: "#000",
      },
    },
    borderColor: {
      border: {
        default: "#D9D9D9",
        thumb: "#bbd4f5",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        base: {
          400: "#0019fd",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.225rem",
        "4xl": "3rem",
        "5xl": "3.875rem",
      },
    },
  },
  plugins: [],
};
