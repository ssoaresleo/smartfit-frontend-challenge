/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#808080",
        "yellow": "#FFB612",
        "red": "#dc0a17",
        "green": "#2FC022",
      },
    },
  },
  plugins: [],
};
