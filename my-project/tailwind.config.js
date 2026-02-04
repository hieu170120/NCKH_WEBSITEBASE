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
        primary: '#00ccff',
        secondary: '#ff00ff',
        dark: "#111111",
      },
    },
  },
  plugins: [],
} 