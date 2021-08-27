module.exports = {
  mode: "jit",
  future: "all",
  experimental: "all",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: "#22d3ee",
        "light-blue": "#0ea5e9",
        lime: "#bef264",
        emerald: "#10b981",
        orange: "#fb923c",
        "orange-500": "#f97316",
        "cyan-500": "#06b6d4",
      },

      maxHeight: {
        64: "31.25rem",
      },
      minHeight: {
        25: "16rem",
      },

      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: { color: theme("colors.gray.100") },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
