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
      remotes: {
        projects: {
          type: "module",
          name: "projects",
          entry: "http://localhost:5173/remoteEntry.js",
          entryGlobalName: "projects",
          shareScope: "default",
        },
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
        zustand: {
          singleton: true,
          version: "^5.0.6",
        },
      },
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
});
