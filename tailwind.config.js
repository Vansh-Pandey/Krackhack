/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: { 
      fontFamily: { 
         bluewinter: ["BlueWinter", "cursive"],
      },
      scale: {
        108: '1.08',
      },
      boxShadow: {
        retroBlack: '8px 8px 0px 0px rgba(0,0,0,1)',
        retroRed: '6px 6px 0px 0px #EA4335',
        retroBlue: '6px 6px 0px 0px #4285F4',
      },
    },
  },
  plugins: [],
};
