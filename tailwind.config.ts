/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sk: 'Sk-Modernist, serif',
        skMono: 'Sk-Modernist-Mono, monospace',
      },
      keyframes: {
        btnSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        btnSlide: 'btnSlide 0.5s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
