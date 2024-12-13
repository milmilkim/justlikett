import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        galmuri11: ["Galmuri11", "sans-serif"],
        galmuri9: ["Galmuri9", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
