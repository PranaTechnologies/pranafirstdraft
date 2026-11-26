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
        canvas: "#F5F5F2",
        field: "#F5F5F2",
        surface: "#FFFFFF",
        carbon: "#101211",
        graphite: "#101211",
        "muted-green": "#4E6155",
        "muted-ink": "#4E5752",
        "subtle-grey": "#68796F",
        mist: "#DFE2DD",
        "border-grey": "#DFE2DD",
        signal: "#C5F36B",
        "deep-field": "#101211",
        "deep-surface": "#252826",
        "deep-border": "#252826",
        ash: "#858B86",
        "deep-muted": "#858B86",
      },
      maxWidth: {
        editorial: "1280px",
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
