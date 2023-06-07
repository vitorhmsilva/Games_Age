/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-red': '#2c2c2c',
        'secondary-red': '#AA0000',
        'primary-black': '#08020e',
        'secondary-black': '#08020e',
        'secondary-outline': '#2c2c2c',
        'card-bg': '#290b3753',
        'text-color-white': '#e8e0e0',
      },
      backgroundImage: {
        space: "url('/public/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
