/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'main': '#23BE0A',
      'second': '#59C6D2',
      'third': '#1313130D',
      'fourth': '#328EFF',
      'fifth': '#FFAC33',      
    },
    fontFamily: {
      'playfair': ["Playfair Display", "serif"],
      'worksans': ["Work Sans", "sans-serif"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

