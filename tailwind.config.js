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
        // primaryVariantFour: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.primaryVariantOne') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
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

