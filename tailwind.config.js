/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#90f9d6",

          "secondary": "#c6d6ff",

          "accent": "#b994dd",

          "dark": "#212835",

          "light": "#E6EAEF",

          "info": "#528AE5",

          "success": "#149443",

          "warning": "#995B05",

          "error": "#F62369",

          "gray": "#A0A0A0",

          "orange": "#ffa500"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark" ]
  },
}

