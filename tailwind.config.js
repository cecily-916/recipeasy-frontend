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
        "newreci-img": "url('/src/assets/recipe.jpeg')",
        "plain-img": "url('/src/assets/plain.jpeg')",
        "bowls-img": "url('/src/assets/bowls.jpeg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
