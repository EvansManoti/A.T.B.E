/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'm-orange': '#C14618',
        'light-orange': '#F85518',
        light: 'rgba(21,20,25,0.1)',
      },
      boxShadow: {
        'bs-light': '0px 0px 15px 0px rgba(21,20,25,0.1)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

