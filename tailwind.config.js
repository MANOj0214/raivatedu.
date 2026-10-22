/** Colour + font tokens are defined once here. */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        indigo: { 50: "#EEF0FF", 100: "#E0E4FF", 500: "#5B5BD6", 600: "#4338CA", 700: "#3730A3", 900: "#1E1B4B" },
        sun: { 300: "#FFD966", 400: "#FFC93C", 500: "#F5B50A" },
        paper: "#FBF9F4",
        ink: "#1E1B4B",
        muted: "#4B4A6B",
      },
      fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
      borderRadius: { blob: "2rem" },
    },
  },
  plugins: [],
};
