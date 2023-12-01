/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#282828',
        'white': '#F2EFE7',
      },
      fontFamily: {
        'sans': ['Inter', '"Zen Kaku Gothic New"', 'sans-serif'],
        'gibson': 'canada-type-gibson',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
