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
        aboutImage: "url('/assets/images/about-bg.png')"
      },
      colors: {
        lightGrey: '#eeeeee',
        royalBlue: '#2563EB',
        black: '#202124'
      },
      fontFamily: {
        body: 'Google Sans'
      }
    },
  },
  plugins: [],
};
export default config;
