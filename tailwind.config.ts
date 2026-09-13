import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17263a",
        pearl: "#f2f5f7",
        blush: "#ed765f",
        wine: "#246b61",
        brass: "#355edc",
        mist: "#d6e0e5"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 38, 58, 0.17)"
      }
    }
  },
  plugins: []
};

export default config;
