/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'fadeleft': {
          '0%': {
            // transform: 'translateX(200px) rotate(180deg)',
            opacity: '0%',
            filter: 'drop-shadow(0px 0px 0px rgba(28,28,159,0.5))'
          },
          '100%': {
            // transform: 'translateX(0px) rotate(180deg)',
            opacity: '100%',
            filter: 'drop-shadow(10px 10px 30px rgba(28,28,159,0.5))'
          }
        },
        'pudar': {
          '0%, 100%': {
            filter: 'drop-shadow(0px 0px 0px rgba(28,28,159,0.5))'
          },
          '50%': {
            filter: 'drop-shadow(10px 10px 30px rgba(28,28,159,0.5))'
          }
        },
        'warna': {
          '0%, 100%': {
            background: 'linear-gradient(to bottom right, #1C1C9, #FF0066)'
          },
          '50%': {
            background: 'linear-gradient(to top right, #FF0066, #1C1C9)'
          }
        },
        'faderight': {
          '0%' : {
          transform: 'translateX(-200px)'
          },
          '100%': {
            transform: 'translateX(20px)'
          } 
        }
      },
      animation: {
        'fadeleft' : 'fadeleft 1s ease-in, pudar 3s infinite',
        'warna': 'warna 3s ease-in infinite',
        'faderight' : 'faderight 10s ease in'
      },
      colors: {
        'background': '#39298F',
        'background-2': '#1C1C9F',
        'background-3': '#2350F4',
        'button': '#FA9021',
        'primary' : '#01051e'
      },
      fontFamily: {
        'poppins': 'poppins, sans-serif'
      },
    },
  },
  plugins: [],
}

