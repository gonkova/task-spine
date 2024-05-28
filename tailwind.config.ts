// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro', 'Poppins', 'sans-serif'],
      },
      lineHeight: {
        '110': '1.1',
        '120': '1.2',
        '140': '1.4',
      },
      backgroundImage: {
        "gradient-to-bottom": "linear-gradient(180deg, rgb(221,255,182) 0%, rgba(255,255,255,1) 50%)",
 
      },
      colors: {
        custombg: '#ddffb6',
        primary: '#B4FF5C',
        secondary: '#F1F4F5',
        default: '#ADADAD',
        gray: '#606060',
        dark: {
          1: '#0C0C0C',
          2: '#353535',
          3: '#464646',
          4: '#7B7B7B',
        },
        light: {
          1: '#DCDCDC',
          2: '#EBEBEB',
          3: '#F4F4F4'
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

export default config;