/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
         primary: "#00B207"
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};