/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        "source-serif": ["Source Serif Pro", "serif"],
        "sf-pro": ['"SF Pro"', "sans-serif"],
        "sf-pro-l": ['"SF Pro Light"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      borderRadius: {
        custom: "90px",
      },
      borderWidth: {
        2.5: "2.5px", // Example custom border width
      },
    },
    // Other Tailwind config...
  },
};
