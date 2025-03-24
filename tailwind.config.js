/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/brandguide/layouts/**/*.html",
    "./content/**/*.{md,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 