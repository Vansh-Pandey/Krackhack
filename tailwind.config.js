/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* =========================
         FONTS
      ========================= */
      fontFamily: {
        bubble: ['"Baloo 2"', 'cursive'],
        monospace: ['"JetBrains Mono"', 'monospace'],
      },
      scale: {
        108: '1.08',
      },
      transitionTimingFunction: {
        bubble: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      /* =========================
         ANIMATIONS
      ========================= */
      keyframes: {
        'bubble-pop': {
          '0%': {
            transform: 'translateY(20px) scale(0.7)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateY(-6px) scale(1.1)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-6px)',
          },
        },
      },

      animation: {
        'bubble-pop': 'bubble-pop 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },

      /* =========================
         SHADOWS (retro style)
      ========================= */
      boxShadow: {
        retroBlack: '8px 8px 0px 0px rgba(0,0,0,1)',
        retroRed: '6px 6px 0px 0px #EA4335',
        retroBlue: '6px 6px 0px 0px #4285F4',
      },
    },
  },

  plugins: [],
};
