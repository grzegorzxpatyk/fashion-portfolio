/** @type {import('tailwindcss').Config} */
import tailwindCss3d from 'tailwindcss-3d'
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow': "'Barlow', sans-serif",
      },
      keyframes: {
        'blur-in': {
          '0%': { filter: 'blur(15px)' },
          '100%': { filter: 'blur(0px)' }
        },
      },
      animation: {
        'blur-in': 'blur-in 2s ease-in-out 1',
      }
    },
  },
  plugins: [
    (tailwindCss3d)({ legacy: true }),
  ],
}

