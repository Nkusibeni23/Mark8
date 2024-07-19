import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-page": "url('/assets/images/auth.jpg')",
      },
      fontFamily: {
        DM_Sans: ['"DM Sans"', "sans-serif"],
      },

      spacing: {
        "10": "2.7rem",
      },
    },
  },
  plugins: [],
};
export default config;
