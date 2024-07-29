/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "gray-scale-white": "#fff",
        "gray-scale-gray-900": "#1a1a1a",
        "gray-scale-gray-800": "#333",
        "gray-scale-gray-500": "#808080",
        "gray-scale-gray-300": "#b3b3b3",
        "gray-scale-gray-400": "#999",
        "gray-scale-gray-50": "#f2f2f2",
        "branding-success": "#00b307",
        limegreen: {
          "100": "#1acc21",
          "200": "rgba(0, 179, 7, 0.3)",
        },
        "gray-scale-gray-100": "#e6e6e6",
        "gren-gray-scale-50": "#edf2ee",
        "gren-gray-scale-200": "#b4ccb5",
        "gray-scale-gray-700": "#4d4d4d",
        gold: "#fcc900",
        "branding-warning": "#ff8a00",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        "branding-success-dark": "#2c742f",
        "branding-error": "#ea4b48",
        "gren-gray-scale-900": "#002603",
        "gray-scale-gray-200": "#ccc",
        "gray-scale-gray-600": "#666",
        "gren-gray-scale-100": "#dae6db",
        "gren-gray-scale-400": "#7a997c",
        "gren-gray-scale-700": "#2b572e",
        customColor: '#2C742F', // Added custom color
      },
      spacing: {},
      fontFamily: {
        "body-small-body-small-400": "Poppins",
      },
      borderRadius: {
        "7xs-3": "5.3px",
        "481xl": "500px",
        "24xl": "43px",
        "27xl": "46px",
        "31xl": "50px",
        "8xs": "5px",
        "34xl": "53px",
        "21xl": "40px",
      },
      container: {
        center: true,
        padding: "1.5rem", // Added container settings
      },
      boxShadow: {
        custom: "0px 0px 21px rgb(0 0 0 / 20%)", // Added custom box shadow
      },
    },
    fontSize: {
      xs: "12px",
      "2xs": "11px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      lg: "18px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "7xl": "26px",
      "31xl": "50px",
      "3xs": "10px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
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
          primary: "#00B207",
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