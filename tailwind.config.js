module.exports = {
  content: ['./assets/**/*.{html,js}', './index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        pop:{
          50: '#6F6F6F',
          100: '#394149',
          200: '#FDA403',
          300: '#BEBEBE',
          400: '#C4C4C4',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
