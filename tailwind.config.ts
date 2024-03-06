import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'yellow': '#F28627',
        'orange' :' #F27127',
        'black' : '#142620',
        'darkgreen' : '#19402E',
        'lightgreen' : '#327355',
        'blueCard' : '#DDF8FE',
        'gray' : '#788097',
        'white' : '#ffff',
        'darkblue' : '#027373',
        'blue' : '#04BF9D',
        'purple': 'rgb(238 210 255)',
        'boxShadow' : '0px 19px 60px rgb(0 0 0 / 8%)',
        'orangeCard': 'rgba(252, 166, 31, 0.45)',
        'smboxShadow': '-79px 51px 60px rgba(0, 0, 0, 0.08)',
    },
    extend: {
      backgroundImage: {
           "background" : " radial-gradient(circle, rgba(50,115,85,1) 0%, rgba(20,38,32,1) 100%) " 
       
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
