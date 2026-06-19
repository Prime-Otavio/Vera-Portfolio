/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Referenciados por globals.css (bg-primary, text-secondary, etc).
        primary: {
          DEFAULT: '#16a34a',
          50: '#f0fdf4',
          500: '#16a34a',
          600: '#15803d',
          900: '#14532d',
        },
        secondary: {
          DEFAULT: '#f59e0b',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
