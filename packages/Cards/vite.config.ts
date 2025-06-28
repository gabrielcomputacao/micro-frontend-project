import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "../.."), "");

  return {
    define: {
      ...Object.keys(env).reduce((prev: any, key) => {
        prev[`import.meta.env.${key}`] = JSON.stringify(env[key]);
        return prev;
      }, {}),
    },
    plugins: [
      react(),
      federation({
        name: "cards",
        filename: "remoteEntry.js",
        exposes: {
          "./ListCards": "./src/components/listCards/ListCards.tsx",
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
