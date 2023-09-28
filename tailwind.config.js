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
        'show-stretch': {
          '0%': { display: 'hidden', height: '0', opacity: '0' },
          '1%': { display: 'block' },
          '100%': { height: '2rem', opacity: '1' }
        }
      },
      animation: {
        'blur-in': 'blur-in 2s ease-in-out 1',
        'show-stretch': 'show-stretch .3s ease-in-out 1',
        'hide-stretch': 'show-stretch .3s ease-in-out 1 reverse'
      }
    },
  },
  plugins: [
    (tailwindCss3d)({ legacy: true }),
  ],
}

