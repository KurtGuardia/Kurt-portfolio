/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          from: { filter: 'hue-rotate(0deg)' },
          to: { filter: 'hue-rotate(360deg)' },
        },
      },
      animation: {
        animate: 'animate 3s linear infinite',
      },
      boxShadow: {
        glow: '2px 2px 2px #00000080, 10px 1px 12px #00000080, 2px 2px 10px #00000080, 2px 2px 3px #00000080, inset 2px 2px 10px #00000080',
      },
      textShadow: {
        glow: '0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')], // Install tailwindcss-textshadow plugin for text-shadow
};
