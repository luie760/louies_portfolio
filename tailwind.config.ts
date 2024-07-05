import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend:{
      colors: {
        "main-bg-black":"#222222",
        "section-bg-black":"252525",
      },
      content: {
        logo: "url('../../public/Logo.png')",
      },
    }
  },
  plugins: [],
};
export default config;
