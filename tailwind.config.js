/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        wrongDelivery: ['Wrong Delivery', 'sans-serif'],
      },
      colors: {
        background: 'rgba(var(--background))',
        primary: 'rgba(var(--primary))',
        secondary: 'rgba(var(--secondary))',
        lime: 'rgba(var(--lime))',
      },
    },
  },
  plugins: [],
};
