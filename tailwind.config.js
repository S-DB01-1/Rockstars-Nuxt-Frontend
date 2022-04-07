module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '8rem',
      },
    },
    fontSize: {
      'xs': '1rem',
      'sm': '1.25rem',
      'tiny': '1.5rem',
      'base': '2rem',
      'lg': '2.813rem',
      'xl': ['4.375rem', {
        lineHeight: '4rem',
      }],
    }
  },
  plugins: []
}
