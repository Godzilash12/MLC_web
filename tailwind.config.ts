import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#09060F",
        surface: "#120D1F",
        "surface-2": "#1A1328",
        text: "#F7F1FF",
        "text-secondary": "#D6CDEB",
        muted: "#B5AACD",
        hint: "#9F94BA",
        accent: "#FF65DB",
        "accent-dark": "#CC3DB1",
        primary: "#6D43FF",
        "primary-dark": "#512DE0",
        border: "#271C3A",
        "border-dark": "#41305D",
        b2b: "#6D43FF",
        b2c: "#FF65DB"
      },
      fontFamily: {
        sans: ['"Montserrat"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"]
      },
      boxShadow: {
        soft: "0 24px 72px rgba(0, 0, 0, 0.28)",
        card: "0 16px 42px rgba(0, 0, 0, 0.24)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 80s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;
