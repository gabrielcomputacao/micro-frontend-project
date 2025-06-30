import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "../.."), "");

  return {
    define: {
      "import.meta.env.VITE_API_URL_PRODUCTS": JSON.stringify(
        env.VITE_API_URL_PRODUCTS
      ),
    },
    plugins: [
      react(),
      federation({
        name: "cards",
        filename: "remoteEntry.js",
        exposes: {
          "./ListCards": "./src/components/listCards/ListCards.tsx",
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
    resolve: {
      alias: {
        "@utils/modelsProduct": path.resolve(
          __dirname,
          "../../packages/models"
        ),
      },
    },
    server: {
      port: 5170,
      cors: true,
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
