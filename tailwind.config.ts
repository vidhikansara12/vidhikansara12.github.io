import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        foreground: "#111111",
        muted: "#555555",
        accent: "#4F46E5",
        card: "#FFFFFF",
        border: "#E5E5E5",
        tag: {
          bg: "#EEF2FF",
          fg: "#4F46E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        card: "12px",
        tag: "6px",
        button: "8px",
      },
      spacing: {
        section: "96px",
        "card-pad": "24px",
      },
      maxWidth: {
        content: "768px",
      },
      transitionDuration: {
        reveal: "400ms",
        hover: "200ms",
      },
      keyframes: {
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fade-slide-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
