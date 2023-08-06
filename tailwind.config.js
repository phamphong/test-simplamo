/** @type {import("tailwindcss").Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#F37F26",
          100: "#FCF2E5",
          200: "#FFEFDD",
          300: "#FECACA",
          400: "#FAB784",
        },
        "info": "#2463EB",
        "success": "#13CE66",
        "error": "#EF4444",
      },
      spacing: {
        "1/2px": "0.5px",
        "1em": "1em",
      },
      fontSize: {
        "2xs": '0.625rem',
        "3xs": '0.5rem',
        "4xs": '0.375rem',
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    plugin(function ({ addVariant }) {
      addVariant('tab-active', '&.tab-active') // custom tab menu active
    })
  ],
}
