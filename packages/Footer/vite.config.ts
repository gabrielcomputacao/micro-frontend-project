import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/footer/Footer.tsx",
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
});
