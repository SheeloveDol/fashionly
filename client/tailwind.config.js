/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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

