/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      light: '#00ffd0',
      dark: '#005963',
    },
    fontFamily: {
      sans: ['Lato', 'ui-sans-serif', 'sans-serif'],
      mono: ['Roboto Mono', 'ui-monospace'],
    },
  },
  plugins: [],
};
