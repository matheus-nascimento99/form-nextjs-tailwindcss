import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      keyframes: {
        slideFadeUpDown: {
          from: { opacity: '0', tranform: 'translateY(-2px)' },
          to: { opacity: '1', tranform: 'translateY(0)' },
        },
      },

      animation: {
        slideFadeUpDown: 'slideFadeUpDown 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
