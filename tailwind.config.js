/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Be Vietnam Pro',
      },
      colors: {
        'blue-primary': 'hsl(228, 39%, 23%)',
        'blue-dark': 'hsl(233, 12%, 13%)',
        'red-primary': 'hsl(12, 88%, 59%)',
        'red-light': 'hsl(13, 100%, 96%)',
        'gray-light': 'hsl(227, 12%, 61%)',
        'gray-lighter': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
