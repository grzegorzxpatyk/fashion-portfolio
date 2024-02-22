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
        },
        'flip-y': {
          'from': {
            transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(0deg) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) perspective(var(--tw-perspective))'
          },
          'to': {
            transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(180deg) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) perspective(var(--tw-perspective))'
          }
        },
        'flip-y-reverse': {
          'from': {
            transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(180deg) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) perspective(var(--tw-perspective))'
          },
          'to': {
            transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(0deg) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z)) perspective(var(--tw-perspective))'
          }
        }
      },
      animation: {
        'blur-in': 'blur-in 2s ease-in-out 1',
        'show-stretch': 'show-stretch .3s ease-in-out 1',
        'hide-stretch': 'show-stretch .3s ease-in-out 1 reverse',
        'flip-y': 'flip-y .5s ease-in-out 1',
        'flip-y-reverse': 'flip-y-reverse .5s ease-in-out 1'
      }
    },
  },
  plugins: [
    (tailwindCss3d)({ legacy: true }),
  ],
}

