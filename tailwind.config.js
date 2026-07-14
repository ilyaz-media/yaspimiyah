/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(59.6% 0.145 163.225)',
        secondary: '#D4A017',
        dark: '#0F172A',
        light: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 15px 35px rgba(0,0,0,.12)',
      },
      borderRadius: {
        xl2: '20px'
      }
    }
  },
  plugins: [],
}
