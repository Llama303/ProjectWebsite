/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.{html,js}",
      "./AboutUsPage/**/*.{html,js}"
    ],
    theme: {
      extend: {
        colors: {
          // You can add your custom colors from style.css here if needed
        },
        fontFamily: {
          'jersey': ['"Jersey 10"', 'sans-serif'],
          'oswald': ['Oswald', 'sans-serif'],
          'gravitas': ['"Gravitas One"', 'serif'],
          'platypi': ['Platypi', 'serif'],
        },
      },
    },
    plugins: [],
  }