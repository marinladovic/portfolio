/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      accent: 'var(--theme-accent)',
      primary: 'var(--theme-primary)',
      // accent: '#00ffd0',
      // primitive: '#005963',
    },
    fontFamily: {
      sans: ['Lato', 'ui-sans-serif', 'sans-serif'],
      mono: ['Roboto Mono', 'ui-monospace'],
    },
  },
  plugins: [],
};
