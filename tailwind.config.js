/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   
  theme: {
     container: {
      screens: {
        xsm : '510px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl':'1536px',
      },
    },
    extend: { 
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "third-color" : "var(--third-color)",
        "main-color" : "var(--main-color)",
        "button-hover" : "var(--button-hover)",
        "black-color" : "var(--black-color)",
        "dropdown-hover" : "var(--dropdown-hover)",
        "service-bg" : "var(--background-color)",
        "visa-bg" : "var(--visa-color)",
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

