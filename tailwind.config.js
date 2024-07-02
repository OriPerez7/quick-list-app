/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Inter', 'ui-sans-serif'],
      'body': ['Nunito', 'ui-sans-serif']
    }
  },
  plugins: [],

}