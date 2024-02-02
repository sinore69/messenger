import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        deluge: {
          "50": "#f7f6fc",
          "100": "#f1eff8",
          "200": "#e3e1f3",
          "300": "#cfc9e9",
          "400": "#b5aadb",
          "500": "#9988ca",
          "600": "#846ab9",
          "700": "#755aa7",
          "800": "#614b8c",
          "900": "#513f73",
          "950": "#34284d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
