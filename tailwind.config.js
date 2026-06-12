/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        surface: '#0A0A0A',
        card: '#111111',
        border: 'rgba(255, 255, 255, 0.1)',
        primary: '#EDEDED',
        secondary: '#A1A1AA',
        accent: '#2563eb', // subtle blue accent if needed
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-in-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-in-out forwards',
        'orbit': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit-reverse 30s linear infinite',
        'fade-in-delayed': 'fadeIn 1.5s ease-in-out 1.2s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}