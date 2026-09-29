/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#5c4632',
          dark: '#3e2e21',
          light: '#f9f6f0',
          accent: '#d4a373',
          gray: '#6b7280'
        }
      }
    },
  },
  plugins: [],
}