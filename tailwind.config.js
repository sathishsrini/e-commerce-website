/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'blink-3d': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)', 
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)' 
          },
          '25%': { 
            transform: 'scale(1.1) rotate(-10deg)', 
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.9)' 
          },
          '50%': { 
            transform: 'scale(1.2) rotate(10deg)', 
            boxShadow: '0 0 30px rgba(0, 255, 0, 1)' 
          },
          '75%': { 
            transform: 'scale(1.1) rotate(-10deg)', 
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.9)' 
          },
        },
      },
      animation: {
        'blink-3d': 'blink-3d 1.5s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
