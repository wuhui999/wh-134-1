/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        wetland: {
          dark: '#1a4a4a',
          deep: '#0d3333',
          mid: '#2a6a6a',
          light: '#3a8a8a',
          sand: '#d4a574',
          sky: '#6bb5c9',
          reed: '#c9b458',
          dusk: '#e07a3a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
