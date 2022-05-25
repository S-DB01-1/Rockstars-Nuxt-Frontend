module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'rockstar-yellow': '#FFE000'
      }
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '1rem',
        'lg': '4rem',
        'xl': '8rem',
        '2xl': '16rem',
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
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen 2xl': {
            maxWidth: '130rem',
          },
        }
      })
    },
    require('@tailwindcss/line-clamp'),
  ]
}
