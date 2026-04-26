import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        secondary: "#f97316",
        accent: "#ffffff",
        background: "#f0f9ff",
        foreground: "#0c4a6e",
      },
    },
  },
  plugins: [],
};

export default config;
