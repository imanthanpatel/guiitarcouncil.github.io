// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"], // Set Oswald as the default sans font
      },
    },
  },
  plugins: [],
} satisfies Config;