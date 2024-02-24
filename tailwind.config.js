/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
    "./pages/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
        "roboto-slab": ["var(--font-roboto-slab)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
