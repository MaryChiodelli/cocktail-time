/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    fontSize: {
      '2xl': ['1.5rem', '2.25rem']
    },
    extend: {
      spacing: {
        '21px': '21px',
        '23px': '23px',
        '29px': '29px',
        '30px': '30px',
        '37px': '37px',
        '66px': '66px'
      },
      colors: {
        'gray': '#F5F5F5',
        'black-700': '#22232B',
        'black-900': '#252525'
      }
    }
  },
  plugins: [],
}
