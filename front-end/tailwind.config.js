/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A', // orange
        'primary-light': '#fbaf85', // light orange
        secondary: '#101010', // almost black
        'nardo-grey': '#4A4A4A',
        'light-grey': '#F1F1F1',
        'very-light-grey': '#FAFAFA',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
