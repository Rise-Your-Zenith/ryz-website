/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita o dark mode manual (via botão)
  theme: {
    extend: {
      colors: {
        ryz: {
          dark: '#293542',   // Fundo Darkmode
          blue: '#3241EE',   // Azul Principal
          light: '#F3F4F6',  // Fundo Lightmode (um cinza bem suave)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Texto corrido
        clash: ['Clash Display', 'sans-serif'], // Títulos
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}