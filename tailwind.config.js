/** @type {import('tailwindcss').Config} */
module.exports = {
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
        deep: "#0012B4",
      },
      title: {
        default: "#0F172A",
      },
      body: {
        default: "#0F172A",
        two: "#454545;",
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
      border: {
        default: "#D9D9D9",
        thumb: "#bbd4f5",
      },
      transparent: {
        default: "#ffffff00",
      },
    },
    borderColor: {
      border: {
        dark: "#000",
        default: "#D9D9D9",
        thumb: "#bbd4f5",
        title: "#0F172A",
        base: "#0019fd",
        baseDark: "#0012B4",
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
      fontSize: {
        xs: "0.8rem",
        sm: "0.875rem",
        base: "1rem",
        xl: "1.5rem",
        xl2: "1.375rem",
        xl3: "1.625rem",
        "2xl": "2rem",
        "3xl": "2.225rem",
        "4xl": "3rem",
        "5xl": "3.875rem",
      },
    },
  },
  plugins: [],
};
