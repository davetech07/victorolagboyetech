/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1116",
        mist: "#F4F7FB",
        slate: "#5E6A7D",
        line: "#DDE4EE",
        accent: "#0EA5A5",
        "accent-deep": "#0B7C7C",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 48px rgba(10, 22, 40, 0.08)",
      },
    },
  },
  plugins: [],
};
