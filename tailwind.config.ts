import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "544px",
      md: "768px",
      lg: "921px",
      xl: "1240px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b8892d",
          dark: "#7a5517",
          light: "#f2d27a",
        },
        cream: "#F5F2EB",
        "dark-text": "#1e293b",
        "mid-text": "#334155",
        "muted-text": "#555555",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        marqueeScroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marqueeScroll 35s linear infinite",
        "fade-up": "fadeInUp 0.8s ease forwards",
        "fade-down": "fadeInDown 0.8s ease forwards",
        "fade-right": "fadeInRight 0.9s ease forwards",
        "fade-left": "fadeInLeft 0.9s ease forwards",
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
