/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["var(--font-monument)",],
      },
      colors: {
        'accent': '#5D5FEF',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'card-bg': 'rgba(3, 8, 50, 0.8)',
        'card-active': '#5D5FEF',
        'card-bg': '#030832',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 25s linear infinite',
      },
    },
  },
};
