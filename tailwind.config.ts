import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // permite ativar o modo noturno por classe
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // varre os arquivos dentro de /src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9AC28", // sua cor amarela personalizada
      },
    },
  },
  plugins: [],
};

export default config;
