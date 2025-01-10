import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
        },

        animation:{
          cursor: 'cursor .6s linear infinite alternate',
          type: 'type 2.7s ease-out .8s 1 normal none',
          },
          
          keyframes: {
            type: {
              '0%': { width: '0ch' },
              '5%, 10%': { width: '1ch' },
              '15%, 20%': { width: '2ch' },
              '25%, 30%': { width: '4ch' },
              '35%, 40%': { width: '6ch' },
              '45%, 50%': { width: '7ch' },
              '55%, 60%': { width: '8ch' },
              '65%, 70%': { width: '9ch' },
              '75%, 80%': { width: '10ch' },
              '85%, 90%': { width: '11ch' },
              '100%': { width: '12ch' },
            },

            cursor: {
              '0%, 40%': { opacity: '1' },
              '60%, 100%': { opacity: '0' },
            },

          },

    },
  },
  plugins: [],
} satisfies Config;

