/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '320px', // ip 4
      md: '375px', // ip 6,7,8
      lg: '768px', // ipad
      xl: '1513px' // desktop
    },
    extend: {},
    fontFamily: {
      bs_stencil: ['Big Shoulders Stencil Text', 'sans-serif'],
      bs_text: ['Big Shoulders Text', 'sans-serif'],
      bs_display: ['Big Shoulders Display', 'sans-serif'],
      grotesk: ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: []
};
