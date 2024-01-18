/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "512px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        gray: "#9CA3AF",
        darkGray: "#666666",
        darkerLightGray: "#9CA3AF",
        darkerGray: "#6B7280",
        darkestGray: "#111827",
        rose: "#BE123C",
        lightRose: "#BE123C1A",
        lightGray: "#C7C7C7",
        lightestGray: "#D1D5DB",
        extraLightGray: "#E8E8E8",
        glassGray: "rgba(243, 244, 246, 0.50)",
        borderGray: "#F8E7EB",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
