module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      quicksand: "quicksand, bold",
    },
    extend: {
      backgroundImage: {
        "bg-img": "url('/assets/lemons.jpeg')",
        "home-img": "url('/assets/lemon-m.jpeg')",
      },
    },
  },
  plugins: [],
};
