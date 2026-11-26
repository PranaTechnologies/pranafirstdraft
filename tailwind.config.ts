import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        field: "#F3F3ED",
        surface: "#FFFFFF",
        graphite: "#171C19",
        "muted-green": "#68796F",
        "muted-ink": "#56635B",
        "subtle-grey": "#68796F",
        "border-grey": "#DCDFD6",
        signal: "#B9E36A",
        "deep-field": "#0B1110",
        "deep-surface": "#111917",
        "deep-border": "#212B28",
        "deep-muted": "#9AA59F",
      },
      maxWidth: {
        editorial: "1360px",
      },
      borderRadius: {
        card: "6px",
        sm: "4px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
