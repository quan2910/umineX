import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      colors: {
        primary: "#2B38D1",
        secondary: {
          1: "#515D66",
          2: "#8D979E",
          3: "#212529",
          4: "#8D979E",
        },
        red: "#DC323C",
        green: {
          1: "#008A00",
          2: "#17F084",
        },
        blue: "#2B38D1",
        line: "#E5E8EC",
        bg: "#F1F5F6",
        yellow: "#FDE50B",
      },
    },
  },
  plugins: [],
};
export default config;
