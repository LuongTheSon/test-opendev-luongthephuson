/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'ssm': '414px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', 
        '2xl': '1513px' 
      },
      fontSize: {
        base: '16px',
        title: '72px',
        label: '32px',
        subHeading: '24px'
      },
      colors: {
        primary: '#D9D9D9',
        second: '#292929',
        redCrimson: '#E30613',
        skyBright: '#009FE3'
      },
      backgroundImage: {
        gradient_black:
          'linear-gradient(180deg, rgba(25,25,25,0) 0%, rgba(25,25,25,1) 75%)'
      },
      backgroundSize: {
        'full': '100% 100%',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2'
      }
    },
    fontFamily: {
      bs_stencil: ['Big Shoulders Stencil Text', 'sans-serif'],
      bs_text: ['Big Shoulders Text', 'sans-serif'],
      bs_display: ['Big Shoulders Display', 'sans-serif'],
      grotesk: ['Space Grotesk', 'sans-serif'],
      lexend: ['Lexend Deca', 'sans-serif']
    }
  },
  plugins: []
};
