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
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.5rem', { lineHeight: '1.5', fontWeight: '600 ' }],
      xl: ['3rem', { lineHeight: '1.5', fontWeight: '600 ' }]
    },
    extend: {
      spacing: {
        '37px': '37px',
        '66px': '66px',
        '15': '3.75rem'
      },
      colors: {
        'gray-500': '#F5F5F5',
        'gray-700': '#979797',
        'black-700': '#22232B',
        'black-900': '#252525'
      }
    }
  },
  plugins: [],
}
