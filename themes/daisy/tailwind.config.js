/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      dracula: {
        ...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
        ".text-rts-orange": {
          "text-color": "#FA623D"},
      }}],
  },
}

