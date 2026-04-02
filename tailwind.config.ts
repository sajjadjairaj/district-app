import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          dark: "#0A0A0A",
          card: "#141414",
          border: "#2A2A2A",
          terracotta: "#D95C41",
          orange: "#E88D39",
          white: "#FFFFFF",
          gray: "#888888",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-marker)", "cursive"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(0px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
