/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   
  theme: {
    extend: { 
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "third-color" : "var(--third-color)",
        "main-color" : "var(--main-color)",
        "button-hover" : "var(--button-hover)",
        "black-color" : "var(--black-color)",
        "dropdown-hover" : "--dropdown-hover",
      },},
  },
  plugins: [
     require('tailwind-plugin-typed')({
      delimiter: ';',
      typeLetterDuration: 0.1,
      pauseAfterWordDuration: 2,
      deleteLetterDuration: 0.05,
      pauseAfterDeletionDuration: 1,
    }),
  ],
}

