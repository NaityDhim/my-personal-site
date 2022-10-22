/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    center: true,
    extend: {},
  },
  plugins: [require("daisyui")],
}
