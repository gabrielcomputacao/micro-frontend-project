import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "projects",
      filename: "remoteEntry.js",
      remotes: {
        cards: {
          type: "module",
          name: "cards",
          entry: "http://localhost:5170/remoteEntry.js",
          entryGlobalName: "cards",
          shareScope: "default",
        },
        header: {
          type: "module",
          name: "header",
          entry: "http://localhost:5171/remoteEntry.js",
          entryGlobalName: "header",
          shareScope: "default",
        },
        footer: {
          type: "module",
          name: "footer",
          entry: "http://localhost:5172/remoteEntry.js",
          entryGlobalName: "footer",
          shareScope: "default",
        },
      },
      exposes: {
        "./StoreProducts": "./src/store/selectedItemsStore.ts",
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
  build: {
    target: "esnext",
  },
});
