// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purplest: '#733FC8',
        dark: '#48556A',
        darkest: '#19202D',
        gray: '#CFCFCF',
        'light-purple': '#A775F1',
        'light-purplest': '#733FC8',
        'dark-white': '#ECF2F8'
      },
      fontSize:{
        '11px': '0.6875rem',
        '13px': '0.8125rem'
      },
      lineHeight: {
        '18': '1.125rem',
       },
       spacing: {
        '540/1440': '33.75rem'
      }
    },
  },
  plugins: [],
}