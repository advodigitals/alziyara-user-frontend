/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
       backgroundImage: {
        // homeImage: "url('/Assets/images/logo.png')",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "navbar-color" : "var(--navbar-color)",
        "drop-down" : "var(--buttondrop-color)",
        "main-color" : "var(--main-color)",
        "button-hover" : "var(--button-hover)",
      },},
  },
  plugins: [],
}

