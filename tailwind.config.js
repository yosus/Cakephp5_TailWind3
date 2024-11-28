/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.php",
    "./webroot/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ttuPattern: "url('https://via.placeholder.com/600x200.png')",
      },
      colors: {
        primary: '#f43f5e',
        'primary-gradient':{    // from Rose color
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        }
      },
    },
  },

  // Enable this item below to work with Bootstrap! All tailWind css will have to prefix with this 'tw-'.
  // E.g instead of "px-5" call "tw-px-5"
  // prefix: "tw-",

}