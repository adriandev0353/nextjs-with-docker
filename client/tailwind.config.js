/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0284c7',
          accent: '#3C83F6',
        },
        secondary: {
          DEFAULT: '#38bdf8',
          accent: '#3C83F6',
        },
      },
    },
  },
  plugins: [],
}
