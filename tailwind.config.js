/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "gray-900" : "hsl(0, 0%, 8%)",
        "gray-800": "hsl(0, 0%, 12%)",
        "gray-700":" hsl(0, 0%, 20%)",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

