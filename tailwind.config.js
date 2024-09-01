/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-gray-100": "#F5F7FB",
        "deep-gray-200": "#E6EBF5",
        "deep-blue-100": "#7269EF",
      },
    },
  },
  plugins: [nextui()],
};
