/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      rotate: {
        'y-3': 'rotateY(3deg)',
        'y-6': 'rotateY(6deg)',
        'y-9': 'rotateY(9deg)',
      },
      skew: {
        '1': '1deg',
        '2': '2deg',
        '3': '3deg',
      }
    },
  },
  plugins: [],
}

