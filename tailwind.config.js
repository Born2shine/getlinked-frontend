/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryVariantOne: "#150E28",
        primaryVariantTwo: "#903AFF",
        primaryVariantThree: "#D434FE",
      },
      boxShadow: {
        shadowOne: '0px 4px 4px 0px #00000040'
      }
    },
    fontFamily: {
      clash: ["ClashDisplay-Variable"],
      clashLight: ["ClashDisplay-Light"],
      clashExtralight: ["ClashDisplay-Extralight"],
      clashRegular: ["ClashDisplay-Regular"],
      clashMedium: ["ClashDisplay-Medium"],
      clashSemibold: ["ClashDisplay-Semibold"],
      clashBold: ["ClashDisplay-Bold"],
    }
  },
  plugins: [],
}

