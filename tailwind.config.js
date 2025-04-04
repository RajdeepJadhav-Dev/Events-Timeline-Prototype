/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nullshock: ["Nullshock BD", "sans-serif"],   
      },
      animation: {
        slowspin: "spin 20s linear infinite", // Slows down rotation
      },
    },
  },
  plugins: [],
};
