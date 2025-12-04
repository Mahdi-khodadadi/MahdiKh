/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary : '#573ebb',
        backg : '#181721',
        backg2 : '#22202a',
      },
      fontFamily: {
        "Poppins" : "Poppins"
      }
    },
  },
  plugins: [],
}

