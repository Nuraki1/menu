/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ED1F24',
        customLightRed: '#E1DDD2',
        customYellow: '#F3EC19',
        customCream: '#F7F7F7'
      }
    },
  },
  plugins: [],
};
 
