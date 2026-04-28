import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans Flex", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Quintessential", "serif"],
      },
    },
  },
} satisfies Config;
