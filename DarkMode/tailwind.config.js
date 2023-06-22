// ./tailwind.config.js

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "var(--color-body)",
        background: "var(--color-background)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};