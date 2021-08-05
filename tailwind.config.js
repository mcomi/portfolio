module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        125: "31.25rem",
      },
      minHeight: {
        125: "31.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
