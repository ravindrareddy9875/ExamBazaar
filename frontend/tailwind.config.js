/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'vsm':'150px',

      'vsm1':'350px',

      'vsm2':'500px',

      'sm': '640px',

      'sm1': '700px',
     
      'md': '768px',
      
      'lg': '1024px',


      'xl': '1280px',
  

      '2xl': '1536px',
     
    }
  },
  plugins: [],
}
