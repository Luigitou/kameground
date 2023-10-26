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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
