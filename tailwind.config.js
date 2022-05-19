module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        teal: "#185C77",
        darkTeal: "#022B3B",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        "main": "url('../assets/main.jpeg')",
      },
    },
  },
  plugins: [],
};
