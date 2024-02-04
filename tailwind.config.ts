import type { Config } from "tailwindcss";

const { colors : defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(322, 100%, 66%)",
      "200" : "hsl(321, 100%, 78%)",
      "300" : "hsl(0, 100%, 63%)",
      "400" : "hsl(192, 100%, 9%)",
      "500" : "hsl(207, 100%, 98%)",
    }
  } 
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'desktop-top-2' : "url('/images/bg-section-top-desktop-1.svg')",
          'desktop-bottom-2' : "url('/images/bg-section-bottom-desktop-2.svg')"
      },
      fontFamily : {
        'poppins'  :'Poppins',
        'opensan' : 'Open Sans'
      },
      colors : colors
    },
  },
  plugins: [],
};
export default config;
