/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlue: "#003479",
        primaryBrightAqua: "#00C2CB",
        neutralLightZinc: "#F5F5F5",
        neutralZinc: "#A1A1AA",
        deepBlue: "#003B59",
        deepZinc: "#1F2937",
        oceanBlue: "#206E95",
        softZinc: "#F2F2F2", // renamed from softGray
        orangeStar: "#FFB800",
        robinsEggBlueDark: "#009BA2",
        robinsEggBlueLight: "#CCF2F4",
        robinsEggBlueLighter: "#CCF2F4",
        robinsEggBlue: "#00C2CB",
        midnightBlue: "#002860",
        midnightBlueLight: "#4C688F",
        neutralDark: "#4C4D50",
        neutralDarker: "#191B1E",
        neutralBase: "#7F8082",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
    backgroundImage: {
      heroHeaderBg: "url(/bg/heroheaderbg.webp)",
      heroHeaderMainBg: "url(/bg/main_bg.webp)",
      heroFeatureBg: "url(/bg/herofeaturebg.webp)",
      ctaFooterBg: "url(/bg/ctafooterbg.webp)",
      ctaFooterBg2: "url(/bg/ctafooterbg_new.webp)",
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
