/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem'
      },
      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.6rem',
        xl: '1.8rem',
        '2xl': '2rem',
        '3xl': '2.2rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          light: '#85d7ff',
          DEFAULT: '#161642',
          dark: '#009eeb'
        },
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1'
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc'
        }
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
