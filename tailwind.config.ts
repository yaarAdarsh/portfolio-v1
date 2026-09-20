import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0D13",
        ink2: "#0F141C",
        raise: "#141A24",
        line: "#1F2833",
        linesoft: "#171E27",
        text: "#EAEEF3",
        muted: "#8A97A8",
        dim: "#5D6878",
        amber: "#F0B429",
        blue: "#5B8DEF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
