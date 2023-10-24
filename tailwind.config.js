/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'body' : '#f5d14d',
      },
      backgroundImage: theme => ({
        'cover_undangan': "url('/src/assets/images/cover.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

