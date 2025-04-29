// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            500: 'hsl(262, 83%, 58%)',
          },
          blue: {
            500: 'hsl(199, 89%, 48%)',
          },
          pink: {
            500: 'hsl(326, 100%, 60%)',
          },
        },
      },
    },
    plugins: [],
  }