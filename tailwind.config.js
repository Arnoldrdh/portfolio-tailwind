/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '10px'
    },
    extend: {
      colors: {
        primary : '#14b8a6',
        secondary:'#64748b',
        dark : '#020617',
      },
      screens:{
        'xl' : '1420px'
      }
    },
  },
  plugins: [],
}

