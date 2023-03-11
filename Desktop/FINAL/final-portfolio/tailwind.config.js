/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        
        "custom-primary": "#161d27",
        "custom-secondary": "#202a36",
        "custom-tertiary": "#6C5CE7",
        "custom-accent": "#705ff3",
        "custom-gray-2": "#C8C3BC",
        "custom-gray": "#e8e6e3"
      }
    },
  },
  plugins: [],
};
