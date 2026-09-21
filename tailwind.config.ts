import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142C4E",
          50: "#F0F4FA",
          100: "#DCE5F3",
          200: "#B8CBE7",
          300: "#94B1DC",
          400: "#7097D0",
          500: "#4779C5", // Primary Blue
          600: "#325CA0",
          700: "#224174",
          800: "#182F54",
          900: "#142C4E", // Primary Navy
          950: "#0D1D34",
        },
        brand: {
          navy: "#142C4E",
          blue: "#4779C5",
          yellow: "#F5B942",
          bg: "#F5F8FC",
          white: "#FFFFFF",
        },
        text: {
          primary: "#243247",
          secondary: "#64748B",
        },
        accent: {
          yellow: "#F5B942",
          "yellow-hover": "#E5A932",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(20, 44, 78, 0.06), 0 4px 20px -2px rgba(20, 44, 78, 0.04)",
        elevated: "0 10px 30px -4px rgba(20, 44, 78, 0.1), 0 6px 16px -4px rgba(20, 44, 78, 0.06)",
        card: "0 4px 24px 0 rgba(20, 44, 78, 0.06)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
