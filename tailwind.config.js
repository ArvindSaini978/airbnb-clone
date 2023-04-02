/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xsm':'440px',
      xsm:'540px',
      sm: '640px',
      md: '768px',
      xmd:'868px',
      lg: '1024px',
      '2lg': '1140px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl':'2000px',
    },
    extend: {
      colors:{
        primary:'#FF385C',
        secondry:'#fbfbe3',
        top:'#f7f5f5',
      },
      boxShadow:{
        custom:'0px 0px 16px -9px black',
        filterNPBtn:'0px 2px 16px -4px #534444',
      }
    },
  },
  plugins: [],
}
