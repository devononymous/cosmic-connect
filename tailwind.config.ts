/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-black': '#0A0E17',
        'nebula-purple': '#7C3AED',
        'star-yellow': '#FBBF24',
          'starlight-white': '#E6E6FA',
        'neon-cyan': '#00FFFF',
        'glow-indigo': '#7B68EE',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}