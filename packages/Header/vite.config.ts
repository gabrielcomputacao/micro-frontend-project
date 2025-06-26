import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/header/Header.tsx",
      },
      shared: {
        react: {
          singleton: true,
          version: "^19.1.0",
        },
        "react-dom": {
          singleton: true,
          version: "^19.1.0",
        },
      },
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
});
