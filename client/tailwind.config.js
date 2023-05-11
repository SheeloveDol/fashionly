/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '300': 'repeat(auto-fill, 300px)',
        'forms': 'repeat(4, minmax(0, 1fr))',
      }
    },
  },
  // Add daisyUI plugins
  plugins: [require('daisyui')],

  // DaisyUI config 
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

