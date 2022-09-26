/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      accent: 'var(--theme-accent)',
      primary: 'var(--theme-primary)',
      place: 'var(--theme-place)',
      // accent: '#00ffd0',
      // primitive: '#005963',
    },
    fontFamily: {
      sans: ['Lato', 'ui-sans-serif', 'sans-serif'],
      mono: ['Roboto Mono', 'ui-monospace'],
    },
    screens: {
      xs: '375px',
      // => @media (min-width: 375px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
