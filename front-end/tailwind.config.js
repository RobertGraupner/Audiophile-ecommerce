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
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        modalSlideIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out',
        modalSlideIn: 'modalSlideIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
