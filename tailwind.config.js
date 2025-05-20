/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["Great Vibes", "cursive"], // For Ellie Bean's name
        serif: ["Playfair Display", "serif"] // For headings and labels
      },
      colors: {
        cream: "#FDF6EC",
        coffee: "#5C4033"
      }
    }
  },
  plugins: []
}
