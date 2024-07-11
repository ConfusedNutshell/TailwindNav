/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`/.*html`,
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        verydarkBlue: '#0B132B',
        darkBlue: '#1c2541',
        darkGrayishBlue: '#3A506B',
        lightBlue: '#5BC0BE',
        veryLightBlue: '#6FFFE9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

