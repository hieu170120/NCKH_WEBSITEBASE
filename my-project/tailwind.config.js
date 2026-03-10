/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        pixelify: ['Pixelify Sans', 'sans-serif'],
      },
      colors: {
        primary: '#8B6F47',      // Coffee Brown
        secondary: '#D4A574',    // Caramel
        accent: '#A0826D',       // Mocha
        warning: '#C79A6D',      // Latte
        success: '#6B4423',      // Dark Brown
        dark: "#F5E6D3",         // Cream/Light
      },
    },
  },
  plugins: [],
} 