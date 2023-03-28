/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        ...defaultColors,
        slateBlue: '#7857ff',
        royalBlue: '#2e2be9',
        violetBlue: '#4e21ca',
        persianBlue: '#2421ca',
        lightLavender: '#c8c7ff',
        darkGray: '#303b5a',
        lightRed: '#ff5757',
        orangeYellow: '#ffb01f',
        greenTeal: '#00bd91',
        cobaltBlue: '	#1125d4',
      },
    },
  },
  plugins: [],
};

// 'Inter', ;
