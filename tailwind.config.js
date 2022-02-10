module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      quicksand: "quicksand, bold",
    },
    extend: {
      backgroundImage: {
        "bg-img": "url('/src/assets/lemons.jpeg')",
        "home-img": "url('/src/assets/lemon-m.jpeg')",
        "coll-img": "url('/src/assets/lemons_public.jpeg')",
      },
    },
  },
  plugins: [],
};
