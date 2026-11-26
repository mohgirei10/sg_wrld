import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { plan: "#4b1827", paper: "#d7ddd2", ink: "#2b0f18", hivis: "#ff6b1a", chalk: "#d7ddd2", steel: "#6b4a54" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-sans)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
