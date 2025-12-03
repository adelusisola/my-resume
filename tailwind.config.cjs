/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./contact.html"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a1a1a",
        "dark-text": "#e6e6e6",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
