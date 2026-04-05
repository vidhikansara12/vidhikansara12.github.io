import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F7",
        foreground: "#1A1A1A",
        muted: "#6B6B6B",
        accent: "#5B4ED1",
        "accent-soft": "#EDE9FE",
        card: "#FFFFFF",
        border: "#E8E6E3",
        tag: {
          bg: "#F3F0FF",
          fg: "#5B4ED1",
        },
        warm: {
          50: "#FFFCF9",
          100: "#FFF8F0",
          200: "#F5F0EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
        "card-hover":
          "0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)",
        glass: "0 8px 32px rgba(0,0,0,0.06)",
        glow: "0 0 40px rgba(91,78,209,0.08)",
      },
      borderRadius: {
        card: "16px",
        tag: "8px",
        button: "10px",
      },
      spacing: {
        section: "120px",
        "card-pad": "28px",
      },
      maxWidth: {
        content: "800px",
      },
      transitionDuration: {
        reveal: "500ms",
        hover: "250ms",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up":
          "fade-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
