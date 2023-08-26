/** @type {import('tailwindcss').Config} */
import tailwindCss3d from 'tailwindcss-3d'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      }
    },
  },
  plugins: [
    (tailwindCss3d)({ legacy: true }),
  ],
}

