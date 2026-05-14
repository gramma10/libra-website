import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF8F2",
          50: "#FEFDFA",
          100: "#FBF8F2",
          200: "#F4EEE2",
        },
        ink: {
          DEFAULT: "#0B0F1A",
          soft: "#1B2030",
          muted: "#5B6072",
        },
        copper: {
          DEFAULT: "#A66440",
          50: "#FBEFE6",
          100: "#F2D6BF",
          200: "#E8B89A",
          400: "#C8835B",
          500: "#A66440",
          600: "#8A4F30",
          700: "#6B3C24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,15,26,0.04), 0 8px 24px rgba(11,15,26,0.06)",
        lift: "0 2px 4px rgba(11,15,26,0.05), 0 24px 48px rgba(11,15,26,0.10)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 50% -10%, rgba(232,184,154,0.55), transparent 60%), radial-gradient(800px 400px at 80% 10%, rgba(251,239,230,0.8), transparent 60%)",
        "copper-gradient":
          "linear-gradient(135deg, #C8835B 0%, #A66440 50%, #8A4F30 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
