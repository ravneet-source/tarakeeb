/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#FDFBF7",
          text: "#1A1A1A",
          secondary: "#4A4A4A",
          accent: "#E5DCD3",
          overlay: "#CBB8A5",
          light: "#F6EFE6",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-cormorant)", "Helvetica", "sans-serif"],
        arabic: ["var(--font-noto-arabic)", "Tahoma", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(3rem, 8vw, 6rem)",
        section: "clamp(2rem, 5vw, 3.5rem)",
        body: ["1rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        meta: ["0.85rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        heading: "-0.02em",
      },
    },
  },
  plugins: [],
};
