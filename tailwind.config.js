/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   
  theme: {
     container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
        "hash-color-bg" : "var(--background-color)",
        "visa-bg" : "var(--visa-color)",
        "visa-help-color" : "var(--visa-help)",
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

