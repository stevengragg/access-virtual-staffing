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
        softGray: "#F2F2F2",
        orangeStar: "#FFB800",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
    backgroundImage: {
      heroHeaderBg: "url(/bg/heroheaderbg.webp)",
      heroFeatureBg: "url(/bg/herofeaturebg.webp)",
      ctaFooterBg: "url(/bg/ctafooterbg.webp)",
      ctaFooterBg2: "url(/bg/ctafooterbg_new.webp)",
    },
  },
  presets: [require("@relume_io/relume-tailwind")],
  plugins: [require("tailwindcss-animate")],
};
export default config;
