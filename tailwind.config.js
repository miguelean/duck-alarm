/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      spacing: {
        0.3: "0.075rem",
        0.7: "0.175rem",
      },
    },
  },
  plugins: [],
}
